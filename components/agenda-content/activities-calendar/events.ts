export interface EventConfig {
  title: string;
  desc: string;
  day: number;
  start: number;
  end: number;
}

export interface CalendarEvent {
  id: number;
  title: string;
  desc: string;
  start: Date;
  end: Date;
}

export default {
  getEvents: (): EventConfig[] => {
    return [
      {
        title: "Introductions",
        day: 1,
        start: 9,
        end: 9.75,
        desc: `Let's get to know each other (personal facts skill level, past papers, current functions , teams, etc. )
        before entering deeper into the inception activities`,
      },
      {
        title: "Kick-off",
        day: 1,
        start: 10,
        end: 12,
        desc: `The kickoff session serves to guide the participants with the business reasons and its relationship with the
        main objectives of the project and product. This initial communication allows all participants to have have
        an overview and a common understanding of what should be achieved. After the conversation about the
        initiative, the inception facilitator will share the inception agenda.`,
      },
      {
        title: "Product Vision",
        day: 1,
        start: 13,
        end: 16,
        desc: `Understanding the need of the product will lead the following activities. All starts with a common vision,
        written together, by all team members.`,
      },
      {
        title: "Product Objectives",
        day: 2,
        start: 9,
        end: 12,
        desc: `Each active team member will share what they understand about the product goals. This should be discussed in
        order for the team to reach a consensus on what is really important.`,
      },
      {
        title: "Personas",
        day: 2,
        start: 13,
        end: 16,
        desc: `To effectively identify the features of a system , we consider important to keep in mind the users and their
        goals. The way that we normally use to represent these users is through personas.`,
      },
      {
        title: "User journeys",
        day: 3,
        start: 9,
        end: 12,
        desc: `The user journey describes a user's path through a sequence of steps to achieve a goal . Some of these steps
        represent different points of contact with the product , featuring user interaction with it.`,
      },
      {
        title: "Features Brainstorming",
        day: 3,
        start: 13,
        end: 16,
        desc: `Feature is a description of an action or user interaction with the product. For example: print invoice, see
        detailed statement, and invite facebook friends. The description of a feature should be as simple as
        possible. The user is trying to do something. The product should have a feature to allow it. Which feature
        is it?`,
      },
      {
        title: "Technical, UX and Business Review",
        day: 4,
        start: 9,
        end: 12,
        desc: `Let's verify how the team feels about the technical understanding, the business expectations and the user
        desire for each feature, as well as the effort and perceived value associated with it.`,
      },
      {
        title: "Feature sequencer",
        day: 4,
        start: 13,
        end: 16,
        desc: `Let´s take a look at all product features. Let´s consider the personas and its journeys. It´s time to draw
        up a delivery plan, consistent with the concept of MVP.`,
      },
      {
        title: "MVP Canvas",
        day: 5,
        start: 9,
        end: 12,
        desc: `We´ll create a canvas, which will make clear the MVP proposal, the assumptions of the business, the
        collected metrics, the features, the personas and their journeys, and the cost and schedule for delivery of
        the same.`,
      },
      {
        title: "Showcase",
        day: 5,
        start: 13,
        end: 16,
        desc: `At the end of the week, and after fulfilling all the planned activities, we will share with all the people
        involved in the project (including stalehoolders) the results obtained throughout the inception.`,
      },
    ];
  },
};
