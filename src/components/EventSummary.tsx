import React, { ReactElement } from "react";
import { Event, SPICE } from "../domain/types";
import Link from "next/link";

interface Props {
  event: Event;
}

export const EventSummary = (props: Props): ReactElement => {
  return (
    <Link href={`/events/${props.event.id}`}>
      <div>
        <div className="bold text-l mtd">{props.event.timeOfDay}</div>
        <button className="bg-teal pad mvd btn-block hover-light-teal">
          <h3 className="text-l fdr fac">
            <span className="text-xl">{Array(props.event.spice).fill(SPICE).join("")}</span>
            <span className="font-lilita text-underline mld">{props.event.name}</span>
          </h3>
        </button>
      </div>
    </Link>
  );
};
