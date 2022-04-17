import { Link } from 'react-router-dom';
import fonlogo from '../pictures/fonlogo.jpg';

function Nav() {
    return (
        <div className="div_nav">
            <div className="nav-menu">
                <div className="pocetna-nav-menu">
                    <Link className="active" to="/"><img id='logo-nav'
                        src={fonlogo} /></Link>
                </div>
                <div className="pocetna-nav-menu">
                    <Link className="active" to="/">Pocetna</Link>
                </div>
                <div className="prijava-nav-menu">
                    <Link className="active" to="prijava">Prijava na studije</Link>
                </div>
                <div className="objave-nav-menu">
                    <Link className="active" to="objave">Poslednje objave</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;