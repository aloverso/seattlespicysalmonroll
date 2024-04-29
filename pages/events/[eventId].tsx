import React, { ReactElement } from "react";
import { NavBar } from "../../src/components/NavBar";
import { Footer } from "../../src/components/Footer";
import { CategoryMap, Event } from "../../src/domain/types";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import { EventIdParam, loadAllEventIds, loadEventById } from "../../src/domain/loaders";
import dayjs from "dayjs";

interface Props {
  event: Event;
}

const EventPage = (props: Props): ReactElement => {
  const date = dayjs(`${props.event.date} ${props.event.meetingTime}`);
  const startTime = dayjs(`${props.event.date} ${props.event.startTime}`);
  const category = CategoryMap[props.event.category];

  return (
    <>
      <header>
        <NavBar active="schedule" />
      </header>
      <main className="container mtxl">
        <a href="/schedule">
          <button className="button bg-teal mbm">← Back to Schedule</button>
        </a>
        <div className="text-l bold mbd">{date.format("MMM DD, YYYY h:mm A")}</div>
        <h1 className="text-xxl font-lilita mbs bg-blue pas">
          {category.emoji} {props.event.name}
        </h1>
        <div className="text-m mbm">
          <em>{props.event.description}</em>
        </div>
        <p>
          <span className="bold text-uppercase">Distance:</span>
          <span className="mls">{props.event.distance}</span>
        </p>
        <p>
          <span className="bold text-uppercase">Meeting Time:</span>
          <span className="mls">{date.format("h:mm A")}</span>
        </p>
        <p>
          <span className="bold text-uppercase">Start Time:</span>
          <span className="mls">{startTime.format("h:mm A")}</span>
        </p>
        <p>
          <span className="bold text-uppercase">Meeting Location:</span>
          <span className="mls">{props.event.meetingLocation}</span>
        </p>
        <p>
          <span className="bold text-uppercase">Rating:</span>
          <span className="mls">{category.emoji}</span>
          <a href="/faq">
            <span className="text-uppercase text-underline mls">{props.event.category}</span>
          </a>
          :
          <span className="mls">
            {category.difficulty}; {category.description}
          </span>
        </p>

        <h2 className="text-l bold mtd mbs">Description</h2>
        <div dangerouslySetInnerHTML={{ __html: props.event.body }} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticPaths = (): GetStaticPathsResult<EventIdParam> => {
  // const paths = loadAllEventIds();
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: EventIdParam;
}): Promise<GetStaticPropsResult<Props>> => {
  return {
    props: {
      event: await loadEventById(params.eventId),
    },
  };
};

export default EventPage;
