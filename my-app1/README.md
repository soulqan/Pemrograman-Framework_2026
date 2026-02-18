# Pertemuan 2

**Praktikum 1 : Routing Dasar (Static Routing)**

1. Ubah Struktur

<img src="img/P2_1.png" alt="Demo Photo Filter" width="200">

2. Hasil Uji

<img src="img/P1_2.png" alt="Demo Photo Filter" width="200"><br><br>

**Praktikum 2 : Routing Menggunakan Folder**

1. Rapikan Struktur Page

<img src="img/P2_2.png" alt="Demo Photo Filter" width="200">

2. Uji coba (hasil tetap sama tapi lebih rapi)

<img src="img/P2_1.png" alt="Demo Photo Filter" width="200"><br><br>

**Praktikum 3 : Nested Routing**

1. Buat Folder Setting

<img src="img/P2_3.png" alt="Demo Photo Filter" width="200">

2. Modifikasi Kode nya

- user.tsx

```tsx
const UserSettingPage = () => {
    return(
    <div>
        User Setting Page
    </div>
    );
};

export default UserSettingPage;
```

<img src="img/P2_4.png" alt="Demo Photo Filter" width="400"><br><br>

- app.tsx

```tsx
const AppSetting = () => {
    return(
    <div>
        App Setting Page
    </div>
    );
};

export default AppSetting;
```

<img src="img/P2_5.png" alt="Demo Photo Filter" width="400"><br><br>

3. Modifikasi Struktur

<img src="img/P2_6.png" alt="Demo Photo Filter" width="400">

<img src="img/P2_7.png" alt="Demo Photo Filter" width="400">

4. Menambahkan Folder Password di dalam User

<img src="img/P2_8.png" alt="Demo Photo Filter" width="400"><br><br>

**Praktikum 4 : Dynamic Routing**

1. Buat Halaman Produk

 └── produk/
    ├── index.tsx
    └── [id].tsx

2. Modifikasi index.tsx

```tsx
const produk = () => {
    return(
        <div>
            Produk User Page
        </div>
    );
};

export default produk;
```

3. Modifikasi [id].tsx

```tsx
import {useRouter} from 'next/router';

const HalamanProduk = () => {
    // const router = useRouter();
    // console.log(router);
    const {query} = useRouter();
    return(
        <div>
            <h1>Halaman Produk</h1>
            <p>Produk : {query.id}</p>
        </div>
    );
};

export default HalamanProduk;
```

4. Uji coba /produk/sepatu-baru

<img src="img/P2_9.png" alt="Demo Photo Filter" width="400"><br><br>

**Praktikum 5 : Membuat Komponen Navbar**

1. Struktur Komponen
src/
└── components/
 └── layouts/
    └── Navbar/
        └── index.tsx

2. Modifikasi index.tsx

```tsx
const Navbar = () => {
    return(
        <div className="navbar">
            <div>Navbar Component</div>
        </div>
    );
};

export default Navbar;

```
3. Modifikasi global.css

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

.navbar{
  width: 100%;
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
```

4. Modifikasi index.tsx pada folder pages

```tsx
import Navbar from '@/components/layouts/navbar'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
  
    <div>
      <Navbar />
      <h1>Praktikum Next.js Pages Router</h1> 
      <p>Mahasiswa D4 Pengembangan Web</p>
    </div>
  );
}
```

5. Modifikasi _app.tsx

```tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```
6. Tampilan Browser

<img src="img/P2_10.png" alt="Demo Photo Filter" width="600">

7. Modifikasi agar tampil global

```tsx
import '@/styles/globals.css'
import Navbar from '@/components/layouts/navbar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
```

**Praktikum 6 : Membuat Layout Global (App Shell)**

1. Struktur AppShell

 └── AppShell
    ├── Navbar (tetap)
    └── Children (dinamis)
