import React, { ReactElement } from "react";
import { Event, SPICE } from "../domain/types";
import Link from "next/link";

interface Props {
  event: Event;
}

export const EventSummary = (props: Props): ReactElement => {
  return (
    <div className="event-summary-block">
      <div className="bold text-l mtd">{props.event.meetingTime}</div>
      <Link href={`/events/${props.event.id}`}>
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
      </Link>
    </div>
  );
};
