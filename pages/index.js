import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Techie List | Home</title>
        <meta name="keywords" content="techie"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error, facere ex illo, cumque rem consectetur nobis corrupti modi perferendis excepturi iure. Provident iure architecto cumque, quos repellendus debitis dolor.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error, facere ex illo, cumque rem consectetur nobis corrupti modi perferendis excepturi iure. Provident iure architecto cumque, quos repellendus debitis dolor.</p>
        <Link href="/techies"><a className={styles.btn}>See Techie Listing</a></Link>
      </div>
    </>
  )
}
