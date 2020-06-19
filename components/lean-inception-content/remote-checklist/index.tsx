import React, { ReactElement } from "react";
import Download from "../../download";
import styles from "../leaninceptioncontent.module.scss";

function RemoteChecklist(): ReactElement {
  return (
    <div>
      <div className={styles.row}>
        <h3>Pre-work for the remote workshop</h3>
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
              <p>Send an email with additional information about the facilitator role, in the remote setting.</p>
            </li>
          </ul>
        </div>
        <div className={styles.rowcontent}>
          <h4>Remote Logistics</h4>
          <ul>
            <li>
              <p>Sort out access to remote tools.</p>
            </li>
            <li>
              <p>
                Prepare required remote artifacts (online board with the Lean inception template, communication
                channels, online ice-breaks activities, template for consolidated material).
              </p>
            </li>
            <li>
              <p>Answer all received questions about the remote workshop, its intention, and agenda.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.row}>
        <h3>During the remote workshop</h3>
        <div className={styles.rowcontent}>
          <h4>Process</h4>
          <ul>
            <li>
              <p>
                All participants are familiar with the remote tools (adding and moving virtual post-its, remote group
                interactions, and material consolidation).
              </p>
            </li>
            <li>
              <p>The group establishes the ground rules for the workshop.</p>
            </li>
            <li>
              <p>
                The group defines the What-Ifs for their specific workshop (e.g. what is this tool goes down? What if
                the facilitator loses connection?)
              </p>
            </li>
            <li>
              <p>
                The online board has working areas where the participates can brainstorm before consolidating any
                specific activity result (activity result artefact).
              </p>
            </li>
            <li>
              <p>
                The group decides on short breaks, long breaks (for having meals), stretching sessions, and whether
                ice-breakers are part of the agenda.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <Download href="/remote-lean-inception-checklist.pdf" />
    </div>
  );
}

export default RemoteChecklist;
