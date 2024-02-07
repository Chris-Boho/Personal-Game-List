import axios from "axios";
import { useAccessToken } from "~/server/token";
import getCovers from "./getCovers";
import getRelease from "./getReleaseDates";

type Props = {
  endpoint: string;
  requestBody: string;
  getCover: boolean;
};

export default async function makeRequest({
  endpoint,
  requestBody,
  getCover,
}: Props) {
  const URL = `https://api.igdb.com/v4${endpoint}`;

  const authorization = await useAccessToken();

  const headers = {
    "Client-ID": "cetsr40yovidpb1de2zd1y3a822qs3",
    Authorization: `Bearer ${authorization?.token}`,
    Accept: "application/json",
  };

  let result;

  const resp = await axios.post(URL, requestBody, { headers });
  if (getCover == true) {
    result = await getCovers({ games: resp.data });
  } else {
    result = resp.data;
  }

  return result;
}
