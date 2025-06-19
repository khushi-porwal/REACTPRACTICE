import {RouterProvider} from "react-router-dom"
import router from './routes/CompleteRoute'
const App = () => {
  return(
    <RouterProvider router={router}/>
  )
}

export default App;