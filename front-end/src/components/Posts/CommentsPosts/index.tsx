import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './commentlist.css'
import Navbar from '../../Home/Navbar';

interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

interface Props {
    postId: number;
}

const CommentsList: React.FC<Props> = ({ postId }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchComments = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
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
            <Navbar />


            <div className="CommentList">
                <h2>Lista de Comentários:</h2>
                {comments.map(comment => (
                    <div className="Comment" key={comment.id}>
                        <div className="Comment__header">
                            <span className="Comment__author">{comment.name}</span>
                            <span className="Comment__email">{comment.email}</span>
                        </div>
                        <div className="Comment__body">{comment.body}</div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default CommentsList;