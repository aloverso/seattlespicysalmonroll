import React, { ReactElement, useEffect, useState } from "react";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";
import { UpdateMessage } from "../src/domain/types";
import dayjs from "dayjs";

const Updates = (): ReactElement => {

  const [updates, setUpdates] = useState<UpdateMessage[]>([])

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
          {updates.map((update) => (
            <div key={update.id}>
              <div>{dayjs(update.timestamp).format('MM/DD/YY h:mm:ss')}</div>
              <div>{update.message}</div>
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
