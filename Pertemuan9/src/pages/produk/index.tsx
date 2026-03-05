import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const kategori = () => {

  const[products, setproducts] = useState([]);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  // if (error) {
  //   return <div>Error loading products</div>;
  // }

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data.data} />
    </div>
  );
};

export default kategori;