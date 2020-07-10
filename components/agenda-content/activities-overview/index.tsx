import React, { ReactElement } from "react";
import styles from "./activities-overview.module.scss";

function ActivitiesOverview(): ReactElement {
  return (
    <div>
      <h2><strong>Lean Inception Activities</strong></h2>
      <div data-testid="activities-overview" className={styles.cards}>
        <div className={styles.card}>
          <h3>Introductions</h3>
          <p>
            Let's get to know each other (personal facts skill level, past papers, current functions , teams, etc. )
            before entering deeper into the inception activities
          </p>
        </div>
        <div className={styles.card}>
          <h3>Kick-off</h3>
          <p>
            The kickoff session serves to guide the participants with the business reasons and its relationship with the
            main objectives of the project and product. This initial communication allows all participants to have have
            an overview and a common understanding of what should be achieved. After the conversation about the
            initiative, the inception facilitator will share the inception agenda.
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
        <div className={styles.card}>
          <h3>Personas</h3>
          <p>
            To effectively identify the features of a system , we consider important to keep in mind the users and their
            goals. The way that we normally use to represent these users is through personas.
          </p>
        </div>
        <div className={styles.card}>
          <h3>User journeys</h3>
          <p>
            The user journey describes a user's path through a sequence of steps to achieve a goal . Some of these steps
            represent different points of contact with the product , featuring user interaction with it.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Features Brainstorming</h3>
          <p>
            Feature is a description of an action or user interaction with the product. For example: print invoice, see
            detailed statement, and invite facebook friends. The description of a feature should be as simple as
            possible. The user is trying to do something. The product should have a feature to allow it. Which feature
            is it?
          </p>
        </div>
        <div className={styles.card}>
          <h3>Technical, UX and Business Review</h3>
          <p>
            Let's verify how the team feels about the technical understanding, the business expectations and the user
            desire for each feature, as well as the effort and perceived value associated with it.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Feature sequencer</h3>
          <p>
            Let´s take a look at all product features. Let´s consider the personas and its journeys. It´s time to draw
            up a delivery plan, consistent with the concept of MVP.
          </p>
        </div>
        <div className={styles.card}>
          <h3>MVP Canvas</h3>
          <p>
            We´ll create a canvas, which will make clear the MVP proposal, the assumptions of the business, the
            collected metrics, the features, the personas and their journeys, and the cost and schedule for delivery of
            the same.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Showcase</h3>
          <p>
            At the end of the week, and after fulfilling all the planned activities, we will share with all the people
            involved in the project (including stalehoolders) the results obtained throughout the inception.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesOverview;
