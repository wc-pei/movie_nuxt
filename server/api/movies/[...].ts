export default async (event: any) => {
  const id = [...event.node.req.url.split("/")].pop()
  const config = useRuntimeConfig()

  const result = await $fetch(
    `${config.apiBaseUrl}/movie/${id}?api_key=${config.apiKey}&language=ja-JA`,
    {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${config.apiKey}`
      }
    })

    return result
}