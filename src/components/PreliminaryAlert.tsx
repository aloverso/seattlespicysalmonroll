import React, { ReactElement } from "react";
import { SPICE } from "../domain/types";

export const PreliminaryAlert = (): ReactElement => {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="bg-light bad brad border-blue pad mtm">
          <b>NOTE:</b> This schedule is preliminary! Meeting/start times are subject to change, and exact locations and
          routes are still being determined.
        </div>
      </div>
    </div>
  );
};
