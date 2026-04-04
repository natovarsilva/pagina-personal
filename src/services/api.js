export const getCountryByName = async (country) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );

  if (!response.ok) {
    throw new Error("Error al obtener datos");
  }

  const data = await response.json();
  return data[0];
};