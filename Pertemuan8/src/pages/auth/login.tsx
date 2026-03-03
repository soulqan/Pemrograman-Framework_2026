import Head from "next/head";
import TampilanLogin from "../views/auth/login";

const HalamanLogin = () => {
    return(
  <>
   <Head>
        <title>Halaman Login</title>{/*Judul Halaman*/}
    </Head>
    <TampilanLogin/>
    </>
    );
};
export default HalamanLogin;