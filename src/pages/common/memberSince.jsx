import React from "react";
import moment from "moment";

function MemberSince({ date }) {
  return (
    <div>
      Member Since: <b>{moment(date).format("DD/MM/YY")}</b>
    </div>
  );
}

export default MemberSince;
