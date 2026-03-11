import { Card,Button } from "antd"
import { useNavigate } from "react-router-dom";

function Surrender() {
    const navigate=useNavigate();
    return <div>
        <Card>
            <Button type="primary" onClick={()=>navigate("/finance/contract?return=true")}>返回</Button>
        </Card>
    </div>
}

export default Surrender;