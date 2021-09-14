import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}

/* 
This ^^ function returns the correct URL of an image depending on where it is 
hosted (either on your local machine or on hosted on a server).

Locally, an image has a URL structure like so: /uploads/… 
Whereas on Cloudinary it has a URL structure like this: https://cloudinary.com/...
*/