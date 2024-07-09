import React, { ReactElement, useState } from "react";
import { REGISTER_LINK } from "../domain/consts";

export const AlertBar = (): ReactElement => {
  const [showAlert, setShowAlert] = useState<boolean>(true);

  if (!showAlert) return <></>;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-alert">
      <div className="container weight-500">
        <div>
          All skaters MUST{" "}
          <a className="underline bold" href={REGISTER_LINK}>
            register
          </a>{" "}
          before joining us on any of the skate routes listed here. You assume full responsibility
          for yourself and for any risks that might arise when skating these routes.
        </div>

        <button
          onClick={() => setShowAlert(false)}
          className="mlxl nowrap bad brad border-black pointer"
        >
          I am registered
        </button>
      </div>
    </nav>
  );
};
