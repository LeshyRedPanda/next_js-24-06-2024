import React from 'react';

type Params = { id: string } ;

const CommentPage = ({params}: { params: Params }) => {
    return (
        <div>
            user page {params.id}
        </div>
    );
};

export default CommentPage;