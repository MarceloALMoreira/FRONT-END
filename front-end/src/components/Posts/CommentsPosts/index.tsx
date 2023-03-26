import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IComment } from '../../../interfaces/IComments';
import { IPost } from '../../../interfaces/IPosts';
import listFetch from '../../../axios/config';

import './commentlist.css'


const CommentsLis: React.FC<IPost> = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const params = useParams()
    const postId = params.postId

    useEffect(() => {
        const fetchComments = async () => {
            setIsLoading(true);
            try {
                const response = await listFetch.get(`posts/${postId}/comments`);
                setComments(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchComments();
    }, [postId]);

    if (isLoading) {
        return <div>Loading comments...</div>;
    }

    return (
        <div className="">
            <div className="CommentList">
                <h2>Lista de Comentários:</h2>
                {comments.map(comment => (
                    <div className="Comment" key={comment.id}>
                        <div className="Comment__header">
                            <span className="Comment__author">{comment.name}</span>
                        </div>
                        <div>
                            <p className="Comment__email">{comment.email}</p>
                        </div>
                        <div className="Comment__body">{comment.body}</div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default CommentsLis;