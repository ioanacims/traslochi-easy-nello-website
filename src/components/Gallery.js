export const Gallery = () => {
  return (
    <div className="grid text-center">
      <h1 className="text-4xl font-bold">Sul Campo</h1>
      <p className="text-lg my-5">
        {" "}
        Alcune riprese dei nostri lavori, con 🤍 e professionalità
      </p>
      <div className="border border-white p-28 rounded-lg">
        <div className="flex justify-around content-center flex-wrap ">
          <img
            className="w-96 h-64 mt-6"
            src={require("../media/gallery/3.jpg")}
            alt="Lavoro di costruzione"
          />
          <img
            className="w-96 h-64 mt-6"
            src={require("../media/gallery/8.jpg")}
            alt="Progetto completato"
          />
          <img
            className="w-96 h-64 mt-6"
            src={require("../media/gallery/25.jpg")}
            alt="Dettaglio di costruzione"
          />
        </div>
        {/* second */}
        <div className="flex justify-around content-center flex-wrap">
          <img
            className="w-96 h-64 mt-6"
            src={require("../media/gallery/26.jpg")}
            alt="Transizione del lavoro"
          />
          <img
            className="w-96 h-64 mt-6"
            src={require("../media/gallery/12.jpg")}
            alt="Cucina completata"
          />
          <img
            className="w-96 h-64 mt-6"
            src={require("../media/gallery/15.jpg")}
            alt="Dettaglio di finitura"
          />
        </div>
        <div className="flex justify-around content-center flex-wrap">
          <img
            className="w-96 h-64 mt-6"
            src={require("../media/gallery/17.jpg")}
            alt="Progetto completato"
          />
          <img
            className="w-96 h-64 mt-6"
            src={require("../media/gallery/5.jpg")}
            alt="Team di lavoro"
          />
          <img
            className="w-96 h-64 mt-6"
            src={require("../media/gallery/10.jpg")}
            alt="Realizzazione di un lavoro"
          />
        </div>
      </div>
    </div>
  );
};
