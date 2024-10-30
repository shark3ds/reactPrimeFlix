import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'


function Home() {

    const [films, setFilms] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilms() {

            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: '80b6b17b1c55a97c8a2611ea7595d9ce',
                    languguage: 'pt-BR',
                    page: 1
                }

            })

            console.log(response.data.results)

            setFilms(response.data.results)
            setLoading(false);
        }

        loadFilms() 

    }, [])

    if (loading) {
        return (

            <div className='loading'>
                <h2>Carregando catálogo...</h2>
            </div>

        )

    }

    return (

        <div className='container'>

            <div className='list-films'>

                {films.map((film) => {

                    return (

                        <article key={film.id}>
                            <strong>{film.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
                            <Link to={`/Films/${film.id}`}>Acessar</Link>
                        </article>

                    )

                })}


            </div>

        </div>


    )
}

export default Home;