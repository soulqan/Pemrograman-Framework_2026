import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  nama: string;
  price: number;
  size: string;
  category: string;
};

const TampilanProduk = () => {
  // const router = useRouter();
  // const { status } = router.query;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return(
    <div>
      <h1>Daftar produk</h1>
      <button onClick={fetchProducts} disabled={loading} style={{marginBottom: '1rem'}}>
        {loading ? 'Merefresh...' : 'Refresh Data'}
      </button>
      {products.map((products: ProductType) => (
        <div key={products.id}>
          <h2>{products.nama}</h2>
          <p>Harga: {products.price}</p>
          <p>Ukuran: {products.size}</p>
          <p>Kategori :{products.category}</p>
        </div>
      ))}
    </div>
  )

};

export default TampilanProduk;

  // useEffect(() => {
  //   if (router.isReady && status !== "success") {
  //     router.push("/auth/login");
  //   }
  // }, [router.isReady, status, router]);

  // if (status === "success") {
  //   return (
  //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  //       <div className="bg-white p-8 rounded-lg shadow-md text-center">
  //         <h1 className="text-3xl font-bold text-blue-600 mb-4">
  //           Produk User Page
  //         </h1>
  //       </div>
  //     </div>
  //   );
  // }