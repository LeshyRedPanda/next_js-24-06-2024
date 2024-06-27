
interface IUserModel {
    id: number;
    name: string
    username: string;
    email: string
}

export interface IPostModel {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ICommentModel {
    "postId": number,
    "id": number,
    "name": string,
    "email": string,
    "body": string,
}





export {
    IUserModel,
    IPostModel,
    ICommentModel
}