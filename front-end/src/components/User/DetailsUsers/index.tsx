import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IUserDetails } from '../../../interfaces/IUserDetails';
import { IUser } from '../../../interfaces/IUers';
import listFetch from '../../../axios/config';

import './details.css'







const UserDetails: React.FC<IUserDetails> = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams()
    const userId = params.userId

    useEffect(() => {
        listFetch.get(`/users/${userId}`)
            .then(response => setUser(response.data))
            .catch(error => console.log(error));
    }, [userId]);

    if (!user) {
        return <p className='loading'>Carregando...</p>;
    }

    return (

        <div>
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