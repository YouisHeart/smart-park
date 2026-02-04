import { post } from "../utils/http/request";

interface searchType {
    page: number,
    pageSize: number,
    companyName?: string,
    contact?: string,
    tel?: string
}

export function getUserList(data: searchType) {
    return post("/userList", data)
}