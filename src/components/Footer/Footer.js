import React from 'react';
import style from './Footer.module.scss'
import * as icons from '../icons/index'
import * as yup from 'yup'
import MyInput from "../MyInput/MyInput";
import {Formik, Form, Field} from 'formik'
import Button from "../Button/Button";

const IS_REQUIRED = 'This field is required'

const schema = yup.object().shape({
    email: yup.string().email().required(IS_REQUIRED)
})

const Footer = () => {

    const handleSubmit = () => {

    }

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <div className={style.contactsContainer}>
                    <a href='#' className={style.logo}><span className={style.logoPart}>Web</span>Studio</a>
                    <div className={style.contacts}>
                        <p className={style.address}>г. Киев, пр-т Леси Украинки, 26</p>
                        <a className={style.email} href='mailto:info@example.com'>info@example.com</a>
                        <a className={style.tel} href='tel:+38 099 111 11 11'>+38 099 111 11 11</a>
                    </div>
                </div>
                <div>
                    <p className={style.title}>присоединяйтесь</p>
                    <div className={style.icons}>
                        <div className={style.icon}>
                            {icons.instagram()}
                        </div>
                        <div className={style.icon}>
                            {icons.twitter()}
                        </div>
                        <div className={style.icon}>
                            {icons.facebook()}
                        </div>
                        <div className={style.icon}>
                            {icons.linkedin()}
                        </div>
                    </div>
                </div>
                <div className={style.title}>
                    <p>Подпишитесь на рассылку</p>
                    <Formik
                        initialValues={{email: ''}}
                        onSubmit={handleSubmit}
                        validationSchema={schema}
                    >
                        {({errors, touched}) => {
                            return (
                                <Form className={style.form}>
                                    <Field
                                        className={style.input}
                                        component={MyInput}
                                        name='email'
                                        type='email'
                                        placeholder='E-mail'
                                    />
                                    <Button type='submit' text={'Подписаться'}/>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Footer;