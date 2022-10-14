import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './_theme';
import { DatepickerDropdownGlobalStyle } from 'src/components/datepicker/datepicker.style';
import { SelectDropdownGlobalStyle } from '../components/forms/select/select.style';
import { CheckboxStyle } from '../components/forms/checkbox/checkbox.style';
import { ANTDropDownStyles } from '../components/button-drop-down/drop-down.style';
import { ModalWrapperStyles } from '../components/modal/modal.styles';

export const bodyStyles = css`
	min-width: 100%;
	min-height: 100vh;
	overflow-y: auto;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
	font-family: SofiaProMedium, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
		Droid Sans, Helvetica Neue, sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
 * {
  box-sizing: border-box;
 }

 html, body{
  ${bodyStyles}
}

ul li{
  list-style-type:none;
}
 a {
  color: inherit;
  text-decoration: none;
 }
 .flex {
  display: flex;
}
 .ant-layout {
  background-color: ${Theme.colors.white};

  @media screen and (max-width: ${Theme.breakPoints.largePhone}px){
    margin-left: 0 !important;
  }

  &-content {
   position: relative;
  }
 }

 p {
  margin-bottom: 0;
 }
  ${DatepickerDropdownGlobalStyle}
  ${SelectDropdownGlobalStyle}
  ${CheckboxStyle}
  ${ANTDropDownStyles}
  ${ModalWrapperStyles}
`;
