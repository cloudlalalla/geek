//导入路由
import { Route, Routes } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRouter'
//导入页面组件
// import Login from './pages/Login'
// import Layout from './pages/Layout'
// import Layout from '@/pages/Layout'
// import Home from '@/pages/Home'
// import Artice from '@/pages/Article'
// import Publish from '@/pages/Publish'
import './App.css'
import { HistoryRouter, history } from './utils/history'
// 导入必要组件
import { lazy, Suspense } from 'react'
// 按需导入路由组件
const Login = lazy (() => import('./pages/Login'))
const Layout = lazy (() => import('./pages/Layout'))
const Home = lazy (() => import('./pages/Home'))
const Artice = lazy (() => import('./pages/Article'))
const Publish = lazy (() => import('./pages/Publish'))

function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Suspense
          fallback={
            <div
              style={{
                textAlign: 'center',
                marginTop: 200
              }}
            >
              loading...
            </div>
          }
        >
          <Routes>
            {/* 需要鉴权的路由 */}
            <Route path="/*" element={
              <AuthRoute>
                <Layout />
              </AuthRoute>
            } >
              {/* 二级路由默认页面 */}
              <Route index element={<Home />} />
              <Route path="article" element={<Artice />} />
              <Route path="publish" element={<Publish />} />
            </Route>
            {/* 不需要鉴权的路由 */}
            <Route path='/login' element={<Login />} ></Route>
          </Routes>
        </Suspense>
      </div>
    </HistoryRouter>
  )
}

export default App;
