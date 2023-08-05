import { ReactElement } from "react";

type HeaderProps = { title: string };

const Header = ({ title }: HeaderProps): ReactElement => {
  return <h1>{title}</h1>;
};

export default Header;
