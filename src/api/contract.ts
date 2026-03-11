import { post } from "../utils/http/request"

interface SearchData {
    contractNo: string,
    person: string,
    tel: string,
    page: number,
    pageSize: number
}

export function getContractList(data: SearchData) {
    return post("/contractList",data)
}

