import React, { ReactElement } from "react";
import { Sponsorship } from "./Sponsorship";
import { CONTROLS, YEAR } from "../domain/consts";

export const Footer = (): ReactElement => {
  return (
    <footer className="bg-white footer width-100">
      <div className="container">
        <div>&copy; {YEAR} Seattle Distance Skating Club</div>
        <Sponsorship />
        <div>
          <span>
            Site by Anne LoVerso
          </span>
          {CONTROLS.showThanks &&
            <>
              <span className="mhs">•</span>
              <span>
                <a href="/thanks">Acknowledgements</a>
              </span>
            </>
          }
        </div>
      </div>
    </footer>
  );
};
