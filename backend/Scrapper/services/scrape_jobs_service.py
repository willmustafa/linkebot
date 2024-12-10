from jobspy import scrape_jobs
import argparse

def fetch_jobs():
    parser = argparse.ArgumentParser()
    parser.add_argument('-results', type=int)
    parser.add_argument('-search')
    args = parser.parse_args()

    jobs = scrape_jobs(
        site_name=["indeed", "linkedin", "glassdoor", "google"],
        search_term=args.search if args.search else "desenvolvedor",
        google_search_term=args.search if args.search else "desenvolvedor",
        location="Brasil",
        distance=3000,
        results_wanted=args.results if args.results else 100,
        country_indeed='brazil',
        linkedin_fetch_description=True
    )
    return jobs.to_dict('records')
