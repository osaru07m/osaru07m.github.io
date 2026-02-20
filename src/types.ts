export type Article = {
  title: string,
  link: string,
  pubDate?: string,
  source: string,
}

export type Work = {
  title: string,
  description: string,
  clientName?: string,
  clientUrl?: string,
  skills: string[],
  comment?: string,
  url?: string,
  thumbnail?: string,
  date: string
}
