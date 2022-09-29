import React from "react";



const postItem = ({post}) =>{
    
    const handleClick = async (e) => {
        console.log(e.target.id);
    
    }

    return <div id={post.id} onClick={handleClick}>{post.title}</div>
    
}



export default postItem
