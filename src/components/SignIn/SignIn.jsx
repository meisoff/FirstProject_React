import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {NavLink} from "react-router-dom";

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form__group form__group--md">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="form__control" {...field} {...props} />
            <span className="form__line" />
            {meta.touched && meta.error ? (
                <div className="form__error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <div className="form__accept">
            <label className="form__accept-button">
                <input type="checkbox" {...field} {...props} />
                <span>{children}</span>
            </label>
            {meta.touched && meta.error ? (
                <div className="form__error">{meta.error}</div>
            ) : null}
        </div>
    );
};



const SignIn = (props) => {
    let errorAPI = {
        message: "Неправильный пароль или Email",
    };

    return (
        <>
            <h1 className="page__title page__title--center">Вход</h1>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false, // added for our checkbox
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Неверный email адрес")
                        .required("*Необходимое поле"),
                    password: Yup.string()
                        .min(8, "Наименьшая длина - 8")
                        .matches(/[a-zA-Z]/, "Используйте латиницу")
                        .required("*Необходимое поле"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    props.loginUser(values.email, values.password, values.rememberMe)
                        .then (response => {
                            if (response.resultCode === 1) {
                                errorAPI.state = true
                            } else if (response.resultCode === 0) {
                                errorAPI.state = false;
                            }
                        })
                    setSubmitting(false);
                }}
            >
                <Form className="form form--auth">
                    <MyTextInput
                        label="Ваш e-mail"
                        name="email"
                        type="email"
                        placeholder="Ваш email адрес"
                    />

                    <MyTextInput
                        label="Пароль"
                        name="password"
                        type="password"
                        placeholder="Ваш пароль"
                    />

                    <MyCheckbox name="rememberMe">
                        Запомнить меня?
                    </MyCheckbox>

                    {props.isErrorSignIn ? <div className="form__footer-error">{errorAPI.message}</div> : null}

                    <div className="form__footer form__footer--center">
                        <div className="form__group form__group--md">
                            <button disabled={props.isDisabled} type="submit" className="btn btn--blue btn--rounded btn--small">Вход</button>
                        </div>
                        <ul className="form__footer-list">
                            <li>
                                <NavLink to="/reset">Восстановить</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup">Регистрация</NavLink>
                            </li>
                        </ul>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

export default SignIn;