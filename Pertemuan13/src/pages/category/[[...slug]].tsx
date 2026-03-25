import { useRouter } from 'next/router';

const Category = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>Category Slug</h1>
            <ul>
                {Array.isArray(slug) ? slug.map((s, index) => <li key={index}>{s}</li>) : <li>{slug}</li>}
            </ul>
        </div>
    );
};

export default Category;