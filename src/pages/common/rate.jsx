import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rcrate from "rc-rate";
import "rc-rate/assets/index.css";
import { getRates, loadRates } from "../../store/rates";

/**
 * Input : user id
 * Output: Rate comp with avarage star and number of reviews
 */
function Rate({ rates }) {
  return (
    <div>
      <Rcrate
        value={
          rates &&
          rates.reduce((total, next) => total + next.rating, 0) / rates.length
        }
        disabled={true}
      />
      {`(${rates && rates.length})`}
    </div>
  );
}

export default Rate;
