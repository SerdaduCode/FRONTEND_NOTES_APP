import Axios from "axios";
import { setupInterceptor } from "./interceptor";

let instance = Axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

instance = setupInterceptor(instance);
export default instance;
