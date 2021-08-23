export interface registerData{
  userName: string,
  userEmail: string,
  userPassword: string
}
export interface registerResponse{
  userId: string | number,
  userEmail: string
}