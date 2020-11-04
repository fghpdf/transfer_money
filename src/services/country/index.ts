import 'axios'
import Axios from 'axios'
import { ICountry } from '../../interfaces/country.interface'

const listCountries = async () => {
    const { data } = await Axios.get<Array<ICountry>>("http://localhost:8080/api/countries")
    return data;
}

export { listCountries }