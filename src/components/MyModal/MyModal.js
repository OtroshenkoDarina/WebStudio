import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './MyModal.module.scss'
import {Formik, Form, Field} from 'formik'
import MyInput from "../MyInput/MyInput";
import * as yup from 'yup'
import * as icons from '../icons/index'
import {Checkbox} from "@mui/material";
import Button from "../Button/Button";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 455,
    backgroundColor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const IS_REQUIRED = 'This field is required'

const schema = yup.object().shape({
    name: yup.string().required(IS_REQUIRED),
    phone: yup.number().required(IS_REQUIRED).min(10, 'Enter your phone'),
    email: yup.string().email().required(IS_REQUIRED),
    comments: yup.string()
})

const MyModal = ({handleClose, open}) => {

    const handleSubmit = (values) => {
        console.log(values);
        handleClose()
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <Formik
                            initialValues={{name:'', phone:'', email: '', comments: ''}}
                            onSubmit={handleSubmit}
                            validationSchema={schema}
                        >
                            {({errors, touched}) => {
                                return (
                                    <Form className={styles.form}>
                                        <div onClick={handleClose}>
                                            {icons.close()}
                                        </div>
                                        <p className={styles.title}>Оставьте свои данные, мы вам перезвоним</p>
                                        <p className={styles.inputTitle}>Имя</p>
                                        <div className={styles.inputContainer}>
                                            <Field
                                                className={styles.input}
                                                component={MyInput}
                                                name='name'
                                                type='text'
                                            />
                                            {icons.man()}
                                        </div>
                                        <p className={styles.inputTitle}>Телефон</p>
                                        <div className={styles.inputContainer}>
                                            <Field
                                                className={styles.input}
                                                component={MyInput}
                                                name='phone'
                                                type='text'
                                            />
                                            {icons.phone()}
                                        </div>

                                        <p className={styles.inputTitle} >Почта</p>
                                        <div className={styles.inputContainer}>
                                            <Field
                                                className={styles.input}
                                                component={MyInput}
                                                name='email'
                                                type='email'
                                            />
                                            {icons.message()}
                                        </div>

                                        <p className={styles.inputTitle}>Комментарий</p>
                                        <Field
                                            className={styles.inputComments}
                                            component={MyInput}
                                            name='comments'
                                            type='text'
                                            placeholder='Введите текст'
                                        />
                                        <div className={styles.agreement}>
                                            <Checkbox/>
                                            <p className={styles.agreementTitle}>Соглашаюсь с рассылкой и принимаю <a href='#' className={styles.agreementPart}>Условия договора</a></p>
                                        </div>
                                        <Button text='Отправить' type='submit'/>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default MyModal