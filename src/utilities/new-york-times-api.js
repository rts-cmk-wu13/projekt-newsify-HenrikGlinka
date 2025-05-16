const BASE_URL = 'https://api.nytimes.com/svc/';

const API_KEY = import.meta.env.VITE_NYT_API_KEY;

const FIVE_MINUTES = 1000 * 60 * 5;

const cache = JSON.parse( localStorage.getItem('cache') ) ?? {};

export async function getMostPopular(endpoint, days) {
    const url = new URL(`mostpopular/v2/${endpoint}/${days}.json`, BASE_URL);

        return fetchData(url);
}

export async function getTopStories() {
    const url = new URL('topstories/v2/home.json', BASE_URL);

        return fetchData(url);
}

export async function arcticleSearch(query, filter) {
    const url = new URL(`search/v2/articlesearch.json`, BASE_URL);

    url.searchParams.append('q', query)

    return fetchData(url)
}



async function fetchData(url, ttl = FIVE_MINUTES) {
    url.searchParams.append('api-key', API_KEY);

    if (cache[url.href] !== undefined && cache[url.href].expiresAt > Date.now()) {
        const expiresInSeconds = Math.round((cache[url.href].expiresAt - Date.now()) / 1000);
        console.log(`Returning cached data. Expires in ${expiresInSeconds} seconds`);
        
        return cache[url.href].results;
    }

    console.log('Fetching new data...');
    
    const response = await fetch(url);
    const data = await response.json();

    data.expiresAt = Date.now() + ttl;

    cache[url.href] = data;

    localStorage.setItem('cache', JSON.stringify(cache))

    return data.results;
}