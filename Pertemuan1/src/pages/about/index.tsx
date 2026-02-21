import Head from 'next/head';

export default function About() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Head>
        <title>About Me</title>
      </Head>
      <h1>Halaman About</h1>
      <hr />
      <p><strong>Nama Mahasiswa:</strong> Soultan Mohammad Agnar Bisyarah</p> 
      <p><strong>NIM:</strong> 2341720191</p> 
      <p><strong>Program Studi:</strong> D4 Teknik Informatika</p> 
    </div>
  );
}