import React from "react";
import Instagram from "../media/ig.svg";
import Facebook from "../media/fb.svg";

export const Contact = () => {
  return (
    <div id="contatti">
      <footer className="footer p-10 bg-white text-base-300">
        <div>
          <span className="footer-title">INDIRIZZO</span>
          <p>Via Borgaro, Torino, TO 10149</p>
        </div>
        <div>
          <span className="footer-title">CONTATTI</span>
          <p>(+39) 377 344 8109</p>
        </div>
        <div>
          <span className="footer-title">SOCIAL</span>
          <div className="grid grid-flow-col gap-4">
            <a
              className="hover:cursor-pointer"
              href="https://www.instagram.com/traslochieasynello"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Instagram}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
                alt="ig social media"
              />
            </a>
            <a
              className="hover:cursor-pointer"
              href="https://www.facebook.com/traslochieasynello"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Facebook}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
                alt="fb social media"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
