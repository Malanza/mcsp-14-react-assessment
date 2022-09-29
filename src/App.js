import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Posts from './components/Posts'
import Loading from './components/Loading'
import PostItems from './components/PostItems'

const App = () => {
    // use the useEffect hook to make an initial API call to the url: 
     // Use the useState hook to set the initial state
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    // your stat should be: 
    // posts and loading. 
    useEffect(() =>{
        async function getPost() {
            const data = await axios.get(url)
            setPosts(data.data)
            setLoading(false)
        }
    
        getPost()
    
    },[])

   
    
    // your components should be app, posts, postItem, and loading

    // conitionally render components so that if the app is loading, the loading component is renderd. If it is not loading and there are posts, the posts and in turn postItem components are renderd
    if(!loading){
        return <Posts posts = {posts}/>
    }else{
        return <Loading />
    }
    // the end result is that you should be able to click on an individual post and console.log the id of that post. 

    
}

export default App