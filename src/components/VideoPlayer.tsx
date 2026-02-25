import React, { useEffect, useRef, useState } from "react";

const VIDEOS = [
  "https://stream.mux.com/NuOMGMRvlhcCrhYXg35FpHayztEtQjPtMU22h7zTsFs?max_resolution=720p",
  "https://stream.mux.com/4ERzmVgRy731XvZbaA01e7YKgGTaOhu8sRptFnqTnBLk?max_resolution=720p",
  "https://stream.mux.com/VFkQf2i8OhcQVRLrfD3PdZXLEsnOoSN402KgDDqZscQM?max_resolution=720p",
  "https://stream.mux.com/YxX3Vd50200OOH7W02I00UHULGuN8t592dgWxI008HJgpQpQ?max_resolution=720p",
  "https://stream.mux.com/iJQBXtFN02B2aH6mUY8ZkdV6KnLCTPh5PVlwFufVcRQg?max_resolution=720p",
  "https://stream.mux.com/nUG5mFttoL2CYwAwPDdkkkA6Ab01TL1vt9EdVaDWKQlY?max_resolution=720p",
  "https://stream.mux.com/NFNVTZr01PQH01HqL1vm3LteP2B027iBa00jCq9JUV1lcnI?max_resolution=720p",
  "https://stream.mux.com/x1BmaBqF00zPESMvFDpPFIkgnuY5x7r027GjASXOY5du8?max_resolution=720p",
  "https://stream.mux.com/pDmJSq2vIza73otH8L014MV8wtz9EhdmW4FUNK02Qse02s?max_resolution=720p",
  "https://stream.mux.com/ulCOE95pK2RLTHLZAYvbtJCOU01n3mQ00toSoo7m2dvv00?max_resolution=720p",
  "https://stream.mux.com/cGS57025PlltgH006rzijg6FIodDqdeapoTWGTYlV01IcE?max_resolution=720p",
  "https://stream.mux.com/rY02RlaRQGd7IyAVVT9AXEaELhxBcU13l9IrNRHmBEIw?max_resolution=720p",
  "https://stream.mux.com/fQolJKNxgDsgYF8HAMI5Ae3vsxrkKMJzUk7O01Cu02Kk00?max_resolution=720p",
  "https://stream.mux.com/2Msy4rjapcVeKhFuEacp02wv53PLW9zqrI6SJHBbf56A?max_resolution=720p",
  "https://stream.mux.com/65t2Jf200nOzJgUOLHJ8WNbxasDEzypT2C86GXw9xBDo?max_resolution=720p",
  "https://stream.mux.com/aSUYficeQgFAJnrYuSDnCxMf11ENS00Nfezp1QkabCvo?max_resolution=720p",
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

  function handleTimeUpdate(e: React.SyntheticEvent<HTMLVideoElement>) {
    const video = e.currentTarget;
    if (!video.duration) return;
    const timeLeft = video.duration - video.currentTime;
    if (timeLeft <= 1) {
      handleVideoEnd();
    }
  }

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
      const randomNextIndex = Math.floor(Math.random() * VIDEOS.length)

      if (activeIsA && refA.current) {
        setIndexA(randomNextIndex);
        refA.current.src = VIDEOS[randomNextIndex];
        refA.current.load();
        setActiveIsA(false)
      } else {
        setIndexB(randomNextIndex);
        if (refB.current) {
          refB.current.src = VIDEOS[randomNextIndex];
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
        onTimeUpdate={handleTimeUpdate}
      />
      <video
        ref={refB}
        className={activeIsA ? (fading ? "active" : "") : (fading ? "" : "active")}
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="video-overlay"></div>
    </>
  )
}