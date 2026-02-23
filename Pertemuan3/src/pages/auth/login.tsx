import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
    const { push } = useRouter();

    const handlerLogin = () => {

        push({
            pathname: '/produk',
            query: { status: 'success' },
        });
    };

    return (
        <div>
            <h1>Halaman Login</h1>
            <button onClick={handlerLogin}>Login</button>
            <br /><br />
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
    );
};

export default HalamanLogin;