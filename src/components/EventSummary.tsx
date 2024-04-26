import React, { ReactElement } from "react";
import { CategoryMap, Event } from "../domain/types";
import dayjs from "dayjs";
import Link from "next/link";

interface Props {
  event: Event;
}

export const EventSummary = (props: Props): ReactElement => {
  const datetime = `${props.event.date} ${props.event.meetingTime}`;
  return (
    <Link href={`/events/${props.event.id}`}>
      <div>
        <div className="bold text-l mtd">
          {dayjs(datetime, "YYYY-MM-DD HH:mm").format("h:mm A")}
        </div>
        <button className="bg-teal pad mvd btn-block hover-light-teal">
          <h3 className="text-l fdr fac">
            <span className="text-xl">{CategoryMap[props.event.category].emoji}</span>
            <span className="font-lilita text-underline mld">{props.event.name}</span>
          </h3>
        </button>
      </div>
    </Link>
  );
};
