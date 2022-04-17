
function ObjaveKartica(props) {
    return (
        <div className="div_objavekartica">
            <div className="card">
                <img id="slika-kartica" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIrILnDC_mM0JdMTipb_asxPUolgeo6_pzCXCdR8ZwJ5dAhvEw&usqp=CAU`}
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{props.naslov}</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sodales quam. Duis vulputate mollis libero. Sed nec neque at metus feugiat vestibulum sed vitae risus. Sed tincidunt, leo non pharetra convallis...</p>
                    <button type="button" className="btn btn-primary btn-lg mx-3">Pročitaj</button>
                    <button type="button" className="btn btn-danger btn-lg" onClick={() => props.obrisi(props.id)} value={props.id}>Obriši</button>
                </div>
            </div>
        </div>
    )
}

export default ObjaveKartica;