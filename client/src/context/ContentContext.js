import { createContext, useContext, useEffect, useState } from "react";
import { ErrorContext } from "./ErrorContext";

const ContentContext = createContext({});
const ContentProvider = ({children}) => {
    const { setErrors } = useContext(ErrorContext);
    const [contents, setContents] = useState([]);

    useEffect(() => {
        fetch(`/posts`)
        .then(resp => resp.json())
        .then(data => setContents(data))
        .catch(errors => setErrors(errors))
    }, [setErrors])

    const addPost = (newPost) => {
        setContents([...contents, newPost]);
    }

    const editPost = (newPost) => {
        const updatedContentList = contents.map(post => {
            if (newPost.id === post.id) {
                return newPost
            } else {
                return post;
            }
        });
        setContents(updatedContentList);
    }

    const deletePost = (id) => {
        const updatedContentList = contents.filter(post => post.id !== id)
        setContents(updatedContentList);
    }

    return (
        <ContentContext.Provider value={{ contents, addPost, editPost, deletePost }}>{children}</ContentContext.Provider>
    )
}

export { ContentContext, ContentProvider }