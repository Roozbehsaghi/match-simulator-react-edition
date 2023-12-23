import axios from "axios";

export async function fetchEuropeanCountryNames() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const countries = response.data.map((country: any) => country.name.common);

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
