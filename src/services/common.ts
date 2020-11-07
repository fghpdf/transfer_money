import { AxiosRequestConfig } from "axios";

export const thunes = {
  basicUrl: process.env.REACT_APP_THUNES_SERVER_URL
}

export const thunesBaseRequest: AxiosRequestConfig = {
  baseURL: thunes.basicUrl
}