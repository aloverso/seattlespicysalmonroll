import React, { ReactElement } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";
import { Event } from "../src/domain/types";
import { GetStaticPropsResult } from "next";
import { loadAllEventIds, loadEventById } from "../src/domain/loaders";
import dayjs from "dayjs";
import { EventSummary } from "../src/components/EventSummary";
import { Metadata } from "../src/components/Metadata";
import { AlertBar } from "../src/components/AlertBar";
import { CONTROLS, ORDINAL, YEAR } from "../src/domain/consts";

interface Props {
  events: Event[];
  dayGroups: Record<string, Event[]>;
}

const Schedule = (props: Props): ReactElement => {
  const hasZeroEvents = Object.keys(props.dayGroups).length === 0;

  return (
    <div className="bg-theme">
      <Metadata
        title="Schedule"
        description={`Get the latest information on routes and event schedule for Seattle's ${ORDINAL} annual skating event - the ${YEAR} Seattle Spicy Salmon Roll`}
      />
      <header>
        <NavBar active="schedule" />
        {CONTROLS.showEvents && <AlertBar />}
      </header>
      <main className="container mtxl bg-white">
        <h1 className="text-xxl font-lilita mbd">Schedule</h1>
        {CONTROLS.showEvents &&
          Object.keys(props.dayGroups).map((date) => (
            <div key={date} id={date}>
              <h2 className="text-xl bold mtl">{dayjs(date).format("dddd MMM DD, YYYY")}</h2>
              <hr />
              <div className="col-md-8">
                {props.dayGroups[date].map((event) => (
                  <EventSummary key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        {(hasZeroEvents || !CONTROLS.showEvents) && <p>Schedule coming later!</p>}
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  const events = await Promise.all(loadAllEventIds().map((it) => loadEventById(it.params.eventId)));

  const dayGroups: Record<string, Event[]> = events.reduce((acc, cur) => {
    if (acc[cur.date]) {
      return {
        ...acc,
        [cur.date]: [...acc[cur.date], cur].sort((a, b) => {
          const timeA = dayjs(`${a.date} ${a.meetingTime}`);
          const timeB = dayjs(`${b.date} ${b.meetingTime}`);
          return timeA > timeB ? 1 : -1;
        }),
      };
    } else {
      return {
        ...acc,
        [cur.date]: [cur],
      };
    }
  }, {} as Record<string, Event[]>);

  return {
    props: {
      events,
      dayGroups,
    },
  };
};

export default Schedule;
