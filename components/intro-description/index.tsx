import React, { ReactElement, ReactNode } from "react";

interface IntroDescriptionProps {
  children: ReactNode;
}

function IntroDescription({ children }: IntroDescriptionProps): ReactElement {
  return <div>{children}</div>;
}

export default IntroDescription;
