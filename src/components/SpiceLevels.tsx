import React, { ReactElement, ReactNode } from "react";
import { SPICE } from "../domain/types";

export const SpiceLevels = (): ReactElement => {
  return (
    <>
      <SpiceHeader>{SPICE} 1/5 Spice - Beginner</SpiceHeader>
      <p>
        Speeds are slow to moderate, distances are approximately 3-10 miles, with many breaks.
        Skaters should know how to do basic forward stride, roll over small cracks or seams, and
        slow or stop on their own with at least one basic technique (t-stop, carving, etc). 1/5
        Spice skates have little to no elevation up or down. There will also be experienced skaters
        on these skates to assist with knowledge or techniques.
      </p>

      <SpiceHeader>
        {SPICE}
        {SPICE}&nbsp; 2/5 Spice - Beginner/Intermediate
      </SpiceHeader>
      <p>
        Speed will be steady pace along scenic routes up to 10-15 miles, with a moderate amount of
        breaks for views and cool downs. Each skater should be able to stride over a variety of
        surfaces including some uneven terrain and small cracks. Routes can include bike lanes and
        sidewalks where necessary, and will cross intersections meaning you need to have the ability
        to stop within 15-20 feet when needed. There will be moderate inclines and declines, but
        typically they will be short and not very steep.
      </p>

      <SpiceHeader>
        {SPICE}
        {SPICE}
        {SPICE}&nbsp; 3/5 Spice - Intermediate
      </SpiceHeader>
      <p>
        Three spice skates will take place in urban settings, at moderate speeds spanning up to 10
        miles. A few main breaks will take place at landmarks along the route, enabling us to enjoy
        the inner urban spaces for a few minutes each before continuing. Skaters should be well
        versed in strides, uneven surfaces and cracks, speed control, and stopping techniques (At
        least one strong stop). Skates may enter the street at time so skaters need to be conscious
        of traffic and pay attention to the marshals’ directions to stay safe.
      </p>
      <p>
        These skates have moderate inclines and declines throughout the city, a few of them long and
        at various grades of steepness. Again, being able to slow and stop even on hills is
        important considering Seattle’s topography.
      </p>

      <SpiceHeader>
        {SPICE}
        {SPICE}
        {SPICE}
        {SPICE}&nbsp; 4/5 Spice - Advanced
      </SpiceHeader>
      <p>
        Our single four Spice skate for the weekend will take place at night on Thursday, the first
        night of the skate.
      </p>

      <p>
        This level of skate requires strong and fast skating techniques, including the need to able
        to slow at high speeds and stop on a dime, even on hills and rough terrain. We will be
        skating in the streets and bombing down some of the bigger and longer hills around Seattle.
        Focus and stamina are integral to this level of skate, and we look forward to tearing up the
        city with everyone!
      </p>

      <SpiceHeader>
        {SPICE}
        {SPICE}
        {SPICE}
        {SPICE}
        {SPICE}&nbsp; 5/5 Spice - Advanced + Stamina
      </SpiceHeader>
      <p>
        The single five star spice skate happens on the last day of the Spicy Salmon Roll, c rossing
        both floating bridges and covering many miles.
      </p>

      <p>
        Five star spice skates involve high speed hill bombs of up to 30-40mph, and long distances
        of up to 30 miles total. These skates absolutely require speed control techniques on hills
        at high speed such as snowplow, strong t-stop at speed, magic slides, etc. There will be
        numerous hills to climb as well as bomb down so stamina is important. Be prepared for any
        surface, traffic, and obstacles.
      </p>

      <SpiceHeader>General Info</SpiceHeader>
      <p>
        Each skate will have marshals who will guide the group through each route and be sure
        everybody is safe and on track.
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
  return <h3 className="text-m mbd bold">{children}</h3>;
};
