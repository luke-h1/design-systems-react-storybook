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
    background-color: ${props.status.warningColor};
    color: ${props.textColorInverted},
    &:hover, &:focus {
      background-color: ${props.status.warningColorHover},
      outline: 3px solid ${props.status.warningColorHover},
      
    }

    &:active { 
      background-color: ${props.status.warningColorActive}
    }
  `,

  secondaryButtonWarning: ({ props }) => `
    background: none;
    border: 2px solid ${props.status.warningColor};
    color: ${props.status.warningColor};
  `,

  tertiaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.status.warningColor};
  
  `,

  primaryButtonError: ({ props }) => `
    background-color: ${props.status.errorColor};
    color: ${props.textColorInverted};
  `,

  secondaryButtonError: ({ props }) => `
    background: none;
    border: 2px solid ${props.status.errorColor};
    color: ${props.status.errorColor}; 
  `,

  tertiaryButtonError: ({ props }) => `
    background: none;
    color: ${props.status.errorColor}
  `,
  error: ({ props }) => `
  background: none;
  color: ${props.status.errorColor};
  &:hover, &:focus {
    background-color: ${props.status.errorColorHover};
    outline: 3px solid ${props.status.errorColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }
  &:active {
    background-color: ${props.status.errorColorActive};
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
    background-color: ${(props) => props.primaryHoverColor};
    color: ${(props) => props.textColorOnPrimary};
  }
  &:disabled {
    background: ${defaultTheme.disabled};
    color: ${(props) => props.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${(props) => props.primaryColor};
  color: ${(props) => props.primaryColor};
  &:hover {
    background-color: ${(props) => props.primaryHoverColor};
    color: ${(props) => props.textColorOnPrimary};
  }
  &:disabled {
    background: none;
    color: ${(props) => props.disabled};
    border-color: ${(props) => props.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${(props) => props.primaryColor};
  &:hover {
    background-color: ${(props) => props.primaryHoverColor};
    color: ${(props) => props.textColorOnPrimary};
  }
  &:disabled {
    background: none;
    color: ${(props) => props.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
