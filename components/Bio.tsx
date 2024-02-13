import React from "react";
import styled from "@emotion/styled";

interface BioYearProps {
  children: React.ReactNode;
}

export const BioSection = styled.div`
  padding-left: 3.5rem;
  text-indent: -3.5rem;
`;

export const BioYear = ({ children }: BioYearProps) => {
  return <span className="font-bold mr-4">{children}</span>;
};
