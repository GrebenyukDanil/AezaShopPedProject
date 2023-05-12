export interface IAccount{
    email: string,
    password: string
}

export const accountsList:IAccount = {
    email: "test@gmail.com",
    password: "testtest"
}

export function checkForLogin(accountData:any){

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