import React, { useEffect, useRef, useState } from "react";

const VIDEOS = [
  "https://stream.mux.com/O9lf025TeKLvg8xzMUx7nWpdSYB02OJsCSJsPkCQcwSVc.m3u8",
  "https://stream.mux.com/02nWac25JxvSTO20201wKLx8ZUR7g02S1pddLIiRZH01e902k.m3u8",
]

export const VideoPlayer = () => {

  const [indexA, setIndexA] = useState(0);
  const [indexB, setIndexB] = useState(1);
  const [fading, setFading] = useState(false);
  const [activeIsA, setActiveIsA] = useState(true);

  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (refA.current) {
      refA.current.src = VIDEOS[indexA];
      refA.current.play();
    }
    if (refB.current) {
      refB.current.src = VIDEOS[indexB];
      refB.current.load();
    }
  }, []);

  function handleVideoEnd() {
    if (fading) return;
    setFading(true);

    // Play the preloaded next video
    if (activeIsA) {
      if (refB.current) refB.current.play();
    } else {
      if (refA.current) refA.current.play();
    }

    // After fade completes, swap active/next and preload the one after
    setTimeout(() => {
      const newNext = indexB + 1 >= VIDEOS.length ? 0 : indexB + 1

      if (activeIsA && refA.current) {
        setIndexA(newNext);
        refA.current.src = VIDEOS[newNext];
        refA.current.load();
        setActiveIsA(false)
      } else {
        setIndexB(newNext);
        if (refB.current) {
          refB.current.src = VIDEOS[newNext];
          refB.current.load();
        }
        setActiveIsA(true)
      }

      setFading(false);
    }, 1600);
  }

  return (
    <>
      <video
        ref={refA}
        className={activeIsA ? (fading ? "" : "active") : (fading ? "active" : "")}
        muted
        playsInline
        onEnded={handleVideoEnd}
      />
      <video
        ref={refB}
        className={activeIsA ? (fading ? "active" : "") : (fading ? "" : "active")}
        muted
        playsInline
        onEnded={handleVideoEnd}
      />
    </>
  )
}