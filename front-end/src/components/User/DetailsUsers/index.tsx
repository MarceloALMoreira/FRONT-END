import { useState, useEffect } from 'react';
import axios from 'axios';
import './details.css'
import Navbar from '../../Home/Navbar';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

interface Props {
    userId: number;
}



const UserDetails = ({ userId }: Props) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => setUser(response.data))
            .catch(error => console.log(error));
    }, [userId]);

    if (!user) {
        return <p className='loading'>Carregando...</p>;
    }

    return (

        <div>
            <Navbar />
            <div className='user-details'>

                <h2>{user.name}</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>E-mail:</strong> {user.email}</p>
                <p><strong>Telefone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
            </div>
        </div>

    );


}

export default UserDetails;