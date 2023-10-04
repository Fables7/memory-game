import styled from "styled-components";

interface StyledCustomButtonProps {
  active?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

const shouldForwardProp = (prop: string) =>
  !["active", "primary", "secondary"].includes(prop);

export const StyledCustomButton = styled.button.withConfig({
  shouldForwardProp,
})<StyledCustomButtonProps>`
  background: ${(props) =>
    props.active
      ? "var(--menu-active)"
      : props.primary
      ? "var(--orange-accent)"
      : props.secondary
      ? "var(--light-gray)"
      : "var(--idle)"};
  color: ${(props) => props.secondary && "var(--menu-active)"};
  &:hover {
    background: ${(props) =>
      props.primary ? "var(--orange-hover)" : "var(--hover)"};
    color: ${(props) => props.secondary && "white"};
  }
`;
