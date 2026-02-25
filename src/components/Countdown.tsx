import React, { useContext } from "react";
import { TimeUntilContext } from "../domain/TimeUntilContext";

export const Countdown = () => {

  const { isUpcoming, timeUntil } = useContext(TimeUntilContext)

  if (!isUpcoming) return <></>

  return (
    <div className="fdr hero-countdown fjc">
      <div className="fdc fac hero-countdown-item">
        <div className="hero-number">{timeUntil.day}</div>
        <div className="hero-label">{timeUntil.day === 1 ? "day" : "days"}</div>
      </div>
      <div className="fdc fac hero-countdown-item">
        <div className="hero-number">{timeUntil.hour}</div>
        <div className="hero-label">{timeUntil.hour === 1 ? "hour" : "hours"}</div>
      </div>
      <div className="fdc fac hero-countdown-item">
        <div className="hero-number">{timeUntil.minute}</div>
        <div className="hero-label">{timeUntil.minute === 1 ? "minute" : "minutes"}</div>
      </div>
    </div>
  )
}