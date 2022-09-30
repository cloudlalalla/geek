// 把所有的模块做统一处理
// 导出一个统一的方法 useStore
import React from "react"
import LoginStore from "./login"
import UserStore from "./user"

import { configure } from "mobx"
configure({
  enforceActions: "never",
})


class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
   
    // ...
  }
}

// 实例化根
// 导出useStore context
const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }