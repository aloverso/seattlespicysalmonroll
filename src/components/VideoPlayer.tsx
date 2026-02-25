import React, { useEffect, useRef, useState } from "react";

const VIDEOS = [
  "https://stream.mux.com/M01ORFBdJfBOF2wUiDkvRgaYlwjTkzelPiiHD75t71P00?max_resolution=720p",
  "https://stream.mux.com/4ERzmVgRy731XvZbaA01e7YKgGTaOhu8sRptFnqTnBLk?max_resolution=720p",
  "https://stream.mux.com/NuOMGMRvlhcCrhYXg35FpHayztEtQjPtMU22h7zTsFs?max_resolution=720p",
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
  "https://stream.mux.com/45hQv1011PP401sVDaoWfQHtD502hrtOpoonIW6XG6JEwY?max_resolution=720p",
  "https://stream.mux.com/Vogck01YqzxRuKnDRgT1A3GtgI00P1u2BrjLwhKVxhRE8?max_resolution=720p",
  "https://stream.mux.com/XaxqAFR3Ql00NST2AQSh6eRMrAcwWDbQ9z5sCccy2wKs?max_resolution=720p",
  "https://stream.mux.com/00Ku1VfaO3801htJWhnZ02jIJdR00d01n5aGxkUDZBX2vsww?max_resolution=720p",
  "https://stream.mux.com/tIqIf7UwdeRxM1uf25dr3fWMG15wh66Hn5KhbE3gprU?max_resolution=720p",
  "https://stream.mux.com/RKZdRnLBhi4SbuxpDqnD9HXVzj5UmQ01UV27cU00e02eaI?max_resolution=720p",
  "https://stream.mux.com/01MMmiddj4Ral02Ph0201Hv00fJ6dByvTKqMl700IHQQVS8b4?max_resolution=720p",
  "https://stream.mux.com/pnfhABN4Hr015PxvgEVzJW3Ykq00ZaVSqcRQ02g6El02ajw?max_resolution=720p",
  "https://stream.mux.com/IbLo1008siVSrv1wGkjtt02FghpVujUiYkXtuv4hkfv5k?max_resolution=720p",
  "https://stream.mux.com/ZwdYFn01Ys00yit9zlisCtgPaAD5rQBDeKFy68Z5FMIsc?max_resolution=720p",
  "https://stream.mux.com/zVFJAqBGObiCuzyBbxo4hcrAuDy6br9tK5U2vQRMhAo?max_resolution=720p",
  "https://stream.mux.com/ZKIS00M9teIoSCEM009elMjxTc4vqabLuv9ph01sCCFWSc?max_resolution=720p",
  "https://stream.mux.com/5HB5pvsGIcTwI5vkGEMMY6ZwXnC13bpQ37F16R6M5jE?max_resolution=720p",
  "https://stream.mux.com/MlolJSfbnvM2ty8wtbYvwvjkDu13O01sp8teUlw01Ejho?max_resolution=720p",
  "https://stream.mux.com/qzCgxzA5q2PjDqRjfTHWdLI3X1qdekdg2ugDgsjtqIo?max_resolution=720p",
  "https://stream.mux.com/a2wFxOE2FN5F2Q00XB00xQGdHPD1RCJjJhJJhCv6NpBSI?max_resolution=720p",
  "https://stream.mux.com/00XkcYDh1YldKNve8o79nVS4w24gMG00YxtRA2EA01jIYM?max_resolution=720p",
  "https://stream.mux.com/bkCNBfJSc02xJbdT029vd00uqJpuzeHfEnyyfTt01rqGpRk?max_resolution=720p",
  "https://stream.mux.com/4I3EU1a46eM024W89aTzCqFZPpkiQ9Hd00UTCph020200Yac?max_resolution=720p",
  "https://stream.mux.com/1e6lswZ6j6QjFMU3c00qcEkAl8is1DWhivZdeV3p3cjk?max_resolution=720p",
  "https://stream.mux.com/9z3nB202FjG8902wtPejiw02JU102MLBneyBVAofT7L749s?max_resolution=720p",
  "https://stream.mux.com/rZQkHC4JyBWwySLRhmip01Bchyfin4OynxbgsqV1x23Y?max_resolution=720p",
  "https://stream.mux.com/Yd401RTGyBLNitM8rppehS6yF2o02obLt4MjEwN4LdVyQ?max_resolution=720p",
  "https://stream.mux.com/s6bLEeDeG6VqsjCA8m3hjA41H75p6QP00DzQ151OGReY?max_resolution=720p",
  "https://stream.mux.com/FMw8d30202NAwCCokIdZ8eB8l5KEgaEY7h01S87ggn3kro?max_resolution=720p",
  "https://stream.mux.com/WHacQC4EFCr01AlEhvlo02O1KLfmVctN0088amo00xH3etw?max_resolution=720p",
  "https://stream.mux.com/ySOc00gYbuXDjt1clDLInfftGHhJgy028pN7jUVJ2vJV4?max_resolution=720p",
  "https://stream.mux.com/02ujTbm64RzuZmUGEU502Ic98XeAGAxhjlL7vT8MziK9Q?max_resolution=720p",
  "https://stream.mux.com/IuO21v9M02KYwM8wv9OES02YBFHa8yuJBTmPjv7XYUJvg?max_resolution=720p",
  "https://stream.mux.com/8RftwHYHs3EywfO00QGom5sNbqt02aMVVthgkA8N9EP9c?max_resolution=720p",
  "https://stream.mux.com/ClxhU5F2Tm01jA5k12UBWQk7ktdDoobrT02LjqMrgCVdo?max_resolution=720p",
  "https://stream.mux.com/W77n7fqv5ON02ti01KYE1gwn9iJ014spYdzbrenLrv02i400?max_resolution=720p",
]


export const VideoPlayer = () => {

  const [indexA, setIndexA] = useState(Math.floor(Math.random() * VIDEOS.length));
  const [indexB, setIndexB] = useState(Math.floor(Math.random() * VIDEOS.length));
  const [fading, setFading] = useState(false);
  const [activeIsA, setActiveIsA] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

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

  function togglePause() {
    if (!isPaused) {
      setIsPaused(true);
      if (refA.current) refA.current.pause();
      if (refB.current) refB.current.pause();
    } else {
      setIsPaused(false)
      if (activeIsA) {
        if (refA.current) refA.current.play();
        if (refB.current) refB.current.load();
      } else {
        if (refA.current) refA.current.load();
        if (refB.current) refB.current.play();
      }
    }
  }

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
      <button className="button pause-video" onClick={togglePause}>
        {isPaused ? "play" : "pause"} video
      </button>
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