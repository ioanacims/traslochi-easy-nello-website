import React from 'react'
import Camion from "../media/camion.jpg"

export const More = () => {
  return (
    <div id="scopri">
      <div>
        <div className="hero min-h-screen bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              alt="immagine del camion di Nello"
              className="max-w-sm shadow-2xl rounded-3xl bg-base-200"
              src={Camion}
            />
            <div className="ml-3">
              <h1 className="text-5xl font-bold">
                Vuoi costruire la tua Visione?
              </h1>
              <p>
                Fallo con i migliori! Siamo professionisti del settore da ben
                oltre 10 anni.
              </p>

              <p className="py-6">
                Ci occupiamo di trasporti e traslochi presso privati e non,{" "}
                <br /> su tutto il territorio della regione Piemonte e in Tutta
                Italia.
              </p>

              <ul>
                <p className="text-2xl">
                  I nostri punti di forza, evidenziati anche dai nostri clienti
                  sono:
                </p>{" "}
                <br />
                <li className="font-semibold">
                  ✔︎ Disponibilità di automezzo adeguato, idoneo a qualsiasi
                  tipo di trasloco e sgombero
                </li>
                <li className="font-semibold">
                  ✔︎ Rapidità, sicurezza e attenzione nell’esecuzione del lavoro
                </li>
                <li className="font-semibold">
                  ✔︎ Preventivo trasparente, senza nessuna sorpresa last minute
                </li>
                <li className="font-semibold">
                  ✔︎ Pulizia e rispetto per l’ambiente nel quale lavoriamo
                </li>
              </ul>
              <a href="#contatti">
                <button className="btn btn-primary mt-8">
                  Contattaci per una consulenza
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
