import Nav from "../components/Nav";
import PrijavaForma from "../components/PrijavaForma";

function Prijava() {

    function submit(email, poruka) {
        alert("Poruka je uspešno poslata. EMAIL: " + email + " Poruka: " + poruka);
    }

    return (
        <div className="div_prijava">
            <Nav />
            <PrijavaForma submit={submit} />
        </div>
    )
}

export default Prijava;
