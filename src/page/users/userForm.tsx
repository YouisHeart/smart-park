import { Modal } from "antd"

interface FormProps{
    visible: boolean
}

function UserForm(props:FormProps) {
    const { visible } = props
    return <>
        <Modal
            title="新增客户"
            open={visible}
        >
            <div>我是弹窗的内容</div>
        </Modal>
    </>
}

export default UserForm