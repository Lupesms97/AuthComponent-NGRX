import { Role } from "./Role";

export interface UserInterface {
    token: string;
    role:Role;
    userName:string;
}