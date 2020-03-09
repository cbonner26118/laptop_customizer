import React from "react";
import SummaryList from "../SummaryList/SummaryList";
import Total from "../Total/Total";

export default function MainSummary(props) {
  return (
    <section className='main__summary'>
      <h2>Your cart</h2>
      <SummaryList selected={props.selected} />
      <Total selected={props.selected} />
    </section>
  );
}
