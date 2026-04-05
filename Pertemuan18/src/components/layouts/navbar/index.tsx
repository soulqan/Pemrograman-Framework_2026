import syles from './navbar.module.css';
import Script from 'next/dist/client/script'
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';

const Navbar = () => {
    const { data }: any = useSession();
    return (
  <div className={syles.navbar}>
    <div className={syles.navbar__brand}>
      <Script id="title-script" strategy='lazyOnload'>
        {`document.getElementById('title').innerHTML = 'MyApp';`}
      </Script>
    </div>

    <div className={syles.navbar__right}>
      {data ? (
        <>
          <div className={syles.navbar__user}>
            Welcome, {data.user?.fullname}
            {data.user?.image && (
              <Image
                src={data.user.image}
                alt={data.user.fullname}
                width={42}
                height={42}
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