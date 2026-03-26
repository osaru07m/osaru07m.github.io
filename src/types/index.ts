export type Work = {
  id: string,
  title: string,
  description: string,
  client_name?: string,
  client_url?: string,
  skills: string[],
  product_url?: string,
  product_image?: {
    url: string,
    alt?: string,
    width?: number,
    height?: number,
  },
  start_at: string,
  end_at?: string,

  createdAt: string,
  updatedAt: string,
  publishedAt?: string,
  revisedAt?: string,
}

export type Article = {
    title: string,
    link: string,
    pubDate?: Date | undefined,
    source: string,
    favicon: string,
}
