import axios from "axios";

export async function fetchEuropeanCountryNames() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const countries = response.data.map((country: any) => country.name.common);
    console.log("countries:", countries);

    const europeanCountries = response.data.filter(
      (country: any) => country.region === "Europe"
    );
    const countryNames = europeanCountries.map(
      (country: any) => country.name.common
    );
  } catch (error: any) {
    console.error("Error fetching country names:", error.message);
  }
}

export const countries = [
  "Qatar",
  "Ecuador",
  "Senegal",
  "Netherlands",
  "England",
  "Iran",
  "USA",
  "Wales",
  "Argentina",
  "Saudi Arabia",
  "Mexico",
  "Poland",
  "France",
  "Australia",
  "Denmark",
  "Tunisia",
  "Spain",
  "Costa Rica",
  "Germany",
  "Japan",
  "Belgium",
  "Canada",
  "Morocco",
  "Croatia",
  "Brazil",
  "Serbia",
  "Switzerland",
  "Cameroon",
  "Portugal",
  "Republic of Korea",
];

console.log(countries);
