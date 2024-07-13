/* obtener info del episodio */
export const episodeData = async (episodioId) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/${episodioId.id}`
  )
  const data = await response.json()

  data.Personajes = []

  data.characters.map((character) => {
    fetch(character)
      .then((response) => response.json())
      .then((response) => {
        data.Personajes.push(response.image)
      })
  })
  console.log(data.Personajes)
  return data
}
