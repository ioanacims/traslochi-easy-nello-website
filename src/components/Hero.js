import React from 'react'


export const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://wallpaperaccess.com/full/2180138.jpg`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Traslochi Easy Nello</h1>
            <p className="mb-5">
              Siamo professionisti nel settore traslochi. Tutto inizia con un
              idea. Forse vuoi trasferirti in un nuovo appartamento.
            </p>
            <a href="#scopri">
            <button className="btn btn-primary">Realizzalo con noi</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

