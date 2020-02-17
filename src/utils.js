export const fetchData = async (url) => {
  return await fetch(url).then((resp) => {
    // Validate response
    if (!resp.ok) {
      return Promise.reject(new Error(resp.statusText))
    }

    return resp.json()
  })
}
