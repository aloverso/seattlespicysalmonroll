import React, { ReactElement } from "react";
import { UpdateMessage } from "../domain/types";
import dayjs from "dayjs";

interface Props {
  update: UpdateMessage;
}

export const Update = (props: Props): ReactElement => {
  return (
    <div className="brad bg-white-overlay pad mvs text-black ">
      <div className="text-s mbs">{dayjs(props.update.timestamp).format("h:mm A M/D/YY")}</div>
      <div>{props.update.message}</div>
    </div>
  );
};
