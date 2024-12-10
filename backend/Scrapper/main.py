from services.content_extractor import prepare_jobs
from services.scrape_jobs_service import fetch_jobs
from config.mongo_service import get_mongo_client, process_jobs_and_create_operations, insert_or_update_jobs

def main():    
    collection, client = get_mongo_client()

    jobs = fetch_jobs()
    prepare_jobs(jobs)
    print(f"Found {len(jobs)} jobs")
    
    operations = process_jobs_and_create_operations(jobs)
    insert_or_update_jobs(collection, operations)
    
    client.close()

if __name__ == "__main__":
    main()
