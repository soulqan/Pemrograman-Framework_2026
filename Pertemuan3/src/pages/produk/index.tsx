import { useRouter } from "next/router";
import { useEffect } from "react";

const Produk = () => {
    const router = useRouter();
    const { status } = router.query; 

    useEffect(() => {
        if (router.isReady && status !== 'success') {
            router.push("/auth/login");
        }
    }, [router.isReady, status, router]);

    if (status === 'success') {
        return (
            <div>
                <h1>Produk User Page</h1>
            </div>
        );
    }
;
};

export default Produk;