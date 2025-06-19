import ProtectedRoute from './ProtectedRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import DashHome from '../components/pages/DashHome'
import DashStat from '../components/pages/DashStat'

const DashRoutes = {
    path:'/dashboard',
    element:<ProtectedRoute role={"admin"} layout={<DashboardLayout/>}/>,
    children: [
        {
            path: '/dashboard',
            element: <DashHome/>
        },
        {
            path: '/dashboard/stats',
            element: <DashStat/>
        }
    ]
}

export default DashRoutes