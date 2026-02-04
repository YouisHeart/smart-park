import { Card,Row,Col,Input,Button,Table } from "antd"
import type { TableProps } from "antd"
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '客户名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '经营状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '联系电话',
    dataIndex: 'tel',
    key: 'tel',
  },
];

function Users() {
    return <div className="users">
        <Card className="search">
            <Row gutter={16}>
                <Col span={7}>
                    <p>企业名称：</p>
                    <Input></Input>
                </Col>
                <Col span={7}>
                    <p>联系人：</p>
                    <Input></Input>
                </Col>
                <Col span={7}>
                    <p>联系电话：</p>
                    <Input></Input>
                </Col>
                <Col span={3}>
                    <Button type="primary">查询</Button>
                    <Button className="ml">重置</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Button type="primary">新增企业</Button>
            <Button danger type="primary" className="ml">批量删除</Button>
        </Card>
    </div>
}

export default Users;