import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''})
    }

        // console.log(bodyInputRef.current.value)


        return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput type="text"
                     value={post.title}
                     onChange={e => setPost({...post, title: e.target.value})}
                     placeholder="Post title"/>
            <MyInput type="text"
                     value={post.body}
                     onChange={e => setPost({...post, body: e.target.value})}
                     placeholder="Post description"/>
            {/*/!*Неуправляемый/Неконтролируемый компонент*!/*/}
            {/*<MyInput type="text"*/}
            {/*         ref={bodyInputRef}*/}
            {/*         placeholder="Post description"/>*/}
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;