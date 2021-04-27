import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="/logo.png" width={100} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/techies"><a>Techie Listing</a></Link>
        </nav>
    );
}
 
export default Navbar;