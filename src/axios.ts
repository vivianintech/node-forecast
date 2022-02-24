import axios from "axios";

const instance = axios.create({
  baseURL: "https://api2.binance.com/api/v3/ticker/24hr",
});

export default instance;
