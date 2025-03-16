import axios from "axios";

if (!process.env.NEXT_PUBLIC_RAWG_API_KEY) {
  throw new Error("RAWG_API_KEY is not defined");
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.NEXT_PUBLIC_RAWG_API_KEY,
  },
});
