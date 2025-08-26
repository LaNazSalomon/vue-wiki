export interface LoginUser {
  username: string;
  password: string;
}

export interface ResponseLogin {
  username: string;
  id_rol: string;
  rol: string;
  token: string;
}
