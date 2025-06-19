import {Link, Outlet} from 'react-router-dom'

const HomeLayout = () => {
    return(
        <div>
            <header className="bg-zinc-800 p-5 text-center text-white">
                <ul className="flex item-center justify-end gap-x-5">
                    <Link to="/">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link className="bg-white p-2 rounded-md text-black font-medium" to="/dashboard">Dashboard</Link>
                </ul>
            </header>
            <Outlet/>
            <footer className="bg-zinc-800 text-white text-center">Footer</footer>
        </div>
    )
}
export default HomeLayout;