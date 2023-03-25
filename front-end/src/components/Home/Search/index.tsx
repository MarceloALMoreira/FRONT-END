import { useState } from 'react'
import './search.css'
const Search = ({ }) => {

    const [user, setUser] = useState()


    return (
        <div className="search" >
            <form >
                <input type="text" placeholder='Buscar por Postagens' />
                <button>Buscar</button>
            </form>

        </div >
    )
}

export default Search