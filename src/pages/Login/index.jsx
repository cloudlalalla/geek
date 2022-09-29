import { Card, Form, Input, Checkbox, Button, message } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import {useStore} from '@/store'
import {useNavigate} from 'react-router-dom'


function Login () {
    const navigate = useNavigate()
    const { loginStore} = useStore()
    const onFinish = async values => {
        loginStore.login({
            mobile:values.mobile,
            code:values.code
        })
        // //跳转首页
        // navigate('/' , {replace: true})
        // //提示用户
        // message.success('登陆成功')
        const { mobile, code} = values
        try {
            await loginStore.login({ mobile, code})
            navigate('/')
        } catch (e) {
            message.error(e.response?.data?.message || '登陆失败')
        }
    }
    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单 */}
                <Form
                    onFinish={onFinish}
                    validateTrigger={['onBlur', 'onChange']}
                    initialValues={{ 
                        mobile: '13222222222',
                        code: '246810',
                        remember: true 
                    }}

                >
                    <Form.Item
                        name="mobile"
                        rules={[
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '手机号码格式不对',
                                validateTrigger: 'onBlur'
                            },
                            { required: true, message: '请输入手机号' }
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号"></Input>
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            { len: 6, massage: '验证码6个字符', validateTrigger: 'onBlur' },
                            { required: true, message: '请输入验证码' }
                        ]}
                    >
                        <Input size="large" placeholder="请输入验证码" maxLength={6}></Input>
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox className="login-checkbox-label">
                            我已阅读并同意「用户协议」和「隐私条款」
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login