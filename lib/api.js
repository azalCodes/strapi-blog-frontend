// By default, this function will look at a STRAPI_API_URL env variable 
// in your .env file. If you don't have one, it will use the default url of 
// Strapi on your machine.
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// The fetchAPI function first gets the request URL thanks to the getStrapiURL function above.
// Then it calls the fetch function on this requestUrl and returns the data in a JSON format.
// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}