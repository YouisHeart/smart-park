import bg from "../../assets/bg.jpg"
import logo from "../../assets/logo.png"
import lgbg from "../../assets/lgbg.jpg"
import "./index.scss"
import { Button, Form, Input } from 'antd';
import { UserOutlined,LockOutlined } from "@ant-design/icons"
function Login() {
    return <div className="login" style={{ backgroundImage: `url(${bg})` }}>
        <div className="lgbg" style={{ backgroundImage: `url(${lgbg})` }} > 
            <div className="part">
                <div className="title">
                    <div className="logo">      
                        <img src={logo} width={100} />
                    </div>
                    <h1>安卓智慧小区管理平台</h1>
                </div>
                <Form>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '用户名不能为空' }]}
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
                        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
          </div>
        </div>
    </div>
}

export default Login