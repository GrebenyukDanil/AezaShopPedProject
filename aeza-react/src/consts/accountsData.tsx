import { ILoginFormData } from "../effector/login";

export interface IAccount{
    email: string,
    password: string
}
export interface ICheckAcc{
    email: string;
    password: string;
    auth: boolean;
}
export const accountsList:IAccount = {
    email: "test@gmail.com",
    password: "testtest"
}

export function checkForLogin(accountData:ILoginFormData[]){

    const foundObject = (accountsList.email === accountData[0].email && accountsList.password === accountData[0].password);

    if (foundObject) {
        return({
            email: "test@gmail.com",
            password: "testtest",
            auth: true
        })
    } else {
        return({
            email: "",
            password: "",
            auth: false
        })
    }
}