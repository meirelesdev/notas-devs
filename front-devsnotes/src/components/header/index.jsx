import style from './style.css'

const Header = (props)=>{
    return (
        <header>
            <div>
                <h1>{props.title || 'DevsNotes'}</h1>
            </div>
            <nav className="menu">
                <ul>
                    <li>
                        Lista
                    </li>
                    
                    <li>
                        Lista
                    </li>
                    <li>
                        Lista
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header