// import { createContext, useContext, useEffect } from "react";
// import { ErrorContext } from "./ErrorContext";
// import { ContentContext } from "./ContentContext";

// const CommentContext = createContext({});
// const CommentProvider = ({children}) => {
//     const { setErrors } = useContext(ErrorContext);
//     const { contents } = useContext(ContentContext);

//     useEffect(() => {
//         fetch(`/posts/post`)
//     })

//     return (
//         <CommentContext.Provider value={{}}>{children}</CommentContext.Provider>
//     )
// }

// export { CommentContext, CommentProvider }