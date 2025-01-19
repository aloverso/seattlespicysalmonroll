import React, { ReactElement } from "react";
import { CONTROLS } from "../domain/consts";

export const Sponsorship = (): ReactElement => {

  if (!CONTROLS.showSponsorship) return <></>

  return (
    <div>Event sponsored by <a href="https://usa.shop-task.com/" target="_blank" rel="noopener noreferrer">SHOP TASK</a></div>
  )
}