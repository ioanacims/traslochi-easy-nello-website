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
            className="w-96 h-80 mt-6"
            src={require("../media/gallery/3.jpg")}
            alt="Image 1"
          />
          <img
            className="w-96 h-80 mt-6"
            src={require("../media/gallery/8.jpg")}
            alt="Image 1"
          />
          <img
            className="w-96 h-80 mt-6"
            src={require("../media/gallery/25.jpg")}
            alt="Image 1"
          />
        </div>
        {/* second */}
        <div className="flex justify-around content-center flex-wrap">
          <img
            className="w-96 h-80 mt-6"
            src={require("../media/gallery/26.jpg")}
            alt="Image 1"
          />
          <img
            className="w-96 h-80 mt-6"
            src={require("../media/gallery/12.jpg")}
            alt="Image 1"
          />
          <img
            className="w-96 h-80 mt-6"
            src={require("../media/gallery/15.jpg")}
            alt="Image 1"
          />
        </div>
        <div className="flex justify-around content-center flex-wrap">
          <img
            className="w-96 h-80 mt-6"
            src={require("../media/gallery/17.jpg")}
            alt="Image 1"
          />
          <img
            className="w-96 h-80 mt-6"
            src={require("../media/gallery/5.jpg")}
            alt="Image 1"
          />
          <img
            className="w-96 h-80 mt-6"
            src={require("../media/gallery/10.jpg")}
            alt="Image 1"
          />
        </div>
      </div>
    </div>
  );
};
