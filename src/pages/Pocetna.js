import Nav from "../components/Nav";
import PocetnaKartica from "../components/PocetnaKartica";


function Pocetna() {
    return (
        <div className="div_pocetna">
            <Nav />
            <h1 className="mt-5">Smerovi na FON-u</h1>
            <div className="kartice_pocetna">
                <PocetnaKartica naslov="Informacioni sistemi i tehnologije"
                    slika={`https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`} />
                <PocetnaKartica naslov="Menadžment"
                    slika={`https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
                <PocetnaKartica naslov="Operacioni menadžment"
                    slika={`https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`} />
                <PocetnaKartica naslov="Menadžment kvaliteta i standardizacije"
                    slika={`https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`} />
            </div>
        </div>
    )
}

export default Pocetna;