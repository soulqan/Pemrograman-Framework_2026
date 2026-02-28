import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";

const TampilanLogin = () => {
    const { push } = useRouter();

    const handlerLogin = () => {

        push({
            pathname: '/produk',
            query: { status: 'success' },
        });
    };

    return (
        <div className={styles.login}>
            <img src="/login-image.png" alt="login" className={styles.login__image}/>{/*Gambar ilustrasi*/}
            <p>Ini adalah halaman login</p><br /><br /> {/*deskripsi Singkat*/}
            <h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>
            <button onClick={handlerLogin}>Login</button><br/>
            <h1 style={{color:"red", border:"1px solid red",borderRadius:"5px",padding:"5px"}}> belum punya akun</h1>
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
    );
};

export default TampilanLogin;