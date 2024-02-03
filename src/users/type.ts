export interface loginFormData {
  username: string,
  password: string
}

interface dataType {
  token: string
}

export interface loginResponseData {
  code: number,
  data: dataType
}

interface userInfo {
  userId: number,
  avatar: string,
  username: string,
  password: string,
  desc: string,
  roles: string[],
  buttons: string[],
  routes: string[],
  token: string
}


//服务器返回用户信息相关的数据类型
interface user{
  checkUser:userInfo
}

export interface userInfoReponseData{
  code: number,
  data: user
}
