import { IFormDataErrors, ILoginFormData } from "../effector";

export function validateForm(formData:ILoginFormData) {

    const errors:IFormDataErrors= {};
  
    // валидация email
    if (!formData.email.trim()) {
      errors.email = 'Поле "Email" обязательно для заполнения';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Некорректный email';
    }
  
    // валидация пароля
    if (!formData.password.trim()) {
      errors.password = 'Поле "Пароль" обязательно для заполнения';
    } else if (formData.password.length < 8) {
      errors.password = 'Пароль должен быть не менее 8 символов';
    }
    formData.errors = errors

    // возвращаем результат валидации
    return formData
  
 
}