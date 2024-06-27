import React, {FC} from 'react';
import {IPostModel} from "@/components/types";
import Link from "next/link";

const PostsPage:FC = async () => {
    let allPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());



    return (
        <div>
            {
                allPosts.map((post:IPostModel)=> <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.id} : {post.title}</Link>
                </li>)
            }

        </div>
    );
};

export default PostsPage;