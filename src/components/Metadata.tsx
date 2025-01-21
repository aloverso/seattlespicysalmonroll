import React, { ReactElement } from "react";
import Head from "next/head";
import { YEAR } from "../domain/consts";

interface Props {
  title?: string | undefined;
  description: string;
}

export const Metadata = (props: Props): ReactElement => {
  const sitename = `Seattle Spicy Salmon Roll ${YEAR}`;
  const title = props.title ? `${props.title} | ${sitename}` : sitename;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={props.description} key="desc" />
      <meta property="og:description" content={props.description} />
      <meta property="og:title" content={sitename} />
      <meta property="og:image" content="https://seattlespicysalmonroll.com/images/logo.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content="https://seattlespicysalmonroll.com/images/logo.png" />
    </Head>
  );
};
