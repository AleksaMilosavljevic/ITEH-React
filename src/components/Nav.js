import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="div_nav">
            <div className="nav-menu">
                <div className="pocetna-nav-menu">
                    <Link className="active" to="/"><img id='logo-nav'
                        src={`https://yt3.ggpht.com/ytc/AKedOLRyUwxtIFwO3p9d_2AqA32ebuLOMfOZ4W5Z2bHV=s900-c-k-c0x00ffffff-no-rj`} /></Link>
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