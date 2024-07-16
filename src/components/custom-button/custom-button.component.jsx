import { Button } from "../../styles/buttons/buttons.styles";

const CustomButton = ({ children, ...otherProps }) => (
  <YellowGreen {...otherProps}>{children}</YellowGreen>
);

export default CustomButton;
