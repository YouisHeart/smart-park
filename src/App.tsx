import { RouterProvider } from "react-router-dom"
import { routes } from "./router"
import { useState, useEffect, Suspense } from "react"
import { generateRoutes } from "./utils/generatesRoutes"
import { createBrowserRouter } from "react-router-dom" // 创建路由对象
import { getMenu } from "./api/user"
import { useDispatch } from "react-redux"
import { setMenu } from "./store/login/authSlice"
import { useSelector } from "react-redux" // 使用token作为依赖项

function App() {
  const { token } = useSelector((state:any)=>state.authSlice)
  const [routerss,setRouter] = useState<any>(null)
  const dispatch = useDispatch()
  useEffect(()=>{

    async function loadData() {
      const { data } = await getMenu()
      if(data.length) {
        dispatch(setMenu(data))
        const routers = generateRoutes(data) // 动态创建的路由表
        const myRoutes = [...routes];
        myRoutes[0].children=routers;
        myRoutes[0].children[0].index=true;
        const router = createBrowserRouter(myRoutes)
        setRouter(router)
      }else {
        const router = createBrowserRouter(routes)
        setRouter(router)
      }
    }
    loadData()
  },[token])

  if(routerss) {
    return (
    <div className="App">
      <Suspense fallback={<p>加载中...</p>}>
        <RouterProvider router={routerss}></RouterProvider>
      </Suspense>
    </div>
  );
  }else {
    return <div>你再等等吧</div>
  }
}

export default App


