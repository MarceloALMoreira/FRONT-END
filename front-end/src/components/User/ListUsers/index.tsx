import { useState, useEffect } from 'react';
import axios from 'axios';
import './uselist.css'
import Navbar from '../../Home/Navbar';
import { Link } from 'react-router-dom';

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
        axios.get('https://jsonplaceholder.typicode.com/users')
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