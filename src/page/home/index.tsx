import { Breadcrumb, Layout, theme } from 'antd';
import NavLeft from '../../components/navLeft';
import { useState } from 'react';
import MyBreadCrumb from '../../components/breadCrumb';
import MyHeader from '../../components/header';
const { Header, Content, Footer, Sider } = Layout;

function Home() {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return <div>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <NavLeft></NavLeft>
            </Sider>
            <Layout>
                <Header style={{ paddingRight: "20px", background: colorBgContainer, textAlign:'right' }}>
                    <MyHeader></MyHeader>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <MyBreadCrumb></MyBreadCrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    </div>
}

export default Home