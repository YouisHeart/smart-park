import Mock from 'mockjs'

Mock.mock("https://www.demo.com/login", "post", (options: any) => {
    const { username, password } = JSON.parse(options.body)
    if (username === "admin" && password === "admin123") {
        return {
            code: 200,
            message: "登录成功",
            data: {
                username: "高晨建",
                token: "5e3ac76e-3c51-4e10-a586-90a3f02e6289"
            }
        }
    } else if (username === "manager" && password === "admin123") {
        return {
            code: 200,
            message: "登录成功",
            data: {
                username: "高晨建",
                token: "5e3ac76e-3c51-4e10-a586-90a3f02e6289"
            }
        }
    } else {
        return {
            code: 400,
            message: "用户名或密码错误",
            data: null
        }
    }
})