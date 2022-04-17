import { useState } from 'react'

function PrijavaForma(props) {

    const [email, setEmail] = useState();
    const [poruka, setPoruka] = useState();

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePoruka(e) {
        setPoruka(e.target.value)
    }


    return (
        <div className="div_prijavaforma">
            <h1>Kontaktiraj fakultet</h1>
            <div className="forma">s
                <div className="elem-forma">
                    <label>EMAIL: </label>
                    <input type="text" className="form-control" value={email} onChange={handleEmail} />
                </div>
                <div className="elem-forma">
                    <label>Poruka: </label>
                    <textarea className="form-control" value={poruka} onChange={handlePoruka} />
                </div>
                <button onClick={() => props.submit(email, poruka)} className="btn btn-primary mt-2" id='dugme_forma'>Submit</button>
            </div>
        </div >
    )

}

export default PrijavaForma;