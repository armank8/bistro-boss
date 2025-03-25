import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-eight-pearl.vercel.app",
});

export default function useAxiosPublic() {
  return axiosPublic;
}
