import React from 'react'

export const Service = () => {
  return (
    <div className="my-24">
      <div
        id="servizi"
        className="flex flex-col items-center md:flex md:flex-row md:justify-around md:items-center"
      >
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.borromeotraslochi.com/wp-content/uploads/2020/11/trasloco-coronavirus.jpg"
              alt="Servizio Traslochi Torino e in tutta Italia"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Traslochi & Trasporti
              <div className="badge badge-secondary">!</div>
            </h2>
            <p>
              Il team di Traslochi Easy Nello è a tua disposizione per offrirti
              il migliore servizio di Trasloco, in tutta professionalità,
              efficienza e senza stress.{" "}
            </p>
            <div className="card-actions justify-end ">
              <div className="badge badge-outline">Traslochi</div>
              <div className="badge badge-outline">Trasporti</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.borromeotraslochi.com/wp-content/uploads/2020/11/trasloco-coronavirus.jpg"
              alt="Servizio Traslochi Torino e in tutta Italia"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Sgomberi
              <div className="badge badge-primary">!</div>
            </h2>
            <p>
              Ci occupiamo di sgomberare completamente tutto quello di cui hai
              bisogno, garantendoti un servizio di sgombero accurato, semplice e
              veloce.{" "}
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Sgomberi</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.borromeotraslochi.com/wp-content/uploads/2020/11/trasloco-coronavirus.jpg"
              alt="Servizio Traslochi Torino e in tutta Italia"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Carico e scarico merci
              <div className="badge badge-warning">!</div>
            </h2>
            <p>
              Affidarsi a dei professionisti per l’attività di carico e scarico
              merci è la scelta più responsabile che si possa fare. Svolgiamo
              ciò con grande sicurezza.{" "}
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Carico & Scarico</div>
              <div className="badge badge-outline">Merci</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
