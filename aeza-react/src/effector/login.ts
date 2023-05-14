import { createEvent, createStore, sample } from "effector";

import { validateForm } from "../functionalLogic/validateForm";
import { checkForLogin } from "../consts/accountsData";

export interface IFormDataErrors {
    email?: string;
    password?: string;
}
export interface ILoginFormData {
    email: string;
    password: string;
    errors?: IFormDataErrors
}
export const logout = createEvent<React.MouseEvent<HTMLButtonElement, MouseEvent>>()
export const login = createEvent<React.MouseEvent<HTMLButtonElement, MouseEvent>>()
export const changeAuth = createEvent<any>()
export const formChanged = createEvent<HTMLInputElement>()

export const $LoginFormData = createStore<ILoginFormData>({
    email: "",
    password: "",
    errors: {
        email: "",
        password: "",
    }
}).on(formChanged, (state, value) => {
    return ({
        ...state,
        [value.name]: value.value
    })
})
//Стор для авторизации
export const $AuthInfo = createStore({
    email: "",
    password: "",
    auth: false
}).on(changeAuth, (state, value) => value).reset(logout)

sample({
    clock: login,
    source: [$LoginFormData],
    fn: (value) => (checkForLogin(value)),
    target: changeAuth
})
sample({
    clock: formChanged,
    source: $LoginFormData,
    fn: (value) => (validateForm(value)),

})