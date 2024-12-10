import re
from frameworks.framework_list import framework_list
from benefits.benefits_list import benefits_list

def get_keywords_map(data):
    framework_map = {}
    for framework in data:
        framework_map[framework["name"].lower()] = framework["name"]
        
        for variation in framework["variations"]:
            framework_map[variation.lower()] = framework["name"]
    
    return framework_map

def extract_frameworks(description, keywords):
    matches = re.findall(r'\b(?:' + '|'.join(keywords.keys()) + r')\b', description, re.IGNORECASE)
    standardized_frameworks = {keywords[match.lower()] for match in matches}
    return list(standardized_frameworks)

def prepare_jobs(jobs):
    for job in jobs:
        job["frameworks"] = extract_frameworks(job["description"], get_keywords_map(framework_list()))
        job["benefits"] = extract_frameworks(job["description"], get_keywords_map(benefits_list()))