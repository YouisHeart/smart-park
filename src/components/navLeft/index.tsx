import { Menu } from 'antd';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { getMenu } from '../../api/user';
import { useState, useEffect } from 'react';
import icons from './iconList'
import logo from '../../assets/logo.png'
import "./index.scss"
import { setMenu } from "../../store/login/authSlice"
import { useDispatch } from "react-redux"
 
interface MenuItem {
    key: string;
    label: string;
    icon?: React.ReactNode;
    children?: MenuItem[];
}

interface MenuItemFromData {
    key: string;
    label: string;
    icon: string;
    children?: MenuItemFromData[];
}

function NavLeft() {
    const dispatch = useDispatch();
    const [menuData, setMenuData] = useState<MenuProps['items']>([]) 

    useEffect(() => {
        configMenu()
    }, [])

    async function configMenu() {
        const { data } = await getMenu()
        dispatch(setMenu(data))
        const mappedMenuItems = mapMenuItems(data)
        setMenuData(mappedMenuItems)
    }
    //  将返回的菜单数据转化成我们需要的格式
    function mapMenuItems(items:MenuItemFromData[]):any{
        return items.map((item:MenuItemFromData) => ({
            key: item?.key,
            label: item.label,
            icon: icons[item.icon],
            children: item.children ? mapMenuItems(item.children):null

        }))
    }
    return <div className="navleft">
        <div className="logo">
            <img src={logo} alt="" width={18} />
            <h1>安卓智慧园区</h1>
        </div>
        <Menu
            defaultSelectedKeys={['/dashboard']}
            mode="inline"
            theme="dark"
            items={menuData}
        />
    </div>
}

export default NavLeft