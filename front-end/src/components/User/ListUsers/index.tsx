import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import listFetch from '../../../axios/config';
import { IUser } from '../../../interfaces/IUers';

import './uselist.css'




const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([]);

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