import React, {useEffect, useState} from 'react';
import Button from "../Button/Button";
import style from './PostList.module.scss'
import Post from "../Post/Post";

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [page, setPage]= useState(1)

    useEffect(async () => {
        setPage(1)
        const result = await fetch(`http://localhost:3000/posts?_page=${page}&_limit=3`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
        setPosts(result)
        setPage(page + 1)
        console.log(posts)
    }, [])

    const getPosts = async () => {
        const result = await fetch(`http://localhost:3000/posts?_page=${page}&_limit=3`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
        setPosts([...posts, ...result])
        setPage(page + 1)
    }

    return (

        <div className={style.container}>
            <h2 className={style.title}>Title</h2>

            <div className={style.postList}>
                {posts?.map((post, key) => <Post title={post.title} key={key} img={post.imgThumbnail}/>)}
            </div>

            { page <=3 && <Button text={'Загрузить еще'} onClick={getPosts}/>}
        </div>
    );
};

export default PostList;