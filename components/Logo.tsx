import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import OctpusIcon from "./icons/OctopusIcon";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <OctpusIcon />
        <span className="ml-3 font-bold font-heading dark:text-white text-gray-800">
          Yuichi Nakamura
        </span>
      </LogoBox>
    </Link>
  );
};

export default Logo;
