import React, { ReactElement, useEffect, useState } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";

const Updates = (): ReactElement => {

  const [updates, setUpdates] = useState<string[]>([])

  useEffect(() => {
    fetch('/api/getstore')
      .then(response => {
        response.json().then((json) => {
          setUpdates(json)
        })
      })
  }, [])

  return (
    <div className="bg-theme">
      <header>
        <NavBar active="" />
      </header>
      <main className="container mtxl">
        <h1 className="text-xxl font-lilita mbd">Updates</h1>
        <div className="col-md-8 bg-white">
          {updates.map((update,i) => (
            <div key={i}>
              {update}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
    ;
};

export default Updates;
