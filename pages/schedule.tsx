import React, { ReactElement } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";
import { Event } from "../src/domain/types";
import { GetStaticPropsResult } from "next";
import { loadAllEventIds, loadEventById } from "../src/domain/loaders";
import dayjs from "dayjs";
import { EventSummary } from "../src/components/EventSummary";
import { Metadata } from "../src/components/Metadata";

interface Props {
  events: Event[];
}

const Schedule = (props: Props): ReactElement => {
  const dayGroups: Record<string, Event[]> = props.events.reduce((acc, cur) => {
    if (acc[cur.date]) {
      return {
        ...acc,
        [cur.date]: [...acc[cur.date], cur].sort((a, b) =>
          a.meetingTime > b.meetingTime ? 1 : -1
        ),
      };
    } else {
      return {
        ...acc,
        [cur.date]: [cur],
      };
    }
  }, {} as Record<string, Event[]>);

  return (
    <div className="bg-theme">
      <Metadata
        title="Schedule"
        description="Get the latest information on routes and event schedule for Seattle's debut annual skating event - the 2024 Seattle Spicy Salmon Roll"
      />
      <header>
        <NavBar active="schedule" />
      </header>
      <main className="container mtxl">
        <h1 className="text-xxl font-lilita mbd">Schedule</h1>
        Coming soon...
        {Object.keys(dayGroups).map((date) => (
          <div key={date}>
            <h2 className="text-xl bold mtl">{dayjs(date).format("dddd MMM DD, YYYY")}</h2>
            <hr />
            <div className="col-md-8">
              {dayGroups[date].map((event) => (
                <EventSummary key={event.id} event={event} />
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  const events = await Promise.all(loadAllEventIds().map((it) => loadEventById(it.params.eventId)));
  return {
    props: {
      events: [],
    },
  };
};

export default Schedule;
