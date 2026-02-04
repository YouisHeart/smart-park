import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Breadcrumb } from "antd";
interface MenuItem {
    key:string;
    label: string;
    children?:MenuItem[] 
}
interface BreadCrumb{
    label:string
}

function findBreadCrumbPath(path: string, menuItems: MenuItem[]): string[] {
    const pathSegments: string[] = [];

    function findPath(currentPath: string, items: MenuItem[]) {
        console.log(items)
        for (let item of items) {
            if (currentPath.startsWith(item.key)) {
                pathSegments.push(item.label);
                if (item.children) {
                    findPath(currentPath, item.children);
                }
                break;
            }
        }
    }

    findPath(path, menuItems); // ⭐ 关键！！！

    return pathSegments;
}


function MyBreadCrumb() {
    const location = useLocation();
    const { menuList } = useSelector((state:any)=>state.authSlice)
    const breadList = findBreadCrumbPath(location.pathname,menuList).map(item=>({title:item}))
    console.log(breadList)
    return <Breadcrumb items={breadList} className="mt mb"></Breadcrumb>
}

export default MyBreadCrumb;