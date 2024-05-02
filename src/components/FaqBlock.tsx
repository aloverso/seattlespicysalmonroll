import React, { ReactElement, ReactNode } from "react";

interface Props {
  q: string;
  a: ReactNode;
}

export const FaqBlock = (props: Props): ReactElement => {
  return (
    <>
      <h2 className="text-l mbd text-teal brad bg-black bold pad">
        {props.q}
      </h2>
      <p className="bg-white pad brad">
        {props.a}
      </p>
    </>
  )
}