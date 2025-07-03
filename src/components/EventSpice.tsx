import React, { ReactElement } from "react";
import { SPICE } from "../domain/types";

export const EventSpice = (props: {
  spice: number;
  inheritSize: boolean;
  inheritFont: boolean;
}): ReactElement => {
  if (props.spice === -1) {
    return (
      <>
        <span
          className={`${props.inheritSize ? "" : "text-l"} ${
            props.inheritFont ? "" : "font-lilita"
          }`}
        >
          [Varied&nbsp;
        </span>
        <span className={`${props.inheritSize ? "" : "text-xl"}`}>{SPICE}</span>
        <span
          className={`${props.inheritSize ? "" : "text-l"} ${
            props.inheritFont ? "" : "font-lilita"
          }`}
        >
          ]
        </span>
      </>
    );
  }
  return <>{Array(props.spice).fill(SPICE).join("")}</>;
};
