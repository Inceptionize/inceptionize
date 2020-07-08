import React, { ReactElement } from "react";
import Layout from "../components/layout";
import AgendaContent from "../components/agenda-content";

function Agenda(): ReactElement {
  return (
    <Layout>
      <AgendaContent />
    </Layout>
  );
}

export default Agenda;
