import Link from "next/link";
import Login from "./login";


export default async function Nav(){
    return(
        <nav className=" flex justify-between items-center py-8">
            <Link href={"/"}>
            <h1 className="font-bolt text-lg">Send It</h1>
            </Link>
            <ul>
                <Login />
            </ul>
        </nav>
    )
}