
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import './films.css'

import api from '../../services/api'

function Films() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [film, setFilm] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilm() {

            await api.get(`/movie/${id}`, {

                params: {
                    api_key: '80b6b17b1c55a97c8a2611ea7595d9ce',
                    languguage: 'pt-BR'
                }

            }).then((response) => {
                console.log(response)
                setFilm(response.data)
                setLoading(false)
            }).catch((response) => {
                console.log('Filme não encontrado')
                navigate("/", { replace: true })
                return;
            })
        }

        loadFilm()

        return () => {
            console.log('compoennte foi desmontado');
        }

    }, [navigate, id])



    function saveMovie() {

        let moviesList = JSON.parse(localStorage.getItem('@primeflix')) || [];

        const hasFilm = moviesList.some((el) => el.id === film.id)

        if (hasFilm) {
            toast.warn('Este filme já está na sua lista')
            return;
        }

        moviesList.push(film)

        localStorage.setItem('@primeflix', JSON.stringify(moviesList))

        toast.success('Filme salvo com sucesso')

    }



    if (loading) {
        return (

            <div className="film-info">
                <h1>Carregando detalhes....</h1>
            </div>

        )

    }

    return (
        <div className="film-info">

            <h1>{film.title}</h1>


            <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt={film.title} />

            <h3>Sinopse</h3>
            <span>{film.overview}</span>

            <strong>Avaliação: {film.vote_average} / 10 </strong>

            <div className="button-area">

                <button onClick={saveMovie}>Save</button>
                <button>
                    <a target="blank"
                        rel="external" href={`https://youtube.com/results?search_query=${film.title} Trailler`}>Trailler</a>
                </button>

            </div>

        </div>

    )
}

export default Films;