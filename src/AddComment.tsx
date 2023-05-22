import React, { useState} from "react";
import Comment from "./Comment";

const AddComment = () => {
    const [comment, setComment] = useState("");
    const [listofComments, setListOfComments] = useState<string[]>([]);
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setComment(evt.target.value);
    }
    const onSubmit = () => {
        setListOfComments(prev => [...prev as string[], comment])
        setComment("");
    }
    return (
        <div>
            <h1>Add Comment</h1>
            <input type="text" value={comment} onChange={handleChange}/>
            <button onClick={onSubmit}>add</button>
            {!!listofComments?.length && listofComments.map((val, idx) => {
             return <Comment key={idx} comments={val}/>
            })}
        </div>
    )
}

export default AddComment;