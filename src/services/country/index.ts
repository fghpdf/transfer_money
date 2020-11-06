import 'axios'
import Axios from 'axios'
import { ICountry } from '../../interfaces/country.interface'
import { thunesBaseRequest } from '../common'

const listCountries = async () => {
    const { data } = await Axios.get<Array<ICountry>>("/api/countries", thunesBaseRequest)
    return data;
}

export { listCountries }