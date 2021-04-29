import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

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



const ProfileInfo = (props) => {

    return (
        <>
            <Formik
                initialValues={{
                    fullName: props.userInfo.fullName,
                    lookingForAJob: props.userInfo.lookingForAJob,
                    lookingForAJobDescription: props.userInfo.lookingForAJobDescription,
                    aboutMe: props.userInfo.aboutMe,
                    facebook: props.userInfo.contacts.facebook,
                    website: props.userInfo.contacts.website,
                    vk: props.userInfo.contacts.vk,
                    twitter: props.userInfo.contacts.twitter,
                    instagram: props.userInfo.contacts.instagram,
                    youtube: props.userInfo.contacts.youtube,
                    github: props.userInfo.contacts.github,
                    mainLink: props.userInfo.contacts.mainLink,
                }}
                validationSchema={Yup.object({
                    fullName: Yup.string()
                        .max(30, 'Не больше 30 символов')
                        .required('Необходимо'),
                    aboutMe: Yup.string()
                        .max(300, 'Не больше 300 символов')
                        .required('Необходимо'),

                })}
                onSubmit={(values, { setSubmitting }) => {
                    props.updateUserFullInfo(values);
                    setSubmitting(false);
                }}
            >
                <Form>
                    <div className="cabinet__form">
                        <h2 className="page__title--h2">Основная информация</h2>

                        <MyTextInput
                            label="Ваше имя и фамилия"
                            name="fullName"
                            type="text"
                            placeholder="Александр Калыргин"
                        />

                        <MyCheckbox name="lookingForAJob">
                            Ищите работу?
                        </MyCheckbox>

                        <MyTextInput
                            label="Расскажите о вашем опыте работы"
                            name="lookingForAJobDescription"
                            type="text"
                            placeholder="Ваш резюме"
                        />

                        <MyTextInput
                            label="Расскажите немного о себе"
                            name="aboutMe"
                            type="text"
                            placeholder="Что-то о Вас"
                        />

                        <h2 className="page__title--h2 mt-5">Контактная информация</h2>

                        <MyTextInput
                            label="Facebook"
                            name="facebook"
                            type="text"
                        />

                        <MyTextInput
                            label="Website"
                            name="website"
                            type="text"
                        />

                        <MyTextInput
                            label="Twitter"
                            name="twitter"
                            type="text"
                        />

                        <MyTextInput
                            label="Instagram"
                            name="instagram"
                            type="text"
                        />

                        <MyTextInput
                            label="Youtube"
                            name="youtube"
                            type="text"
                        />

                        <MyTextInput
                            label="VK"
                            name="vk"
                            type="text"
                        />

                        <MyTextInput
                            label="Github"
                            name="github"
                            type="text"
                        />

                        <MyTextInput
                            label="MainLink"
                            name="mainLink"
                            type="text"
                        />

                        <button disabled={props.isDisabled} className="btn btn--blue btn--rounded btn--small" type="submit">Сохранить</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

export default ProfileInfo;