export type TUserRole = "user" | "admin";
export type TStatus = "active" | "block";

export type TUser = {
  name: string;
  username: string;
  role: TUserRole;
  email: string;
  password: string;
  number: string;
  image: string;
  orders: string[];
  status: TStatus;
  isDleted: boolean;
  address: string;
};

export type TLoginInfo = {
  username?: string;
  email?: string;
  password: string;
};
