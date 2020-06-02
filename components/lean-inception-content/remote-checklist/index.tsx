import React, { ReactElement } from "react";

function RemoteChecklist(): ReactElement {
  return (
    <div>
      <h3>Pre-work for the remote workshop</h3>
      <ul>
        <li>
          The facilitator has sent the email (to all participants – stakeholders and active team members) explaining the
          Lean Inception.
        </li>
        <li>
          The facilitator has sent the email outlining the Lean Inception agenda, the activities description, and the
          participants (stakeholders and active team members).
        </li>
        <li>
          The facilitator has sent the email with more information about the facilitator role, in the remote settings.
        </li>
        <li> Remote tools access has been sorted out.</li>
        <li>
          Prepared the required remote artifacts (online board with the Lean inception template, communication channels,
          online ice-breaks activities, template for consolidated material).
        </li>
        <li>
          The facilitator has answered all received questions about the remote workshop, its intention and agenda.
        </li>
      </ul>

      <h3>During the remote workshop</h3>
      <ul>
        <li>
          All participants are familiar with the remote tools (adding and moving virtual post-it, remote group
          interactions, material consolidation)
        </li>
        <li> The group stablishes the ground rules for the workshop</li>
        <li>
          The group defines the What-Ifs for their specific workshop (e.g. what is this tool goes down? What if the
          facilitator loses connection?)
        </li>
        <li>
          The online board has working areas where the participates can brainstorm before consolidating any specific
          activity result (activity result artefact)
        </li>
        <li>Short breaks, long breaks (for having meals), stretching sessions and ice-breaks are part of the agenda</li>
      </ul>
    </div>
  );
}

export default RemoteChecklist;
