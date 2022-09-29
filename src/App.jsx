//导入路由
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRouter'
//导入页面组件
import Login from './pages/Login'
// import Layout from './pages/Layout'
import Layout from '@/pages/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* 需要鉴权的路由 */}
          <Route path="/*" element={
            <AuthRoute>
              <Layout />
            </AuthRoute>
          } />
          {/* 不需要鉴权的路由 */}
          <Route path='/login' element={<Login />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App;
