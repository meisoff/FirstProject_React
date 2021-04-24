import React from "react";
import {Formik, Form, useField} from "formik";
import * as Yup from "yup";
import {NavLink} from "react-router-dom";

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="form__group form__group--md">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="form__control" {...field} {...props} />
            <span className="form__line"/>
            {meta.touched && meta.error ? (
                <div className="form__error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: "checkbox"});
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
    return (
        <>
            <h1 className="page__title page__title--center">Регистрация</h1>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    acceptedTerms: false, // added for our checkbox
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, "Максимальная длина - 15")
                        .required("*Необходимое поле"),
                    email: Yup.string()
                        .email("Неверный email адрес")
                        .required("*Необходимое поле"),
                    password: Yup.string()
                        .min(8, "Наименьшая длина - 8")
                        .matches(/[a-zA-Z]/, "Используйте латиницу")
                        .required("*Необходимое поле"),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref("password"), null], "Не совпадает")
                        .required("*Необходимое поле"),
                    acceptedTerms: Yup.boolean()
                        .oneOf([true], "Подтвердите согласие")
                        .required("*Необходимое поле"),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(false);
                }}
            >
                <Form className="form form--auth">

                    <MyTextInput
                        label="Имя"
                        name="name"
                        type="text"
                        placeholder="Александр"
                    />

                    <MyTextInput
                        label="Ваш e-mail"
                        name="email"
                        type="email"
                        placeholder="example@meisoff.com"
                    />

                    <MyTextInput
                        label="Пароль"
                        name="password"
                        type="password"
                        placeholder="Ваш пароль"
                    />

                    <MyTextInput
                        label="Повторите пароль"
                        name="confirmPassword"
                        type="password"
                        placeholder="Ваш пароль"
                    />

                    <MyCheckbox name="acceptedTerms">
                        Я согласен c
                        <p>
                            <NavLink className="form__acceptedTerms" to="/politic">политикой
                                конфиденциальности</NavLink>
                        </p>
                    </MyCheckbox>

                    <div className="form__footer form__footer--center">
                        <div className="form__group form__group--md">
                            <button className="btn btn--blue btn--rounded btn--small">Регистрация</button>
                        </div>
                        <ul className="form__footer-list">
                            <li>
                                <NavLink to="/signin">Войти</NavLink>
                            </li>
                            <li>
                                <NavLink to="/reset">Восстановить</NavLink>
                            </li>
                        </ul>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

export default SignIn;