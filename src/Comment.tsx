import React, { useState } from "react";
import ReplyComment from "./ReplyComment";
/**
 * 
 * id: 1
 * reply: "aa=",
 * data: {
 *   id:2 
 *   reply:aa
 *   data:
 * }
 */

interface CommentProps {
    comments: string;
}
const Comment = ({comments}: CommentProps) => {
    const [isUserReplying, setIsUserReplying] = useState(false);
    const [commentReply, setCommentReply] = useState("");
    const [replyCommentList, setReplyCommentList] = useState<string[]>([]);
    // const handleCommentReply = (evt: React.ChangeEvent<HTMLInputElement>) => {
    //     setCommentReply(evt.target.value);
    // }
    const handleReplySumbit = () => {
        setIsUserReplying(true);
    }
    return (
        <div>
            <input type="text" value={comments} disabled/>
            <button onClick={handleReplySumbit}>reply</button>
            <button>delete</button>
            {isUserReplying && <ReplyComment reply={commentReply} setCommentReply={setCommentReply} replyCommentList={replyCommentList ? replyCommentList : []} setReplyCommentList={setReplyCommentList} />}
        </div>
    );
}
export default Comment;