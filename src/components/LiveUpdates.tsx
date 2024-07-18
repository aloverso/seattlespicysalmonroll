import React, { ReactElement, useEffect, useState } from "react";
import { UpdateMessage } from "../domain/types";
import { Update } from "./Update";

export const LiveUpdates = (): ReactElement => {

  const [updates, setUpdates] = useState<UpdateMessage[]>([])

  useEffect(() => {

    setUpdates(
      [
        {"message":"third thing","timestamp":"2024-07-17T23:50:34+00:00","id":"9988764"},
        // {"message":"test new","timestamp":"2024-07-17T23:50:26+00:00","id":"32913594"},
        // {"message":"test new","timestamp":"2024-07-17T23:50:26+00:00","id":"329132594"},
        // {"message":"test new","timestamp":"2024-07-17T23:50:26+00:00","id":"329153594"},
        // {"message":"test new","timestamp":"2024-07-17T23:50:26+00:00","id":"32e913594"},
        // {"message":"test new","timestamp":"2024-07-17T23:50:26+00:00","id":"32913594"},
        // {"message":"test new","timestamp":"2024-07-17T23:50:26+00:00","id":"329132594"},
        // {"message":"test new","timestamp":"2024-07-17T23:50:26+00:00","id":"329132594"},
        // {"message":"test new","timestamp":"2024-07-17T23:50:26+00:00","id":"329113594"},
      ]
    )
  //   fetch('/api/getstore')
  //     .then(response => {
  //       response.json().then((json) => {
  //         setUpdates(json)
  //       })
  //     })
  }, [])

  return (
    <div className="text-white bg-overlay pad">
      <h2 className="text-xl bold mbd">Live Updates</h2>
      <p>Check back here for live updates of the group status during the event!</p>
      <div className="pvs feed">
        <div className="brad bg-white-overlay pad mvs text-black ">
          <div className="fdr fjc fac mbs">
            <img src="/icons/thumbtack.svg" alt="PIN" style={{ width: "14px", height: "14px" }} />
            <div className="text-s text-uppercase mlxs">PINNED</div>
          </div>
          <div>
            Use the <a className="bold" href="http://glympse.com/!seattlespicysalmonroll2024">Glympse app</a>&nbsp;to
            find live-location sharing for safety marshals during the event. Our Glympse public tag
            is <span className="bold">seattlespicysalmonroll2024</span>.
          </div>
        </div>
        {updates.map((update) => (
          <Update key={update.id} update={update} />
        ))}
      </div>
    </div>
  );
};
