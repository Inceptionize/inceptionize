import React, { ReactElement } from "react";
import Download from "../../download";

function OnPremiseChecklist(): ReactElement {
  return (
    <div>
      <h3>Pre-work for the workshop</h3>
      <ul>
        <li>
          The facilitator has sent the email (to all participants – stakeholders and active team members) explaining the
          Lean Inception.
        </li>
        <li>
          The facilitator has sent the email outlining the Lean Inception agenda, the activities description, and the
          participants (stakeholders and active team members).
        </li>
        <li>The facilitator has sent the email with more information about the facilitator role.</li>
        <li>Travel arrangements have been sorted out.</li>
        <li>Pre-order of required materials (Lean inception posters, flipchart, post-it, sharpie) have been made.</li>
        <li>The facilitator has answered all received questions about the workshop, its intention and agenda.</li>
      </ul>

      <h3>During the workshop</h3>
      <ul>
        <li>The room has enough place (wall, table, rolling board, etc) to put the posters and post-its</li>
        <li> The room has a projector or a TV for the participants to share something from their laptops</li>
        <li> The room has a place (whiteboard, flipchart, etc) where the participates can write and draw diagrams.</li>
        <li> The room has chairs for everyone (rolling preferably)</li>
        <li>
          Coffee, water and food are freely available to the participants (brainstorming session are tiring breaks,
          beverages and light food are highly recommended).
        </li>
      </ul>
      <Download href="/lean-inception-checklist.pdf" />
    </div>
  );
}

export default OnPremiseChecklist;
