import { ICountry } from "../../interfaces/country.interface";

export const CHOOSE_COUNTRY = "CHOOSE_COUNTRY"

interface ChooseCountryAction {
    type: typeof CHOOSE_COUNTRY
    country: ICountry
}

export type CountryAction = ChooseCountryAction