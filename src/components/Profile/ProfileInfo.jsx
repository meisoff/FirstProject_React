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
                        .max(30, '???? ???????????? 30 ????????????????')
                        .required('????????????????????'),
                    aboutMe: Yup.string()
                        .max(300, '???? ???????????? 300 ????????????????')
                        .required('????????????????????'),

                })}
                onSubmit={(values, { setSubmitting }) => {
                    props.updateUserFullInfo(values);
                    setSubmitting(false);
                }}
            >
                <Form>
                    <div className="cabinet__form">
                        <h2 className="page__title--h2">???????????????? ????????????????????</h2>

                        <MyTextInput
                            label="???????? ?????? ?? ??????????????"
                            name="fullName"
                            type="text"
                            placeholder="?????????????????? ????????????????"
                        />

                        <MyCheckbox name="lookingForAJob">
                            ?????????? ?????????????
                        </MyCheckbox>

                        <MyTextInput
                            label="???????????????????? ?? ?????????? ?????????? ????????????"
                            name="lookingForAJobDescription"
                            type="text"
                            placeholder="?????? ????????????"
                        />

                        <MyTextInput
                            label="???????????????????? ?????????????? ?? ????????"
                            name="aboutMe"
                            type="text"
                            placeholder="??????-???? ?? ??????"
                        />

                        <h2 className="page__title--h2 mt-5">???????????????????? ????????????????????</h2>

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

                        <button disabled={props.isDisabled} className="btn btn--blue btn--rounded btn--small" type="submit">??????????????????</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

export default ProfileInfo;