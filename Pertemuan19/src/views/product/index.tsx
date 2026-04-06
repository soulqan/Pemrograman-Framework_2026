import styles from "../../pages/produk/product.module.scss";
import Link from "next/link";
import Image from "next/image";

type ProductType = {
    id: string;
    nama: string;
    price: number;
    image: string;
    size: string;
    category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
    return (
        <div className={styles.produk}>
            {/* <h1 className={styles.produk__title}>Daftar Produk</h1> */}
            <h1 data-testid="title">Daftar Produk</h1>
            <div className={styles.produk__content}>
                {products.length > 0 ? (
                    <>
                     {products.map((product: ProductType) => (
                     <Link href={`/produk/${product.id}`} key={product.id} className={styles.produk__content__item}>
                        <div className={styles.produk__content__item__image}>
                                <Image
                                    src={product.image}
                                    alt={product.nama}
                                    width={200}
                                    height={200}
                                    quality={75}
                                    priority={false}
                                />
                            {/* <img src={product.image} alt={product.nama} width={200} /> */}
                        </div>
                        <h4 className={styles.produk__content__item__name}>
                            {product.nama}
                        </h4>
                        <p className={styles.produk__content__item__category}>
                            Kategori: {product.category}
                        </p>
                        <p className={styles.produk__content__item__price}>
                            Rp {product.price.toLocaleString("id-ID")}
                        </p>
                        <p className={styles.produk__content__item__size}>
                            Ukuran: {product.size}
                        </p>
                    </Link>
                ))}
                </>
                ) :(<div className={styles.produk__content__skeleton}>
                    <div className={styles.produk__content__skeleton__image}></div>
                    <div className={styles.produk__content__skeleton__name}></div>
                    <div className={styles.produk__content__skeleton__category}></div>
                    <div className={styles.produk__content__skeleton__price}></div>
                    <div className={styles.produk__content__skeleton__size}></div>
                </div>
                )}
            </div>
        </div>
    );
};

export default TampilanProduk;

