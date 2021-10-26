import React from 'react';
import style from './Post.module.scss'

const Post = ({title, img}) => {

    return (
        <div className={style.img} style={{backgroundImage: `url('${img}')`}}>
            <div className={style.titleBg}>
                <p className={style.title}>{title}</p>
            </div>
        </div>
    );
};

export default Post;