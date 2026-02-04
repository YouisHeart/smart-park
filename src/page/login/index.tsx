import bg from "../../assets/bg.jpg"
import logo from "../../assets/logo.png"
import lgbg from "../../assets/lgbg.jpg"
import "./index.scss"
import http from "../../utils/http/http"
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { useEffect } from "react"
import { login } from "../../api/user"
import { setToken } from "../../store/login/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
function Login() {
    const [form] = Form.useForm(); 
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleLogin() {
      
        form.validateFields().then(async (res) => {
            setLoading(true);
            const { data: { token,username } } = await login(res);
            setLoading(false);
            dispatch(setToken(token))
            sessionStorage.setItem("username",username)
            // 跳转首页的时候不能留历史记录
            navigate("/",{ replace: true })
        }).catch((err) => {
            setLoading(false);
        })
    }


    return <div className="login" style={{ backgroundImage: `url(${bg})` }}>
        <div className="lgbg" style={{ backgroundImage: `url(${lgbg})` }} > 
            <div className="part">
                <div className="title">
                    <div className="logo">      
                        <img src={logo} width={100} />
                    </div>
                    <h1>安卓智慧小区管理平台</h1>
                </div>
                <Form
                    form={form}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, message: '用户名不能为空' },
                            { min: 2, message: '用户名长度不能小于2位' }
                        ]}
                    >
                        <Input placeholder="请输入您的用户名" prefix={<UserOutlined />}/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '密码不能为空' }]}
                    >
                        <Input.Password placeholder="请输入您的密码" prefix={<LockOutlined />}/>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: "100%" }}
                            onClick={handleLogin}
                            loading={loading}
                        >
                            登录
                        </Button>
                    </Form.Item>
                </Form>
          </div>
        </div>
    </div>
}

export default Login