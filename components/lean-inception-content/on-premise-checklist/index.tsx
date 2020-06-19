import React, { ReactElement } from "react";
import Download from "../../download";
import styles from "../leaninceptioncontent.module.scss";

function OnPremiseChecklist(): ReactElement {
  return (
    <>
      <div className={styles.row}>
        <h3>Pre-work for the workshop</h3>
        <div className={styles.rowcontent}>
          <h4>Emails</h4>
          <ul>
            <li>
              <p>
                Send an email to all participants, stakeholders and active team members, explaining the Lean Inception.
              </p>
            </li>
            <li>
              <p>
                Send an email outlining the Lean Inception agenda, the activities description, participants
                (stakeholders and active team members).
              </p>
            </li>
            <li>
              <p>Send an email with additional information about the facilitator role.</p>
            </li>
          </ul>
        </div>
        <div className={styles.rowcontent}>
          <h4>Logistics</h4>
          <ul>
            <li>
              <p> Sort out travel arrangements.</p>
            </li>
            <li>
              <p>Pre-order required materials (Lean inception posters, flipcharts, post-its, sharpies).</p>
            </li>
            <li>
              <p>Answer all received questions about the workshop, its intention, and agenda.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.row}>
        <h3>During the workshop</h3>
        <div className={styles.rowcontent}>
          <h4>Room</h4>
          <ul>
            <li>
              <p>The room has enough place (wall, table, rolling board, etc) to put the posters and post-its.</p>
            </li>
            <li>
              <p>The room has a projector or a TV for the participants to share something from their laptops.</p>
            </li>
            <li>
              <p>The room has a place (whiteboard, flipchart), where the participates can write and draw diagrams.</p>
            </li>
            <li>
              <p>The room has chairs for everyone (rolling preferably).</p>
            </li>
            <li>
              <p>
                The room has coffee, water, and food freely available to the participants (brainstorming session are
                tiring - breaks, beverages and light food are highly recommended).
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Download href="/lean-inception-checklist.pdf" />
    </>
  );
}

export default OnPremiseChecklist;
