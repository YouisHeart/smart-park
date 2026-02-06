import { Modal,Form, Row, Col,Input,Radio } from "antd"
import { useEffect } from "react"

interface FormProps{
    visible: boolean;
    hideModal: ()=>void;
    title:string;
}

function UserForm(props:FormProps) {
    const { visible,hideModal,title } = props
    return <>
        <Modal
            title={title}
            open={visible}
            onCancel={hideModal}
            width={800}
        >
            <Form
            labelCol={{span:8}}
            wrapperCol={{span:16}}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                        label="客户名称"
                        name="name"
                        rules={[{required:true,message:"客户名称不能为空"}]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        label="联系电话"
                        name="tel"
                        rules={[{required:true,message:"联系电话不能为空"},{pattern: /^1[3-9]\d{9}$/, message: "请输入有效的手机号"}]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                {/* ------------------------------------ */}
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                        label="经营状态"
                        name="status"
                        rules={[{required:true,message:"经营状态不能为空"}]}
                        >
                            <Radio.Group>
                                <Radio value="1">营业中</Radio>
                                <Radio value="2">暂停营业</Radio>
                                <Radio value="3">已关闭</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        label="所属行业"
                        name="business"
                        rules={[{required:true,message:"所属行业不能为空"}]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                {/* ------------------------------------ */}
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                        label="邮箱"
                        name="email"
                        rules={[{required:true,message:"邮箱不能为空"}]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        label="统一信用代码"
                        name="creditCode"
                        rules={[{required:true,message:"统一信用代码不能为空"}]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                {/* ------------------------------------ */}
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                        label="工商注册号"
                        name="industryName"
                        rules={[{required:true,message:"工商注册号不能为空"}]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        label="组织机构代码"
                        name="organizationCode"
                        rules={[{required:true,message:"组织机构代码不能为空"}]}
                        > 
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                
            </Form>
        </Modal>
    </>
}

export default UserForm