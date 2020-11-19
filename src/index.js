import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';
import { GlobalStyle } from './utils';

const App = () => (
  <div>
    <PrimaryButton>Hello World</PrimaryButton>
    <SecondaryButton>Goodbye World</SecondaryButton>
    <TertiaryButton>Hi World</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
