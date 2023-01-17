import React from "react";

const Todo = ({description, ID}) => {
    return(
        <>
            <div>
                <input type="checkbox" data-todo-id={ID} /><input type="text" value={description}/>
            </div>
        </>
    )


}

export default Todo
