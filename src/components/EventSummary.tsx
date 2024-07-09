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
        <div className="bold text-l mtd">{props.event.meetingTime}</div>
        <button className="bg-teal pad mvd btn-block hover-light-teal">
          <h3 className="text-l fdr fac">
            <div>
              <span className="text-xl nowrap">
                {Array(props.event.spice).fill(SPICE).join("")}
              </span>
              <span className="font-lilita text-underline mls">{props.event.name}</span>
            </div>
          </h3>
        </button>
      </div>
    </Link>
  );
};
