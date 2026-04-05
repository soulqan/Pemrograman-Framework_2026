import syles from './navbar.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
const Navbar = () => {
    const { data }: any = useSession();
    return (
  <div className={syles.navbar}>
    <div className={syles.navbar__brand}>
      MyApp
    </div>

    <div className={syles.navbar__right}>
      {data ? (
        <>
          <div className={syles.navbar__user}>
            Welcome, {data.user?.fullname}
            {data.user?.image && (
              <img
                src={data.user.image}
                alt={data.user.fullname}
                className={syles.navbar__user__image}
                />
              )}
          </div>
          <button
            className={`${syles.navbar__button} ${syles["navbar__button--danger"]}`}
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          className={`${syles.navbar__button} ${syles["navbar__button--primary"]}`}
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </div>
  </div>
);
};

export default Navbar;