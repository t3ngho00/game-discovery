import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "52f6abe3128a4f289f327c5f7161d702",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  };

  get = async (id: string | number) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
