import { type NextPage } from "next"
import Link from "next/link"

const Navbar: NextPage = () => {
    return (
        <div className="navbar bg-base-100 border-b border-gray-400">
            <Link className="btn btn-ghost normal-case text-xl" href="/">The Times</Link>
            <div className="ml-auto mr-2">
                <Link href="/local" className="btn btn-ghost normal-case">
                    Local News
                </Link>
                <Link href="/national" className="btn btn-ghost normal-case">
                    National News
                </Link>
                <Link href="/international" className="btn btn-ghost normal-case">
                    International News
                </Link>
                <Link href="/editorial" className="btn btn-ghost normal-case">
                    Editorials
                </Link>
            </div>
        </div>
    )
}

export default Navbar