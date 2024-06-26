import React, { ReactElement } from "react";
import Head from "next/head";

interface Props {
  title?: string | undefined;
  description: string;
}

export const Metadata = (props: Props): ReactElement => {
  const sitename = "Seattle Spicy Salmon Roll 2024";

  return (
    <Head>
      {props.title ? (
        <title>
          {props.title} | {sitename}
        </title>
      ) : (
        <title>{sitename}</title>
      )}
      <meta name="description" content={props.description} key="desc" />
    </Head>
  );
};
