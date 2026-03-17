"use client";

import Link, { type LinkProps } from "next/link";
import { forwardRef } from "react";

type Props = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkComponent = forwardRef<HTMLAnchorElement, Props>(
  function LinkComponent(props, ref) {
    return <Link ref={ref} {...props} />;
  },
);

export default LinkComponent;
