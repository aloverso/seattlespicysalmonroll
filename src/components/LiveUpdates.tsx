import React, { ReactElement, useEffect, useState } from "react";
import { UpdateMessage } from "../domain/types";
import { Update } from "./Update";
import dayjs from "dayjs";

export const LiveUpdates = (): ReactElement => {
  const [updates, setUpdates] = useState<UpdateMessage[]>([]);

  useEffect(() => {
    setUpdates([
      {
        message:
          "For drivers - note that northbound I-5 will be CLOSED this weekend from I-90 to U-District." +
          "We recommend taking public transit or finding alternate routes (expect traffic!)",
        timestamp: "2025-07-16T13:50:42-04:00",
        id: "1",
      },
      {
        message:
          "We are kicking off Day 1 tonight! Note that there is a baseball game at the " +
          "stadium tonight, parking is expensive and limited. We advise using public transportation " +
          "(to the international district light rail station) or use rideshare.",
        timestamp: "2025-07-17T16:52:12-04:00",
        id: "2",
      },
      {
        message:
          "This evening's Steampunk to Playa skate will be delaying the start time by half an hour" +
          "to give folks time for a break. New meeting time: 6:00pm. New rollout time: 6:30pm",
        timestamp: "2025-07-19T17:07:12-04:00",
        id: "3",
      },
    ]);
    // fetch("/api/getstore").then((response) => {
    //   response.json().then((json) => {
    //     setUpdates(json);
    //   });
    // });
  }, []);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     fetch("/api/getstore").then((response) => {
  //       response.json().then((json) => {
  //         setUpdates(json);
  //       });
  //     });
  //   }, 60000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="text-white bg-overlay pad">
      <h2 className="text-xl bold mbd">Announcements</h2>
      <p>
        Check here during the event for major announcements! Or visit our{" "}
        <a
          href="https://www.instagram.com/seattlespicysalmonroll/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          event Instagram
        </a>
        .
      </p>
      <div className="pvs feed">
        <div className="brad bg-white-overlay pad mvs text-black ">
          <div className="fdr fjc fac mbs">
            <img src="/icons/thumbtack.svg" alt="PIN" style={{ width: "14px", height: "14px" }} />
            <div className="text-s text-uppercase mlxs">PINNED</div>
          </div>
          <div>
            Got questions? Want real-time updates? Connect with your fellow SSSR skaters on our{" "}
            <a className="bold" href="https://chat.whatsapp.com/ERZYFz64NC13ZhiopBL3oQ?mode=r_c">
              WhatsApp group
            </a>
            !
          </div>
        </div>
        {updates
          .sort((a, b) => dayjs(a.timestamp).isAfter(dayjs(b.timestamp)) ? -1 : 1)
          .map((update) => (
          <Update key={update.id} update={update} />
        ))}
      </div>
    </div>
  );
};
