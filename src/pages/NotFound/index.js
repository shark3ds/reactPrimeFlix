
import './style.css'
import { Link } from 'react-router-dom';


function NotFound() {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2> Ops, acho que você se perdeu...</h2>
            <Link to="/">Voltar para todos os filmes</Link>
        </div>

    )
}

export default NotFound;