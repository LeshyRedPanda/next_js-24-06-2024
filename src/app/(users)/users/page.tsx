import React, {FC} from 'react';
import Link from "next/link";
import {IUserModel} from "@/components/types";

const UsersPage: FC = async () => {
    let allUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    // console.log(allUsers)



    return (
        <div>
            {
                allUsers.map((user: IUserModel) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.id}: {user.name}</Link>
                    </li>
                ))
            }

        </div>
    );
};

export default UsersPage;