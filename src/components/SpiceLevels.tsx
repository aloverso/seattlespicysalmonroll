import React, { ReactElement, ReactNode } from "react";
import { SPICE } from "../domain/types";

export const SpiceLevels = (): ReactElement => {
  return (
    <>
      <SpiceHeader>{SPICE} 1/5 Spice</SpiceHeader>
      <p>
        <ul>
          <li>
            <b>Skill Level:</b> Chill, Beginner
          </li>
          <li>
            <b>Average Moving Speed:</b> 3–8 mph
          </li>
          <li>
            <b>Distance:</b> 3–12 miles
          </li>
          <li>
            <b>Hills:</b> Mild to none
          </li>
          <li>
            <b>Participants can:</b> Stride and turn, effectively perform one basic stop, ask
            questions & receive assistance, and expect the group to wait for them.
          </li>
        </ul>
      </p>

      <SpiceHeader>
        {SPICE}
        {SPICE}&nbsp; 2/5 Spice
      </SpiceHeader>
      <p>
        <ul>
          <li>
            <b>Skill Level:</b> Chill, Intermediate
          </li>
          <li>
            <b>Average Moving Speed:</b> 6–10 mph
          </li>
          <li>
            <b>Distance:</b> 8–20 miles
          </li>
          <li>
            <b>Hills:</b> Moderate
          </li>
          <li>
            <b>Participants can:</b> Control their speed and be able to stop at 15 mph, be ready to
            deal with curbs, rough surfaces and city streets, and expect the group to wait for them
            for a reasonable amount of time.
          </li>
        </ul>
      </p>

      <SpiceHeader>
        {SPICE}
        {SPICE}
        {SPICE}&nbsp; 3/5 Spice
      </SpiceHeader>
      <p>
        <ul>
          <li>
            <b>Skill Level:</b> Intermediate/Advanced
          </li>
          <li>
            <b>Average Moving Speed:</b> 6–10+ mph
          </li>
          <li>
            <b>Distance:</b> 15–25 miles
          </li>
          <li>
            <b>Hills:</b> Yes
          </li>
          <li>
            <b>Participants can:</b> Control their speed and be able to stop at 25 mph, be ready to
            deal with curbs, rough surfaces and city streets, and expect the group leader may
            suggest alternatives to those whose skills do not match the skate level.
          </li>
        </ul>
      </p>

      <SpiceHeader>
        {SPICE}
        {SPICE}
        {SPICE}
        {SPICE}&nbsp; 4/5 Spice
      </SpiceHeader>

      <p>
        <ul>
          <li>
            <b>Skill Level:</b> Advanced
          </li>
          <li>
            <b>Average Moving Speed:</b> 10+ mph
          </li>
          <li>
            <b>Distance:</b> 15–35 miles
          </li>
          <li>
            <b>Hills:</b> Yes
          </li>
          <li>
            <b>Participants can:</b> Control their speed and be able to stop at 30 mph, be ready to
            deal with curbs, rough surfaces and city streets at high speed, and expect the group to
            continue skating along the route without waiting for those who can not maintain the
            speed.
          </li>
        </ul>
      </p>

      <SpiceHeader>
        {SPICE}
        {SPICE}
        {SPICE}
        {SPICE}
        {SPICE}&nbsp; 5/5 Spice
      </SpiceHeader>

      <p>
        <ul>
          <li>
            <b>Skill Level:</b> Spicy Advanced+
          </li>
          <li>
            <b>Average Moving Speed:</b> 10+ mph
          </li>
          <li>
            <b>Distance:</b> 15–50+ miles
          </li>
          <li>
            <b>Hills:</b> Yes
          </li>
          <li>
            <b>Participants can:</b> Control their speed and be able to stop at 35+ mph, be ready
            for anything (the group looks for the most challenging areas to skate), and expect the
            group to continue skating along the route without waiting for those who can not maintain
            the speed.
          </li>
        </ul>
      </p>

      <SpiceHeader>General Info</SpiceHeader>
      <p>
        Each skate will have a route leader as well as skate marshals who will guide the group
        through each route and be sure everybody is safe and on track.
      </p>

      <p>Marshals will be clearly marked with a special jersey and present at every skate.</p>

      <p>
        Many of the marshals will carry parts, tools, and knowledge in case anyone has issues with
        their gear and need a repair. Marshals can also assist with some basic techniques before
        each skate, and feel free to ask them anything about the event. Many will also carry basic
        first aid for the events.
      </p>
    </>
  );
};

const SpiceHeader = ({ children }: { children: ReactNode }): ReactElement => {
  return <h3 className="text-m mbd mtm bold">{children}</h3>;
};
