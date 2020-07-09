import React, { ReactElement } from "react";
import styles from "./activities-overview.module.scss";

function ActivitiesOverview(): ReactElement {
  return (
    <div data-testid="activities-overview" className={styles.cards}>
      <div className={styles.card}>
        <h3>Kick-off</h3>
        <p>
          The kickoff session serves to guide the participants with the business reasons and its relationship with the
          main objectives of the project and product. This initial communication allows all participants to have have an
          overview and a common understanding of what should be achieved. After the conversation about the initiative,
          the inception facilitator will share the inception agenda.
        </p>
      </div>
      <div className={styles.card}>
        <h3>Product Vision</h3>
        <p>
          Understanding the need of the product will lead the following activities. All starts with a common vision,
          written together, by all team members.
        </p>
      </div>
      <div className={styles.card}>
        <h3>Product Objectives</h3>
        <p>
          Each active team member will share what they understand about the product goals. This should be discussed in
          order for the team to reach a consensus on what is really important.
        </p>
      </div>
    </div>
  );
}

export default ActivitiesOverview;
