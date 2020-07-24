import React, { useState, ReactNode } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../styles/expander.css";

export type ExpanderProps = {
  title: string;
  children: ReactNode;
};

export default function Expander({ title, children }: ExpanderProps) {
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = () => setExpanded(state => !state);

  return (
    <div className="expander">
      <h3 className={expanded ? `expander-header` : `expander-header expander-header-hide`} onClick={toggleExpanded}>
        <span className="expander-header-hashtag">#</span>
        {title}
        <span className="expander-status">{expanded ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
      </h3>
      <div className={expanded ? `expander-body` : `expander-body expander-body-hide`}>{children}</div>
    </div>
  );
}
