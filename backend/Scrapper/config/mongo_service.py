import os
from pymongo import MongoClient, UpdateOne
from pymongo.server_api import ServerApi
import datetime
from dotenv import load_dotenv

load_dotenv()

def get_mongo_client():
    uri = os.getenv("MONGO_URI")
    client = MongoClient(uri, server_api=ServerApi('1'))
    db = client["linkebot"]
    return db["jobs"], client

def process_jobs_and_create_operations(jobs):
    operations = []
    for job in jobs:
        for key, value in job.items():
            if isinstance(value, datetime.date):
                job[key] = datetime.datetime(value.year, value.month, value.day)
        if "job_url" in job:
            operations.append(
                UpdateOne(
                    {"job_url": job["job_url"]}, 
                    {"$set": job},
                    upsert=True
                )
            )
        else:
            print(f"Job skipped due to missing 'job_url': {job}")
    return operations

def insert_or_update_jobs(collection, operations):
    if operations:
        result = collection.bulk_write(operations)
        print(f"Documents inserted: {result.upserted_count}, Documents updated: {result.modified_count}")
