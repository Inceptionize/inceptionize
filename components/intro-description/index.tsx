import React, { ReactElement } from "react";

interface IntroDescriptionProps {
  text: string;
}

function IntroDescription({ text }: IntroDescriptionProps): ReactElement {
  return <div>{text}</div>;
}

export default IntroDescription;
