import { makeAutoObservable } from 'mobx'
import { http,getToken, setToken, removeToken } from '@/utils'

class LoginStore {
    token = getToken() || ''
    constructor() {
        makeAutoObservable(this)
    }
    //登陆
    login = async ({ mobile, code }) => {
        const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
            mobile,
            code
        })
        //存入token
        // console.log(res.data);
        this.token = res.data.token
        setToken(this.token)
    }
    //退出登陆
    loginOut = () => {
        this.token = ''
        removeToken()
    }
}

export default LoginStore