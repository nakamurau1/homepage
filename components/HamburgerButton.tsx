import React from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  toggle,
}) => {
  return (
    <button
      className="md:hidden ml-3 text-gray-800 dark:text-white focus:outline-none"
      onClick={toggle}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d={
            !isOpen
              ? "M4 6h16M4 12h16M4 18h16" /** ハンバーガー */
              : "M6 18L18 6M6 6l12 12" /** クローズ */
          }
        />
      </svg>
    </button>
  );
};

export default HamburgerButton;
