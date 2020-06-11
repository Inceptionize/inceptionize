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
                The facilitator has sent the email (to all participants – stakeholders and active team members)
                Inception.
              </p>
            </li>
            <li>
              <p>The facilitator has sent the email with more information about the facilitator role.</p>
            </li>
            <li>
              <p>
                The facilitator has sent the email outlining the Lean Inception agenda, the activities description,
                participants (stakeholders and active team members).
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.rowcontent}>
          <h4>Logistics</h4>
          <ul>
            <li>
              <p>Travel arrangements have been sorted out.</p>
            </li>
            <li>
              <p>
                Pre-order of required materials (Lean inception posters, flipchart, post-it, sharpie) have been made.
              </p>
            </li>
            <li>
              <p>The facilitator has answered all received questions about the workshop, its intention and agenda.</p>
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
              <p> The room has a projector or a TV for the participants to share something from their laptops.</p>
            </li>
            <li>
              <p>
                The room has a place (whiteboard, flipchart, etc) where the participates can write and draw diagrams.
              </p>
            </li>
            <li>
              <p> The room has chairs for everyone (rolling preferably).</p>
            </li>
            <li>
              <p>
                Coffee, water and food are freely available to the participants (brainstorming session are tiring
                breaks, beverages and light food are highly recommended).
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
