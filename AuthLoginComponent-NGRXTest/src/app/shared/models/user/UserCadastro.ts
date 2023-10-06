import { Role } from "./Role";

export interface UserCadastro {
    email:string;
    login:string;
    password:string;
    name:string;
    unidade:string;
    role:Role;
}
