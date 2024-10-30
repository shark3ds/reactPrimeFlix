import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './favorites.css'

import { toast } from 'react-toastify';


function Favorites() {


    const [films, setFilms] = useState([])


    useEffect(() => {
        setFilms(JSON.parse(localStorage.getItem('@primeflix')));
    }, [])

    function excludeFilm(id) { 

       let filtered = films.filter((el)=> el.id !== id)

       setFilms(filtered);

       localStorage.setItem('@primeflix', JSON.stringify(filtered))

       toast.success('Filme removido com sucesso')

    }


    if (!films) {
        return (

            <div className='favorites'>
                <h1>Sem filmes salvos como favoritos</h1>
            </div>

        )
    }

    return (
        <div className='favorites'>
            <h1>Favoritos</h1>

            <ul>
                {films.map((item) => {

                    return (

                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/films/${item.id}`}>ver detalhes</Link>
                                <button onClick={() => excludeFilm(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}

            </ul>


        </div>
    )

}

export default Favorites;