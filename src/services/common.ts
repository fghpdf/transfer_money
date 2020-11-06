import { AxiosRequestConfig } from "axios";
import { env } from "process";

const thunesBasicUrl = env.NODE_ENV === "production" ? "" : "http://localhost:8080";

export const thunes = {
  basicUrl: thunesBasicUrl
}

export const thunesBaseRequest: AxiosRequestConfig = {
  baseURL: thunes.basicUrl
}