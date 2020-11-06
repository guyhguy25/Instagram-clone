import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Posty from '../components/Posty';

function Test() {
    const [Posts, setPosts] = useState();
    useEffect(() => {
        axios.get('/posts')
            .then((res) => {
                console.log(res.data);
                setPosts({
                    posts: res.data
                })
            })
            .catch((err) => console.log(err));
    },[])
    console.log(Posts);
    var recentPostMarkup = Posts ? ((Posts.posts.map((post) => <Posty key={post.postId} post={post}/>))
    ) : (<p>Loading...</p>);
    // console.log(recentPostMarkup);
    return (
        // <div>
        //     {
        //         Posts ? (
        //             <div>
        //                 {/* {Posts.posts.map((post) => (<Post key={post.postId} postId={post.postId} username={post.userHandle} caption={post.body} imageUrl={post.imageUrl} likes={post.likes} userslike={post.userlike}/>))} */}
        //                 {/* {Posts.posts.map((posts) => (<Post caption={posts.body}/>))} */}
        //             </div>
        //         ) :(
        //             <div>
        //                 Loading...
        //             </div>
        //         )
        //     }
        // </div>
        <section className="app__posts">

            <div className="app__post">
                {recentPostMarkup}
            </div>
        </section>
    )
}

export default Test
