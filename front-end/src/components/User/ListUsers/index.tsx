import { useState, useEffect } from 'react';
import axios from 'axios';
import './uselist.css'
import { Link } from 'react-router-dom';
import listFetch from '../../../axios/config';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        listFetch.get('users')
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>

            <div className="user-list">
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>
                                {user.name}   -  {user.username}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}

export default UserList;