from jobspy import scrape_jobs

def fetch_jobs():
    jobs = scrape_jobs(
        site_name=["indeed", "linkedin", "glassdoor", "google"],
        search_term="desenvolvedor",
        google_search_term="desenvolvedor",
        location="Brasil",
        distance=3000,
        results_wanted=1000,
        country_indeed='brazil',
        linkedin_fetch_description=True
    )
    return jobs.to_dict('records')
