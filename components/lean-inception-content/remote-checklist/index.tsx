import React, { ReactElement } from "react";
import Download from "../../download";

function RemoteChecklist(): ReactElement {
  return (
    <div>
      <h3>Pre-work for the remote workshop</h3>
      <ul>
        <li>
          <p>
            The facilitator has sent the email (to all participants – stakeholders and active team members) explaining
            the Lean Inception.
          </p>
        </li>
        <li>
          <p>
            The facilitator has sent the email outlining the Lean Inception agenda, the activities description, and the
            participants (stakeholders and active team members).
          </p>
        </li>
        <li>
          <p>
            The facilitator has sent the email with more information about the facilitator role, in the remote settings.
          </p>
        </li>
        <li>
          <p> Remote tools access has been sorted out.</p>
        </li>
        <li>
          <p>
            Prepared the required remote artifacts (online board with the Lean inception template, communication
            channels, online ice-breaks activities, template for consolidated material).
          </p>
        </li>
        <li>
          <p>
            The facilitator has answered all received questions about the remote workshop, its intention and agenda.
          </p>
        </li>
      </ul>

      <h3>During the remote workshop</h3>
      <ul>
        <li>
          <p>
            All participants are familiar with the remote tools (adding and moving virtual post-it, remote group
            interactions, material consolidation).
          </p>
        </li>
        <li>
          <p>The group stablishes the ground rules for the workshop.</p>
        </li>
        <li>
          <p>
            The group defines the What-Ifs for their specific workshop (e.g. what is this tool goes down? What if the
            facilitator loses connection?)
          </p>
        </li>
        <li>
          <p>
            The online board has working areas where the participates can brainstorm before consolidating any specific
            activity result (activity result artefact).
          </p>
        </li>
        <li>
          <p>
            Short breaks, long breaks (for having meals), stretching sessions and ice-breaks are part of the agenda.
          </p>
        </li>
      </ul>
      <Download href="/remote-lean-inception-checklist.pdf" />
    </div>
  );
}

export default RemoteChecklist;
