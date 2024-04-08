import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='logo' 
                classname='logo-img'>
            </img>
            <p><strong>Alura</strong>Videos</p>
        </div>
    )
}

export default Logo