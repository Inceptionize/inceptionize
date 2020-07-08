import React, { ReactElement } from "react";

function ActivitiesOverview(): ReactElement {
  return (
    <div data-testid="activities-overview">
      <ul>
        <li>
          Kick-off - The kickoff session serves to guide the participants with the business reasons and its relationship
          with the main objectives of the project and product. This initial communication allows all participants to
          have an overview and a common understanding of what should be achieved. After the conversation about the
          initiative, the inception facilitator will share the inception agenda.
        </li>
        <li>
          Product Vision - Understanding the need of the product will lead the following activities. All starts with a
          common vision, written together, by all team members.
        </li>
        <li>
          Product Objectives (Is – Is not) - Each active team member will share what they understand about the product
          goals. This should be discussed in order for the team to reach a consensus on what is really important.
        </li>
      </ul>
    </div>
  );
}

export default ActivitiesOverview;
