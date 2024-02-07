import makeRequest from "./makeRequest";

type RequestParams = {
  endpoint: string;
  requestBody: string;
  getCover: boolean;
};

export async function makeRequestWithDelay(requestParams: RequestParams) {
  console.log("DELAYING...");
  const delay = 1000; // 1 second delay
  await new Promise((resolve) => setTimeout(resolve, delay));
  return makeRequest(requestParams);
}
