import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    /*const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }*/

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    //console.log(res);
                    if (!res.ok) {
                        throw Error('could not fetch the data');    
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(true);
                    setError(null);
                })
                .catch(err => {
                    //console.log(err.message);
                    setIsPending(false);
                    setError(err.message);
                }) 
                    
                
        }, 1000);
    }, [url])
    
    return {data ,isPending ,error }
}

export default useFetch