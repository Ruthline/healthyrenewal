import '../header/Header.css';
import {Link} from 'react-router-dom';
import Logo from '../header/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faBars} from '@fortawesome/free-solid-svg-icons';
function Header() {
    return(
        <header>
             <div className="header-index">
                    
                    <div className="nav-group">
                        
                        <Link to="/home" className="one-nav"><img src={Logo} alt=""></img></Link>
    
                        
                        
                        <label for="clic-menu" className="three-nav" href="meni" ><FontAwesomeIcon icon={faBars}/></label>
                        <input type="checkbox" id="clic-menu"></input>
                        
    
                        
                        <div className="items" >
                            <div className='eight-nav item search-o'>
                                <input  type='text' placeholder='__' name='buscar' id='buscar'></input>
                                <button for='buscar'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                            </div>
                        
                        
                            <Link to="/"  className="five-nav item">¿Qué es una ficha antropométrica?</Link>
                            <Link to="/" className="six-nav item">Información planes</Link>
                            <Link to="/home" className="four-nav item" >Healthy Renewal</Link>
                        
                            <div className='eight-nav item search-o s-s'>
                                    <input  type='text' placeholder='__' name='buscar' id='buscar'></input>
                                    <button for='buscar'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                            </div>
    
                       
                        
                        
                        </div>
                    </div>

                    <div className='buttons-tablet'>
                        <div className='styleButtonTablet'>
                        <button className='sign In'><Link to="/home">Iniciar Sesión</Link></button>
                        <button className='sign Up'><Link to="/home">Registrarse</Link></button>
                        </div>
                        
                    </div>
                </div>

                <div className='buttons-mobile'>
                    <button className='sign In'><Link to="/home">Iniciar Sesión</Link></button>
                    <button className='sign Up'><Link to="/home">Registrarse</Link></button>
                </div>


                <div className="items-tablet" >
                            <div className='eight-nav item search-o'>
                                <input  type='text' placeholder='__' name='buscar' id='buscar'></input>
                                <button for='buscar'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                            </div>
                        
                        
                            <Link to="/"  className="five-nav item">¿Qué es una ficha antropométrica?</Link>
                            <Link to="/" className="six-nav item">Información planes</Link>
                            <Link to="/home" className="four-nav item" >Healthy Renewal</Link>
                        
                            <div className='eight-nav item search-o s-s'>
                                    <input  type='text' placeholder='__' name='buscar' id='buscar'></input>
                                    <button for='buscar'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                            </div>
    
                       
                        
                        
                        </div>
        </header>
        
    );

}
export default Header;