import React, { ReactElement } from "react";
import { NavBar } from "../../src/components/NavBar";
import { Footer } from "../../src/components/Footer";
import { Event, SPICE } from "../../src/domain/types";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import { EventIdParam, loadAllEventIds, loadEventById } from "../../src/domain/loaders";
import dayjs from "dayjs";

interface Props {
  event: Event;
  allEventsOrdered: Event[]
}

const EventPage = (props: Props): ReactElement => {
  const date = dayjs(props.event.date);
  const spice = Array(props.event.spice).fill(SPICE).join("");
  const startTime = dayjs(`${props.event.date} ${props.event.startTime}`);

  return (
    <div className="bg-theme">
      <header>
        <NavBar active="schedule" />
      </header>
      <main className="container mtxl bg-white">
        <a href="/schedule">
          <button className="button bg-teal mbm">← Back to Schedule</button>
        </a>
        <div className="text-l bold mbd">{date.format("MMM DD, YYYY")}</div>
        <h1 className="text-xxl font-lilita mbs bg-blue pas">
          {spice} {props.event.name}
        </h1>
        <div className="row">
          <div className="col-md-5">
            <div className="text-m mbl">
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
                  <span className="mls">{startTime.format("h:mm A")}</span>
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

  events.sort((a, b) => {
    const dateTimeA = dayjs(`${a.date} ${a.meetingTime}`);
    const dateTimeB = dayjs(`${b.date} ${b.meetingTime}`);
    return dateTimeA.isBefore(dateTimeB) ? -1 : 1
  })

  return {
    props: {
      allEventsOrdered: events,
      event: await loadEventById(params.eventId),
    },
  };
};

export default EventPage;
