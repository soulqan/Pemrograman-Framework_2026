import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/admin.module.scss";

const AddProduct = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama: "",
    price: "",
    image: "",
    size: "",
    category: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const categories = ["Elektronik", "Fashion", "Furniture", "Makanan", "Olahraga", "Lainnya"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/produk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Produk berhasil ditambahkan!");
        setFormData({
          nama: "",
          price: "",
          image: "",
          size: "",
          category: "",
          description: "",
        });
        setTimeout(() => {
          router.push("/produk");
        }, 2000);
      } else {
        setError(data.message || "Gagal menambahkan produk");
      }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat menambahkan produk");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.addProduct}>
      <div className={styles.addProduct__container}>
        <h1 className={styles.addProduct__title}>Tambah Produk Baru</h1>

        {error && <div className={styles.addProduct__error}>{error}</div>}
        {success && <div className={styles.addProduct__success}>{success}</div>}

        <form className={styles.addProduct__form} onSubmit={handleSubmit}>
          <div className={styles.addProduct__formGroup}>
            <label htmlFor="nama">Nama Produk *</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              placeholder="Masukkan nama produk"
            />
          </div>

          <div className={styles.addProduct__formGroup}>
            <label htmlFor="price">Harga (Rp) *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Masukkan harga produk"
              min="0"
            />
          </div>

          <div className={styles.addProduct__formGroup}>
            <label htmlFor="image">URL Gambar *</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="Masukkan URL gambar produk"
            />
          </div>

          <div className={styles.addProduct__formGroup}>
            <label htmlFor="size">Ukuran *</label>
            <input
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
              placeholder="Contoh: M, L, XL atau 10x10cm"
            />
          </div>

          <div className={styles.addProduct__formGroup}>
            <label htmlFor="category">Kategori *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Pilih kategori</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.addProduct__formGroup}>
            <label htmlFor="description">Deskripsi</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Masukkan deskripsi produk (opsional)"
              rows={5}
            />
          </div>

          <div className={styles.addProduct__actions}>
            <button
              type="submit"
              className={styles.addProduct__submitBtn}
              disabled={isLoading}
            >
              {isLoading ? "Menambahkan..." : "Tambah Produk"}
            </button>
            <button
              type="button"
              className={styles.addProduct__cancelBtn}
              onClick={() => router.push("/admin")}
            >
              Batalkan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
