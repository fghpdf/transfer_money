import { ICountry } from "../../interfaces/country.interface";
import { IPayer } from "../../interfaces/payer.interface";
import { CHOOSE_COUNTRY, CountryAction } from "../../store/country/types";
import { CHOOSE_PAYER, PayerAction } from "../../store/payer/types";

export function choosePayer(payer:IPayer): PayerAction {
    return {
        type: CHOOSE_PAYER,
        payer
    }
}

export function chooseCountry(country:ICountry): CountryAction {
    return {
        type: CHOOSE_COUNTRY,
        country
    }
}