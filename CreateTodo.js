import React, {useState} from "react";

export default function CreateTodo ({dispatch, todos}){
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    function handleTitle(evt) {setTitle(evt.target.value)}
    function handleDesc(evt) {setDesc(evt.target.value)}
    function handleCreate(evt){
        let creation = Date(Date.now())
        dispatch({type: "CREATE_TODO", title, desc, creation})
    }

    return(
        <>
        <h2> Create a todo </h2>
        <form onSubmit={(e) => {e.preventDefault(); handleCreate(e)}}>
            <div>
                <label htmlFor="create-title"> Title: </label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
            </div>
            <label> Description of the todo: </label>
            <textarea value={desc} onChange={handleDesc} />
            <input type="submit" value="Create" disabled={title.length === 0} />
        </form>
        </>
    );
}