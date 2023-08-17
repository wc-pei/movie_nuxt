export default async (event: any) => {
  const { query, page } = getQuery(event)
  const config = useRuntimeConfig()

  const result = await $fetch(
    `${config.apiBaseUrl}/search/movie?query=${query}&api_key=${config.apiKey}&page=${page}&language=ja-JA`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.apiKey}`
      }
    }
  )

  return result
}