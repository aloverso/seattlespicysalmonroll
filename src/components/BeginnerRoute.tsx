import React, { ReactElement } from "react";
import { SPICE } from "../domain/types";

export const BeginnerRoute = (): ReactElement => {
  return (
    <div className="bg-light bad brad border-blue pad">
      This is a {SPICE} one-spice route. That makes it <b>Beginner-Friendly</b>!
    </div>
  );
};
