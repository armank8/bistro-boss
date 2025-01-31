import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  const axiosSecure = useAxiosSecure();
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => setMenu(data));
  // }, []);

  const { data: menu = [], isPending: loading, refetch } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await axiosSecure.get('/menu');
      return res.data;
    }
  });

  return [menu, loading, refetch];
};

export default useMenu;
