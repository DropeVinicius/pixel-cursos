import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='logo' 
                className='logo-img'>
            </img>
            <p><strong>Cursos</strong>Certificação</p>
        </div>
    )
}

export default Logo