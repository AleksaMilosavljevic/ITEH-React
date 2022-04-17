import { Link } from 'react-router-dom'

function PocetnaKartica(props) {
    return (
        <div className="div_pockartica">
            <div className="card">
                <img id="slika-kartica" src={props.slika} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{props.naslov}</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sodales quam. Duis vulputate mollis libero. Sed nec neque at metus feugiat vestibulum sed vitae risus. Sed tincidunt, leo non pharetra convallis...</p>
                    <Link to="/" id="link-kartica" className="btn btn-primary">Saznaj više</Link>
                </div>
            </div>
        </div>
    )
}

export default PocetnaKartica;