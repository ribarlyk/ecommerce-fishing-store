
import createImageUrlBuilder from '@sanity/image-url'

import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "o4s6ckjz",
    dataset: "production",
    apiVersion: "2023-06-02",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
