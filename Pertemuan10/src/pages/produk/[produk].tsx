import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

const HalamanProduk = ({product}:{product: ProductType}) => {
    // const {query} = useRouter();
    // const {data, error,isLoading} = useSWR(`/api/produk/${query.produk}`, fetcher);
    // return(
    //     <div>
    //         <DetailProduk products={isLoading ? [] : data.data} />
    //     </div>
    // );

    return (
        <div>
            <DetailProduk products={product} />
        </div>
    );
};

export default HalamanProduk;

// export async function getServerSideProps({params}: { params: { produk: string}}){
//     const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
//     const response = await res.json();

//     return{
//         props: {
//             product: response.data,
//         },
//     };
// }

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/products');
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: { produk: product.id }
  }));

  // console.log("Paths yang dihasilkan untuk produk:", paths);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
  // const response: ProductType[] = await res.json();
  const response: { data: ProductType[] } = await res.json();

  // console.log("Data produk yang diambil dari API:", response);
  return {
    props: {
      product: response.data,
    }
  };
}