interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => (
  <h3 className="text-xl font-semibold font-heading mt-3 mb-4 underline">{children}</h3>
);

export default Heading;
