import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.typing.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
    color:${theme.colors.typing.blue}
`;

const error = (theme) => `
    color: ${theme.colors.typing.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;
const title = (theme) => `
     font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
`;
const big = (theme) => `
     font-size: ${theme.fontSizes.h4};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  label,
  caption,
  error,
  hint,
  body,
  title,
  big
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
    color: ${(props) => props.theme.colors.textColor};
  padding-right: ${(props) => props.theme.space[2]};
`;

Text.defaultProps = {
  variant: "body"
};
