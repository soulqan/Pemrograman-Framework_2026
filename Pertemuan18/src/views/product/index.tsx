import styles from "../../pages/produk/product.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";

type ProductType = {
    id: string;
    nama: string;
    price: number;
    image: string;
    size: string;
    category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

    const categories = useMemo(() => {
        if (!products || products.length === 0) return ["Semua"];
        const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
        return ["Semua", ...uniqueCategories];
    }, [products]);

    const filteredProducts = useMemo(() => {
        if (!products) return [];
        if (selectedCategory === "Semua") return products;
        return products.filter((product) => product.category === selectedCategory);
    }, [products, selectedCategory]);

    return (
        <div className={styles.produk}>
            <h1 data-testid="title">Daftar Produk</h1>

            {/* Category Filter */}
            <div className={styles.produk__filter}>
                <h3>Filter Kategori:</h3>
                <div className={styles.produk__filterButtons}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.produk__filterBtn} ${
                                selectedCategory === category
                                    ? styles.produk__filterBtn__active
                                    : ""
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.produk__content}>
                {filteredProducts && filteredProducts.length > 0 ? (
                    <>
                        <p className={styles.produk__count}>
                            Menampilkan {filteredProducts.length} produk
                        </p>
                        {filteredProducts.map((product: ProductType) => (
                            <Link
                                href={`/produk/${product.id}`}
                                key={product.id}
                                className={styles.produk__content__item}
                            >
                                <div className={styles.produk__content__item__image}>
                                    <Image
                                        src={product.image}
                                        alt={product.nama}
                                        width={200}
                                        height={200}
                                        quality={75}
                                        priority={false}
                                    />
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
                ) : (
                    <div className={styles.produk__content__empty}>
                        <p>Tidak ada produk untuk kategori "{selectedCategory}"</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TampilanProduk;


