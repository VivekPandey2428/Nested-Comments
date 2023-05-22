import React, { useState } from "react";
import Comment from "./Comment";

interface ReplyCommentProps {
    reply: string;
    setCommentReply: React.Dispatch<React.SetStateAction<string>>;
    replyCommentList: string[];
    setReplyCommentList: any
}

const ReplyComment = ({reply, setCommentReply, replyCommentList, setReplyCommentList}: ReplyCommentProps) => {
    return (
        <div style={{marginBlock:"5px", marginLeft:"20px"}}>
            <input type="text" value={reply} onChange={(evt) => setCommentReply(evt.target.value)}/>
            <button onClick={() => (setReplyCommentList && setReplyCommentList((prev: any)=> [...prev as string[],reply]))}>add</button>
            <button>Cancel</button>
            {replyCommentList && !!replyCommentList.length &&  replyCommentList.map((val, idx) => {
                return <Comment comments={val} key={idx}/>
            })}
        </div>
    )
}
export default ReplyComment;