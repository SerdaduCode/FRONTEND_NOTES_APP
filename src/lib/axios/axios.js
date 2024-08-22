import Axios from "axios";
import { setupInterceptor } from "./interceptor";

let instance = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

instance = setupInterceptor(instance);
export default instance;
