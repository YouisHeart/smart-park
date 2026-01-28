import { RouterProvider } from "react-router-dom"
import router from "./router"
import { use, useEffect } from "react"
import { generateRoutes } from "./utils/generatesRoutes"
import { useSelector } from "react-redux"
function App() {
  const { menuList } = useSelector((state:any)=>state.authSlice)
  useEffect(()=>{
    const routers = generateRoutes(menuList)
    console.log(menuList)
    console.log(routers)
    // 因为获取菜单是异步的，所以当redux里面的数据发生变化时，重新获取
  },[menuList])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
