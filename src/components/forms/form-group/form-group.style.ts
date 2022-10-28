import Styled from 'styled-components';
import { ThemeInterface } from '../../../styles/_theme';
import { FormGroupProps } from './form-group';

interface Props extends Partial<FormGroupProps> {
	theme: ThemeInterface;
}

export const FormGroupStyle = Styled.div`
   padding: 26px 32px;
   display: flex;
   flex-wrap: wrap;
   position: relative;
   justify-content: flex-start;

   ${(props: Props) => {
			switch (props.flexDirection) {
				case 'column':
					return `
            flex-direction: column;
            align-items: stretch;
             `;
				case 'row':
				default:
					`
            flex-direction: row;
            align-items: flex-start;
            `;
			}
		}}

   @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.largePhone}px){
     padding: 16px;
   }

   .form-group {
    padding-bottom: 16px;
    flex: 2;
    min-width: 310px;

    @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.desktop}px){
     flex: 0 0 100%;
    }

    &--title {
     font-size: ${(props: Props) => props.theme.fontSize.xl};
     color: ${(props: Props) => props.theme.colors.gray_700};
     margin-top: 4px;
     padding-right: 32px;

     @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.desktop}px){
      padding-right: 16px;
     }
    }

    &--description {
     font-size: ${(props: Props) => props.theme.fontSize.sm};
     color: ${(props: Props) => props.theme.colors.gray_500};
     padding-right: 32px;

     @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.desktop}px){
      padding-right: 16px;
     }
    }

    &--inputs {
     display: flex;
     justify-content: flex-start;
     flex-wrap: wrap;
     gap: 20px 28px;
     flex: 6;
     min-height: 40px;
     height: 100%;
     align-items:center;


   ${(props: Props) => {
			switch (props.flexDirection) {
				case 'column':
					return `
                flex: 0 0 100%;
                 `;
				default:
					``;
			}
		}}

     @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.desktop}px){
      flex: 0 0 100%;
     }

     @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.largeTablet}px){
      gap: 4px 8px;
     }

     @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.largePhone}px){
        min-width: 100%;
        max-width: 100%;
     }
    }
   }
`;
