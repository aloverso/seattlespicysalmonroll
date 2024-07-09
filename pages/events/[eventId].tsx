import React, { ReactElement, useMemo } from "react";
import { NavBar } from "../../src/components/NavBar";
import { Footer } from "../../src/components/Footer";
import { Event, SPICE } from "../../src/domain/types";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import { EventIdParam, loadAllEventIds, loadEventById } from "../../src/domain/loaders";
import dayjs from "dayjs";
import Link from "next/link";
import { BeginnerRoute } from "../../src/components/BeginnerRoute";
import { AlertBar } from "../../src/components/AlertBar";

interface Props {
  event: Event;
  allEventsOrdered: Event[];
  nextEvent: Event | null;
  prevEvent: Event | null;
}

const EventPage = (props: Props): ReactElement => {
  const date = dayjs(props.event.date);
  const spice = Array(props.event.spice).fill(SPICE).join("");

  const { nextEvent, prevEvent } = props;

  return (
    <div className="bg-theme">
      <header>
        <NavBar active="schedule" />
        <AlertBar />
      </header>
      <main className="container mtxl bg-white">
        <a href="/schedule">
          <button className="button bg-teal mbm">← Back to Schedule</button>
        </a>
        <div className="text-l bold mbd">{date.format("dddd MMM DD, YYYY")}</div>
        <h1 className="text-xxl font-lilita mbs bg-blue pas">
          {spice} {props.event.name}
        </h1>

        <div className="row">
          <div className="col-md-5">
            <div className="mbm">{props.event.spice === 1 && <BeginnerRoute />}</div>

            <div className="text-m mbm">
              <em>{props.event.description}</em>
            </div>

            {props.event.type === "Skate" && (
              <>
                <p>
                  <span className="bold text-uppercase">Distance:</span>
                  <span className="mls">{props.event.distance}</span>
                </p>
                <p>
                  <span className="bold text-uppercase">Meeting Time:</span>
                  <span className="mls">{props.event.meetingTime}</span>
                </p>
                <p>
                  <span className="bold text-uppercase">Start Time:</span>
                  <span className="mls">{props.event.startTime}</span>
                </p>
                <p>
                  <span className="bold text-uppercase">Meeting Location:</span>
                  <br />
                  {props.event.meetingLocationAddress.split("\n").map((addressLine, i) => (
                    <div key={i}>
                      <span className="mld">{addressLine}</span>
                      <br />
                    </div>
                  ))}
                </p>
                <p>
                  <span className="bold text-uppercase">Spice Level:</span>
                  <span className="mls">{spice}</span>
                  <div className="mld mbm">
                    <a href="/faq">What does this mean?</a>
                  </div>
                </p>
              </>
            )}
          </div>

          {props.event.meetingLocationLink && (
            <div className="col-md-7">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width={600}
                    height={350}
                    id="gmap_canvas"
                    src={props.event.meetingLocationLink}
                    frameBorder="0"
                    scrolling="no"
                    title={props.event.meetingLocationTitle}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <h2 className="text-l bold mtl mbs">Description</h2>
        <div className="row">
          <div className="col-md-8">
            <div dangerouslySetInnerHTML={{ __html: props.event.body }} />
          </div>
        </div>

        <div className="row">
          <div className="col-5">
            {prevEvent && (
              <Link href={`/events/${prevEvent.id}`}>
                <button className="bg-teal pad mvd btn-block hover-light-teal">
                  <span className="text-d">← Prev Skate: </span>
                  <span className="text-underline bold">{prevEvent.name}</span>
                </button>
              </Link>
            )}
          </div>

          <div className="col-2"></div>

          <div className="col-5">
            {nextEvent && (
              <Link href={`/events/${nextEvent.id}`}>
                <button className="bg-teal pad mvd btn-block hover-light-teal">
                  <span className="text-d">→ Next Skate: </span>
                  <span className="text-underline bold">{nextEvent.name}</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticPaths = (): GetStaticPathsResult<EventIdParam> => {
  const paths = loadAllEventIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: EventIdParam;
}): Promise<GetStaticPropsResult<Props>> => {
  const events = await Promise.all(loadAllEventIds().map((it) => loadEventById(it.params.eventId)));
  const event = await loadEventById(params.eventId);

  events.sort((a, b) => {
    const dateTimeA = dayjs(`${a.date} ${a.meetingTime}`);
    const dateTimeB = dayjs(`${b.date} ${b.meetingTime}`);
    return dateTimeA.isBefore(dateTimeB) ? -1 : 1;
  });

  const len = events.length;
  const index = events.findIndex((it) => it.id === event.id);

  let nextEvent;
  let prevEvent;

  if (index === undefined) {
    nextEvent = null;
    prevEvent = null;
  } else {
    nextEvent = index + 1 < len ? events[index + 1] : null;
    prevEvent = index - 1 >= 0 ? events[index - 1] : null;
  }

  return {
    props: {
      allEventsOrdered: events,
      event: event,
      nextEvent,
      prevEvent,
    },
  };
};

export default EventPage;
