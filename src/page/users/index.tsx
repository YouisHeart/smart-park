import { Card,Row,Col,Input,Button,Table,Pagination,Tag,Popconfirm,message } from "antd"
import type { TableProps, PaginationProps } from "antd"
import React, { useEffect, useState, useMemo, useCallback } from "react";
import type { DataType } from "./interface";
import { getUserList,deleteUser,batchDeleteUser } from "../../api/userList";
import UserForm from "./userForm";

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
  }
];

interface searchType{
  companyName:string;
  contact: string;
  phone: string
}

function Users() {
  const [dataList, setDataList] = useState<DataType[]>([])
  const [page,setPage] = useState<number>(1);
  const [pageSize,setPageSize]=useState<number>(10);
  const [total,setTotal]=useState<number>(0);
  const [loading,setLoading]=useState<boolean>(false);
  const [selectedRowKeys,setSelectedRowKeys]=useState<React.Key[]>([])
  const [isModalOpen,setIsModalOpen]=useState<boolean>(false)
  const [title,setTitle]=useState<string>("")
  const [formData,setFormData]=useState<searchType>({
    companyName:"",
    contact:"",
    phone:""
  })

  const disabled = useMemo(()=>{
      return selectedRowKeys.length?false:true
  },[selectedRowKeys])

  useEffect(()=>{
    loadData()
  },[page,pageSize])

  const loadData = async ()=>{
    setLoading(true)
    const {data:{list,total}} = await getUserList({...formData,page,pageSize})
    setLoading(false)
    setDataList(list)
    setTotal(total)
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setFormData(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const onSelectChange=(selectedRowKeys:React.Key[], selectedRows:any)=>{
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange:onSelectChange
  }

  const onChange:PaginationProps['onChange']=(page,pageSize)=>{
    setPage(page)
    setPageSize(pageSize)
    loadData()
  }

  const reset=()=>{
    setSelectedRowKeys([]);
    setFormData({companyName:"",contact:"",phone:""})
    setPage(1)
    setPageSize(10)
    loadData()
  }

  const confirm = async function(id:string) {
    const {data} = await deleteUser(id)
    message.success(data)
    loadData()
  }

  const handleBatchDelete = async ()=>{
    const { data } = await batchDeleteUser(selectedRowKeys)
    message.success(data)
    loadData()
  }

  const edit=(record:DataType)=>{
    setIsModalOpen(true)
    setTitle("编辑企业")
  }

  const add=()=>{
    setIsModalOpen(true)
    setTitle("新增企业")
  }

  // const hideModal=()=>{
  //   setIsModalOpen(false)
  // }

  const hideModal=useCallback(()=>{
    setIsModalOpen(false)
  },[])

  const columns:TableProps<DataType>['columns'] = [
  {
    title:"No.",
    key:"index",
    render(value,record,index) {
      return index+1
    }
  },
  {
    title: '客户名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '经营状态',
    dataIndex: 'status',
    key: 'status',
    render(value) {
      if(value==1) {
        return <Tag color="green">营业中</Tag>
      } else if(value==2) {
        return <Tag color="#f50">暂停营业</Tag>
      } else if(value==3) {
        return <Tag color="red">已关闭</Tag>
      }
    }
  },
  {
    title: '联系电话',
    dataIndex: 'tel',
    key: 'tel',
  },
  {
    title: '所属行业',
    dataIndex: 'business',
    key: 'business',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '统一信用代码',
    dataIndex: 'creditCode',
    key: 'creditCode'
  },
  {
    title: '工商注册号',
    dataIndex: 'industryNum',
    key: 'industryNum'
  },
  {
    title: '组织结构代码',
    dataIndex: 'organizationCode',
    key: 'organizationCode'
  },
  {
    title: '法人名',
    dataIndex: 'legalPerson',
    key: 'legalPerson'
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render(value, record, index) {
      return <>
        <Button type="primary" size="small" onClick={()=>edit(record)}>编辑</Button>
        <Popconfirm
        title="删除确认"
        description="确定要删除吗？"
        okText="是"
        cancelText="否"
        onConfirm={()=>confirm(record.id)}
        >
          <Button type="primary" danger className="ml" size="small">删除</Button>
        </Popconfirm>
      </>
    }
  },
  ];

    return <div className="users">
      <MyUserForm visible={isModalOpen} hideModal={hideModal} title={title}/>
        <Card className="search">
            <Row gutter={16}>
                <Col span={7}>
                    <p>企业名称：</p>
                    <Input name="companyName" value={formData.companyName} onChange={handleChange}></Input>
                </Col>
                <Col span={7}>
                    <p>联系人：</p>
                    <Input name="contact" value={formData.contact}  onChange={handleChange}></Input>
                </Col>
                <Col span={7}>
                    <p>联系电话：</p>
                    <Input name="phone" value={formData.phone}  onChange={handleChange}></Input>
                </Col>
                <Col span={3}>
                    <Button type="primary" onClick={loadData}>查询</Button>
                    <Button className="ml" onClick={reset}>重置</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Button type="primary" onClick={add}>新增企业</Button>
            <Button danger type="primary" className="ml" disabled={disabled} onClick={handleBatchDelete}>批量删除</Button>
        </Card>
      <Card className="mt">
        <Table
          dataSource={dataList}
          columns={columns}
          rowKey={(record) => record.id}
          loading={loading}
          rowSelection={rowSelection}
          pagination={false}
        ></Table>
        <Pagination
        className="fr mt"
        total={total}
        current={page}
        pageSize={pageSize}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `共${total} 条`}
        onChange={onChange}
      />

      </Card>
    </div>
}
const MyUserForm = React.memo(UserForm);
export default Users;