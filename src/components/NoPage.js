import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <main>
            <Link className="h-screen flex flex-col justify-center items-center cursor-pointer" to="/">
                <p className="cursor-pointer">Her er nul og niks...</p>
            </Link>
        </main>
    )
}

export default NoPage;