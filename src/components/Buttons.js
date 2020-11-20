import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  small: () => ` 
    font-size: ${typeScale.helperText}
    padding: 8px;
  `,

  large: () => ` 
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,

  warning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted},
    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover},
      outline: 3px solid ${props.theme.status.warningColorHover},
      
    }

    &:active { 
      background-color: ${props.theme.status.warningColorActive}
    }
  `,

  secondaryButtonWarning: ({ props }) => `
    background: none;
    border: 2px solid ${props.theme.status.warningColor};
    color: ${props.theme.status.warningColor};
  `,

  tertiaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
  
  `,

  primaryButtonError: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
  `,

  secondaryButtonError: ({ props }) => `
    background: none;
    border: 2px solid ${props.theme.status.errorColor};
    color: ${props.theme.status.errorColor}; 
  `,

  tertiaryButtonError: ({ props }) => `
    background: none;
    color: ${props.theme.status.errorColor}
  `,
  error: ({ props }) => `
  background: none;
  color: ${props.theme.status.errorColor};
  &:hover, &:focus {
    background-color: ${props.theme.status.errorColorHover};
    outline: 3px solid ${props.theme.status.errorColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }
  &:active {
    background-color: ${props.theme.status.errorColorActive};
  }
`,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  /* css goes here */
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: #fff;
  padding: 12px 24px;
  font-size: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
  &:disabled {
    background: ${defaultTheme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    border-color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${(props) => props.theme.primaryColor};
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
