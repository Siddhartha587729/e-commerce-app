import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId:'gebzap1y',
    dataset:'production',
    apiVersion:'2023-01-01',
    useCdn: true
});

const builder = imageUrlBuilder( client )

export function urlFor(source: any){
    return builder.image(source);
}