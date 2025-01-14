import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "52f6abe3128a4f289f327c5f7161d702",
  },
});