import { useState } from 'react';
import axios from 'axios';
import './newposts.css'

interface FormData {
    title: string;
    body: string;
}

const NewPost = () => {
    const [formData, setFormData] = useState<FormData>({ title: '', body: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const postData = {
            title: formData.title,
            body: formData.body,
            userId: 1
        };

        try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
            // redirecionar para página principal após a criação do post
            window.location.replace('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='NewPost'>

            <h2>Inserir novo Post:</h2>
            <form onSubmit={handleSubmit} className="forms">
                <div className='FormControll'>
                    <label htmlFor="title">Título:</label>
                    <input type="text" name="title" id="title" placeholder="Digite o Título" value={formData.title} onChange={handleChange} />
                    <br />
                    <label htmlFor="body">Conteúdo:</label>
                    <textarea name="body" id="body" placeholder="Digite o Conteúdo" value={formData.body} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className='post_btn'>Criar Post</button>
            </form>
        </div>
    );
}

export default NewPost;