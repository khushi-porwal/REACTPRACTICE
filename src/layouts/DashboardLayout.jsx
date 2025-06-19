import {Link, Outlet} from 'react-router-dom';

const DashboardLayout=()=> {
    return(
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-2 bg-zinc-800 text-white text-xl text-center'>
                <div className='bg-zinc-400 py-5 font-bold text-xl'>Sidebar</div>
                <div className="p-3 bg-zinc-300 rounded-md m-2 hover:bg-zinc-800 duration-100"><Link to="/dashboard">Dashboard</Link></div>
                <div className="p-3 bg-zinc-300 rounded-md m-2 hover:bg-zinc-800 duration-100"><Link to="/dashboard/stats">Statistics</Link></div>
            </div>
            <div className="col-span-10">
                <Outlet/>
            </div>
        </div>
    )
}
export default DashboardLayout