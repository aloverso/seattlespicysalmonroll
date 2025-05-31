import React, { ReactElement } from "react";
import { CONTROLS } from "../domain/consts";

export const Sponsorship = (): ReactElement => {
  if (!CONTROLS.showSponsorship) return <></>;

  return (
    <div>
      Event sponsored by{" "}
      <a href="https://usa.shop-task.com/" target="_blank" rel="noopener noreferrer">
        Shop Task
      </a>{" "}
      and{" "}
      <a href="https://zylberschtein.com/" target="_blank" rel="noopener noreferrer">
        Zylberschtein&apos;s Deli
      </a>
    </div>
  );
};
