import Link from "next/link";
import styles from "../../styles/admin.module.scss";

const HalamanAdmin = () => {
    return (
        <div className={styles.admin}>
            <div className={styles.admin__container}>
                <h1>Halaman Admin</h1>
                <p>Selamat datang di halaman admin! Anda memiliki akses penuh ke semua 
                    fitur dan data di aplikasi ini. Di sini, Anda dapat mengelola pengguna, 
                    melihat laporan, dan melakukan tugas administratif lainnya. Pastikan untuk 
                    menggunakan hak akses dengan bijak dan menjaga keamanan data Pengguna
                </p>
                
                <div className={styles.admin__actions}>
                    <Link href="/admin/add-product" className={styles.admin__actionBtn}>
                        ➕ Tambah Produk Baru
                    </Link>
                    <Link href="/produk" className={styles.admin__actionBtn}>
                        📦 Lihat Semua Produk
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default HalamanAdmin;