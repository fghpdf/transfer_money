import { CHOOSE_COUNTRY, CountryAction } from "../../store/country/types";

export default function countryReducer(previousState = null, action: CountryAction) {
  switch (action.type) {
    case CHOOSE_COUNTRY: {
      return action.country;
    }
  }

  return previousState
}