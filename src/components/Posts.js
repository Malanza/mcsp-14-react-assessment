import React from "react";
import PostItems from "./PostItems";

const Posts = ({posts}) => {
    return posts.map(post => (
        <PostItems post={post} key ={post.id}/>
    ))
}

export default Posts