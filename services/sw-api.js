const baseUrl = "https://swapi.dev/api/"

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/sharships`)
  return res.json()
}