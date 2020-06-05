import React, { ReactElement, useContext } from "react";
import Layout from "../components/layout";
import DecisionButton from "../components/decision-button";
import { AppContext } from "../components/context/app-context";

function Remote(): ReactElement {
  const { dispatch } = useContext(AppContext);

  return (
    <Layout>
      <h2>Is your inception remote or on-premise?</h2>
      <DecisionButton
        href="/choice"
        text="Remote"
        onClick={(): void => {
          dispatch({ type: "SET_REMOTE_STATUS", payload: { isRemote: true } });
        }}
      />
      <DecisionButton
        href="/choice"
        text="On-premise"
        onClick={(): void => {
          dispatch({ type: "SET_REMOTE_STATUS", payload: { isRemote: false } });
        }}
      />
    </Layout>
  );
}

export default Remote;
