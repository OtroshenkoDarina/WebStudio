import React, {useState} from 'react';
import style from './SectionContact.module.scss'
import Button from "../Button/Button";
import MyModal from "../MyModal/MyModal";

const SectionContact = () => {

    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    return (
        <div>
        <div className={style.container}>
            <div className={style.bg}>
                <h1 className={style.title}>Lorem ipsum dolor sit amet consectetur.</h1>
                <Button text={'связаться'} onClick={handleOpen}/>
            </div>
        </div>
            <MyModal open={open} handleClose={handleClose}/>
        </div>
    );
};

export default SectionContact;