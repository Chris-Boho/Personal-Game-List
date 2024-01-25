import axios from "axios"
import { db } from "./db"

export async function getAccessToken(){
  axios.post(process.env.IGDB_URL!, {
    client_id: process.env.TWITCH_CLIENT_ID,
    client_secret: process.env.TWITCH_CLIENT_SECRET,
    grant_type: "client_credentials"
  }).then(response => {
    console.log("Success: ", response.data)
    return response.data
  }).catch(error => {
    console.error("Error", error)
  })
}

