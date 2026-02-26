import { useRouter } from "next/router";
import { useEffect } from "react";

const TampilanProduk = () => {
  const router = useRouter();
  const { status } = router.query;

  useEffect(() => {
    if (router.isReady && status !== "success") {
      router.push("/auth/login");
    }
  }, [router.isReady, status, router]);

  if (status === "success") {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Produk User Page
          </h1>
        </div>
      </div>
    );
  }
};

export default TampilanProduk;