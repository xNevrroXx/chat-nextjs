import Yup from "yup";

export const email =
    Yup.string()
        .email()
        .required();
export const password =
    Yup.string()
        .min(6)
        .max(16)
        .matches(/^.*(?=[a-z]).*$/, "At least one lowercase letter")
        .matches(/^.*(?=[A-Z]).*$/, "At least one uppercase letter")
        .matches(/^.*(?=\d).*$/, "At least one digit")
        .matches(/^.*(?=[!#$%&? "]).*$/, "At least one of the following characters: !#$% &? \"")