import {useRouter} from 'next/router';

const HalamanBlog = () => {
    // const router = useRouter();
    // console.log(router);
    const {query} = useRouter();
    return(
        <div>
            <h1>Halaman Blog</h1>
            <p>Blog : {query.slug}</p>
        </div>
    );
};

export default HalamanBlog;