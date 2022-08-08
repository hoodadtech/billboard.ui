import { createGlobalStyle } from 'styled-components';
import { Theme } from './_theme';
// import {
//     DatepickerDropdownGlobalStyle
// } from "@/components/datepicker/datepicker.style";
// import {SelectDropdownGlobalStyle} from "@/components/forms/select/select.style";
// import {CheckboxStyle} from "@/components/forms/checkbox/checkbox.style";
// import {MapboxButtonsStyle} from "@/components/map/mapbox/mapbox.style";
// import {ANTDropDownStyles} from "@/components/button-drop-down/drop-down.style";
// import {ModalWrapperStyles} from "@/components/modal/modal.styles";
// import {Markers} from "@/components/marker/marker.style";

export const GlobalStyle = createGlobalStyle`
 * {
  box-sizing: border-box;
 }

 a {
  color: inherit;
  text-decoration: none;
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
 `;
// ${DatepickerDropdownGlobalStyle}
//
// ${SelectDropdownGlobalStyle}
//
// ${CheckboxStyle}
//
// ${ANTDropDownStyles}
//
// ${ModalWrapperStyles}
