import styles from "../../styles/Techies.module.css"
import Link from "next/link"

// Fetching data in Next.js Apps
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { techies: data }
    }
}

const Techies = ({ techies }) => {
    return (
        <div>
            <h1>All Techies</h1>
            {techies.map(techie => (
                <Link href={'/techies/' + techie.id } key={techie.id}>
                    <a className={styles.single}>
                        <h3>{techie.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default Techies;