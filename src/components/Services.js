import React from 'react'

export const Services = () => {
  return (
    <div id="servizi" className="flex justify-center items-center bg-white">
      <div className="lg:flex bg-white justify-center">
        <br />
        <div className="car bg-base-100 shadow-xl m-8 rounded-3xl">
          <div className="card-body">
            <h2 className="card-title">Traslochi</h2>
            <p>
              Il team di Traslochi Easy Nello è a tua disposizione per offrirti
              il migliore servizio di Trasloco, in tutta professionalità,
              efficienza e senza stress.
            </p>
          </div>
          <figure>
            <img
              src="https://www.borromeotraslochi.com/wp-content/uploads/2020/11/trasloco-coronavirus.jpg"
              alt="Servizio Traslochi Torino e in tutta Italia"
            />
          </figure>
        </div>
        <div className="car bg-base-100 shadow-xl m-8 rounded-3xl">
          <div className="card-body">
            <h2 className="card-title">Sgomberi</h2>
            <p>
              Ci occupiamo di sgomberare completamente tutto quello di cui hai
              bisogno, garantendoti un servizio di sgombero accurato, semplice e
              veloce.{" "}
            </p>
          </div>
          <figure>
            <img
              src="https://facchino.it/wp-content/uploads/2020/12/costo-trasloco-a-milano.png"
              alt="Servizio Sgomberi"
            />
          </figure>
        </div>
        <div className="car bg-base-100 shadow-xl m-8 rounded-3xl">
          <div className="card-body">
            <h2 className="card-title">Carico e scarico merci</h2>
            <p>
              Affidarsi a dei professionisti per l’attività di carico e scarico
              merci è la scelta più responsabile che si possa fare. Svolgiamo
              ciò con grande sicurezza.{" "}
            </p>
          </div>
          <figure>
            <img
              src="https://www.caturanotraslochi.com/wp-content/uploads/2015/09/shutterstock_2954771721.jpg"
              alt="Servizio Carico e Scarico Merci"
            />
          </figure>
        </div>
        <br />
      </div>
    </div>
  )
}
