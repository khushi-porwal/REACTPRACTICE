import { createBrowserRouter } from "react-router-dom";
import DashRoutes from "./DashRoutes";
import IndexRoutes from "./IndexRoutes";


const router = createBrowserRouter([DashRoutes,IndexRoutes])

export default router;