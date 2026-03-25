import syles from './navbar.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
const Navbar = () =>{
    const {data} = useSession();
    return(
        <div className={syles.navbar}>
            <div className="big">
                Navbar Component
                </div>
                {data ? (
                    <button onClick={() => signOut()}>Sign Out</button>
                ):(
                    <button onClick={() => signIn()}>Sign In</button>
                )}  
        </div>
    );
};

export default Navbar;
