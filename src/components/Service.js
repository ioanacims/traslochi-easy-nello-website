import React from "react";
import Rent from "../media/rent.png";
import Contract from "../media/contract.png";
import Cam from "../media/cam.png";

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
              src={Contract}
              alt="Servizio Traslochi Torino e in tutta Italia"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Traslochi & Trasporti
              <div className="badge badge-secondary">!</div>
            </h2>
            <p>
              Offriamo il migliore servizio di Trasloco, in tutta
              professionalità, efficienza e senza stress. Ci occupiamo di
              sgomberare completamente tutto quello di cui hai bisogno,
              garantendoti un servizio di sgombero accurato, semplice e veloce.
            </p>
            <div className="card-actions justify-end  mt-6">
              <div className="badge badge-outline">Traslochi</div>
              <div className="badge badge-outline">Trasporti</div>
              <div className="badge badge-outline">Sgomberi</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Rent} alt="Servizio Traslochi Torino e in tutta Italia" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Lavori in cartongesso, tinteggiatura e posa pavimenti
              <div className="badge badge-primary">!</div>
            </h2>
            <p>
              Il team di Traslochi Easy Nello ti sarà di supporto per qualsiasi
              tipo di lavoro, dalla realizzazione di pareti in cartongesso, alla
              tinteggiatura, alla posa di pavimenti e molto altro. Contattaci
              per una consulenza!
            </p>
            <div className="card-actions justify-end mt-6">
              <div className="badge badge-outline">Muratore</div>
              <div className="badge badge-outline">Piastrellista</div>
              <div className="badge badge-outline">Decoratore</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Cam} alt="Servizio Traslochi Torino e in tutta Italia" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Carico e scarico merci
              <div className="badge badge-warning">!</div>
            </h2>
            <p>
              Affidarsi a dei professionisti per l’attività di carico e scarico
              merci è la scelta più responsabile che si possa fare. Svolgiamo
              ciò con grande sicurezza. Non esitare a contattarci al più presto
              possibile per ottenere il tuo preventivo gratuito!
            </p>
            <div className="card-actions justify-end mt-6">
              <div className="badge badge-outline">Carico & Scarico</div>
              <div className="badge badge-outline">Merci</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
