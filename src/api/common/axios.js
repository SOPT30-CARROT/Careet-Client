import axios from "axios";

const MOCK_BASE_URL = "http://localhost:8080";
const REAL_BASE_URL = "http://13.125.254.72:8000";
const mock = axios.create({
  baseURL: MOCK_BASE_URL,
});

const real = axios.create({
  baseURL: REAL_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const mockReq = {
  async GET(path) {
    const { data } = await mock(path);
    return data;
  },

  async PATCH(path, body) {
    await mock.patch(path, body);
  },
};

export const realReq = {
  async GET(path) {
    const { data } = await real(path);
    return data;
  },

  async POST(path, body) {
    const { data } = await real.post(`/${path}`);
    return data;
  },
};
