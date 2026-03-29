import { useSession } from "next-auth/react";
const HalamanProfile = () => {
    const { data }: any = useSession();
    return(
        <div>
            <h1>Halaman Profile</h1>
            <h1>Welcome, {data?.user?.fullname}</h1>
        </div>
    )
}

export default HalamanProfile;
