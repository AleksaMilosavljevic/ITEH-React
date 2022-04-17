import Nav from '../components/Nav';
import ObjaveKartica from "../components/ObjaveKartica";
import { useState } from 'react';

function Objave() {

    const [objave, setObjave] = useState([
        { id: 1, naslov: "Šta posle kraja studija?" },
        { id: 2, naslov: "Život studenata sa fona" },
        { id: 3, naslov: "Informacije o smerovima" },
        { id: 4, naslov: "Stipendije" },
        { id: 5, naslov: "Case Study Club" },
    ])

    var prikazObjava =
        objave.map((objava) => {
            return (
                <ObjaveKartica key={objava.id} id={objava.id} naslov={objava.naslov} obrisi={obrisi} />
            )
        })

    function obrisi(id) {
        const noveObjave = objave.filter((objava) => objava.id !== id);
        setObjave(noveObjave);
    }

    return (
        <div className="div_objave">
            <Nav />
            <div className="prikaz_objava">
                {prikazObjava}
            </div>
        </div>
    )
}

export default Objave;