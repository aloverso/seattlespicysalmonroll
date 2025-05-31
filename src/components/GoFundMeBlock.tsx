import React, { ReactElement } from "react";
import { GOFUNDME_LINK } from "../domain/consts";

export const GoFundMeBlock = (): ReactElement => {
  return (
    <>
      <h3 className="text-l bold mbd">We are fundraising!</h3>
      <a href={GOFUNDME_LINK} className="text-black button bg-teal pad hover-light-teal">
        Find us on GoFundMe
        <img
          src="/icons/external.svg"
          alt=""
          className="mls"
          style={{ marginBottom: "3px", width: "16px", height: "16px" }}
        />
      </a>

      <p className="mtd">This event is free to attend, and we are 100% volunteer-powered.</p>
      <p>
        With our fundraising efforts, we will be able to offer participants: bottles of water,
        electrolytes powder or drinks, snacks, first aid kits, sunscreen, and event merch.
      </p>
    </>
  );
};
