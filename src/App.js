import React, {useRef, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aa', body: 'cc'},
        {id: 2, title: 'bb', body: 'bb'},
        {id: 3, title: 'cc', body: 'aa'}
    ]);

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    function getSortedPosts() {
        console.log('Отработала функция sortedPosts');
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }

    const sortedPosts = getSortedPosts()

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    placeholder="Search"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="sorting"
                    options={[
                        {value: 'title', name: 'By name'},
                        {value: 'body', name: 'By description'},
                    ]}
                />
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={sortedPosts} title='Posts about JS'/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Posts not found!
                </h1>
            }
        </div>
    );
}

export default App;
