import { useContext, useState } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";
import BlogEditor from "../components/blog-editor.component";
import PublishForm from "../components/publish-form.component";
import { createContext } from "react";

const blogStructer = {
    title: '',
    banner:'',
    content:[],
    tags:[],
    des:'',
    author : {personal_info:{}}
}

export const EditorContext = createContext({});

const Editor = () =>{

    const [blog , setBlog] = useState(blogStructer)

    const [editorState , setEditorState] = useState("editor");
    const [textEdtor , setTextEditor] = useState({isReady: false});
    
    let { userAuth:{access_token} } = useContext(UserContext)

    return(
        <EditorContext.Provider value={{blog,setBlog,editorState,setEditorState,textEdtor , setTextEditor}}>
            {
                access_token === null ? <Navigate to="/signin"/>
                :editorState == "editor" ? <BlogEditor/> : <PublishForm/>
            }
        </EditorContext.Provider>
    )
}

export default Editor;