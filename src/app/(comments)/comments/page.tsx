import React, {FC} from 'react';
import {ICommentModel} from "@/components/types";
import Link from "next/link";

const CommentsPage: FC = async () => {

    let allComments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());

    return (
        <div>
            {
            allComments.map((comment:ICommentModel)=> <li key={comment.id}>
                <Link href={`/comments/${comment.id}`}>{comment.id} : {comment.name}</Link>
            </li>)
            }

        </div>
    );
};

export default CommentsPage;