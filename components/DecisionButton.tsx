/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  text: string;
}

function Button({ href, text }: ButtonProps): ReactElement {
  return (
    <Link href={href} passHref>
      <a>
        <button>{text}</button>
      </a>
    </Link>
  );
}

export default Button;
