import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './mock'
import App from './App.tsx'
import { store } from './store'
import {  Provider } from 'react-redux'
import { ConfigProvider } from "antd"
import zhCN from 'antd/locale/zh_CN';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ConfigProvider locale={zhCN}>
                <App />
            </ConfigProvider>
        </Provider>
    </StrictMode>
)
