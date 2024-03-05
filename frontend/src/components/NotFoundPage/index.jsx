import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <main className="h-[93vh] w-full flex flex-col justify-center items-center bg-zinc-700">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">
                404
            </h1>
            <div className="bg-fuchsia-700 px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <span className="relative inline-block text-sm font-medium text-fuchsia-700 group active:text-fuchsia-700 focus:outline-none focus:ring">
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-fuchsia-700 group-hover:translate-y-0 group-hover:translate-x-0" />
                    <span className="relative block px-8 py-3 bg-zinc-700 border border-current">
                        <Link to="/">Go Home</Link>
                    </span>
                </span>
            </button>
        </main>
    )
}