import { Link } from 'react-router-dom'
import './style.css'

const Header = (props)=>{
    return (
        <header>
            <div>
                <h1><Link to="/">{props.title || 'DevsNotes'}</Link></h1>
            </div>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/todos"> Tarefas</Link>
                    </li>
                    
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header