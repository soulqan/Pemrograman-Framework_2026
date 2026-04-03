import Link from "next/link";
import style from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const Tampilanlogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { push, query } = useRouter();
    const callbackUrl: any = query.callbackUrl || "/";
    const [error, setError] = useState("");

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        // const form = event.currentTarget;
        // const formData = new FormData(event.currentTarget);
        // const email = (formData.get("email") as string)?.trim();
        // const fullname = (formData.get("fullname") as string)?.trim();
        // const password = formData.get("password") as string;

        // if (!email) {
        //     setError("Email wajib diisi");
        //     return;
        // }

        // if (!password || password.length < 6) {
        //     setError("Password minimal 6 karakter");
        //     return;
        // }

        // if (!fullname) {
        //     setError("Nama lengkap wajib diisi");
        //     return;
        // }
        setError("");
        setIsLoading(true);

        // const response = await fetch("/api/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ email, fullname, password }),
        // });


        // if (response.ok) {
        //     form.reset();
        //     setIsLoading(false);
        //     push("/auth/login");
        // } else {
        //     setIsLoading(false);
        //     try {
        //         const data = await response.json();
        //         setError(data.name || "Terjadi kesalahan");
        //     } catch {
        //         setError("Terjadi kesalahan");
        //     }
        // }
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl,
            });

            // console.log("signIn response:", res);
            if (!res?.error) {
                setIsLoading(false);
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError(res?.error || "Login failed");
            }
        } catch (error) {
            setIsLoading(false);
            setError("wrong email or password");
        }
    };

    return (
        <div className={style.login}>
            {error && <p className={style.login__error}>{error}</p>}
            <h1 className={style.login__title}>Halaman login</h1>
            <div className={style.login__form}>
                <form onSubmit={handleSubmit}>
                    <div className={style.login__form__item}>
                        <label
                            htmlFor="email"
                            className={style.login__form__item__label}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className={style.login__form__item__input}
                        />
                    </div>

                    {/* <div className={style.login__form__item}>
                        <label
                            htmlFor="Fullname"
                            className={style.login__form__item__label}
                        >
                            Fullname
                        </label>
                        <input
                            type="text"
                            id="Fullname"
                            name="fullname"
                            placeholder="Fullname"
                            className={style.login__form__item__input}
                        />
                    </div> */}

                    <div className={style.login__form__item}>
                        <label
                            htmlFor="Password"
                            className={style.login__form__item__label}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            className={style.login__form__item__input}
                        />
                    </div>
                    <button type="submit"
                        className={style.login__form__item__button}
                        disabled={isLoading}>
                        {isLoading ? "Loading..." : "login"}
                    </button>
                </form>
                <br />
                <p className={style.login__form__item__text}>
                    tidak punya {"'"} akun? <Link href="/auth/register">Ke Halaman register</Link>
                </p>
            </div>
        </div>
    );
};

export default Tampilanlogin;