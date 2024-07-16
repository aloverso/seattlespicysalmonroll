import React, { ReactElement } from "react";

interface Props {
  name: string;
  handle: string;
}

export const ThankYouLine = (props: Props): ReactElement => {
  const handleLink = props.handle.replace('@', '')
  return (
    <li className="mbs bullet">
      <span className="">{props.name}</span>
      <a className="bold" href={`https://www.instagram.com/${handleLink}`}>
        <span className="mlxs">{props.handle}</span>
      </a>
    </li>
  )
}