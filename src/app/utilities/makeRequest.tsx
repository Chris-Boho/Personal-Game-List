import axios from "axios";
import { useAccessToken } from "~/server/token";

type Props = {
  endpoint: string;
  requestBody: string;
};

export default async function makeRequest({ endpoint, requestBody }: Props) {
  const URL = `https://api.igdb.com/v4${endpoint}`;

  const authorization = await useAccessToken();

  const headers = {
    "Client-ID": "cetsr40yovidpb1de2zd1y3a822qs3",
    Authorization: `Bearer ${authorization?.token}`,
    Accept: "application/json",
  };

  const resp = await axios.post(URL, requestBody, { headers });
  // console.log("RESP: ", resp.data);
  console.log(`Response from ${endpoint} has been received!`);
  if (endpoint == "/covers") {
    console.log("Covers: ", resp.data);
  }
  return resp.data;
}
