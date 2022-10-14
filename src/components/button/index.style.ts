import Styled from 'styled-components';
import { Theme } from '../../styles/_theme';
import { CustomButtonProps } from './types';

export const ButtonStyle = Styled.button`
    display:inline-flex;
    height: 48px;
    border-radius: 10px;
    padding: ${(props: CustomButtonProps) => (props.text ? '3px 20px' : '3px 14px')};
    direction: ${(props: CustomButtonProps) => props.direction || 'unset'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    color:white;
    align-items: center;
    border: none;
    background-color:${Theme.colors.primaryColor} ;
    cursor:pointer;
    font-weight: 600;
    justify-content: space-around;
    transition: all 200ms ease-in-out;

    .left-icon {
      display: ${(props: CustomButtonProps) => (props.isMobileIcon ? 'none' : 'flex')};
      transition: all 200ms ease-in-out;

      @media screen and (max-width: ${Theme.breakPoints.largePhone}px){
        display: flex;
      }
    }

    .dropdown-icon {
      display: ${(props: CustomButtonProps) => (props.text ? 'flex' : 'none')};
    }

    .text {
     display: inline-flex;
     margin: ${(props: CustomButtonProps) => (props.icon ? '0 10px 0 5px' : '0 5px')};

     @media screen and (max-width: ${Theme.breakPoints.largePhone}px){
       display: ${(props: CustomButtonProps) => (props.isDesktopText ? 'none' : 'inline-flex')};
     }
    }

    .numFilter {
        background-color: #2D84FB;
        color: #ffffff;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 5px;
        opacity: 40%;
    }

  ${(props: CustomButtonProps) => {
		switch (props.variant) {
			case 'successBold':
				return `
            background-color: ${Theme.colors.successColor};
            color:${Theme.colors.white};
            `;
			case 'success':
				return `
            background-color: ${Theme.colors.successTransparentColor};
            color:${Theme.colors.successColor};

            &:hover,&:focus {
                background:${Theme.colors.successColorHover};
            };
                `;
			case 'primary':
				return `
            color:white;
            background-color:${Theme.colors.primaryColor};

            &:hover {
                background:${Theme.colors.primaryColorHover};
            };

            &:focus{
                background-color:${Theme.colors.primaryColorPress};
            }
                `;
			case 'secondary':
				return `
            background-color: ${Theme.colors.primaryColorTransparent};
            color:${Theme.colors.primaryColorHover};

            &:hover {
                background:#2D2E831A;
                box-shadow: 0px 0px 10px rgba(73, 74, 164, 0.3);
            };

            &:focus{
                background-color:${Theme.colors.primaryColorButtonFocus};
            }
             `;
			case 'leased':
				return `
            background-color: ${Theme.colors.secondaryColor};
            color:${Theme.colors.white};

            &:hover {
                background-color: ${Theme.colors.secondaryColorHover};
            };

            &:focus{
                background-color:${Theme.colors.secondaryColorPress};
            }
             `;
			case 'error':
				return `
            background-color: ${Theme.colors.errorTransparentColor};
            color:${Theme.colors.errorColor};

            &:hover, &:focus {
                box-shadow: 0px 0px 10px rgba(254, 80, 80, 0.3);
            };
             `;
			case 'tertiary':
				return `
            background-color:white;
            border:1px solid ${Theme.colors.primaryColor};
            color:${Theme.colors.primaryColor};

            &:hover{
                 color:${Theme.colors.primaryColorHover};
                 border:1px solid:${Theme.colors.primaryColorHover};
            };

            &:focus{
                color:${Theme.colors.primaryColorPress};
                border:1px solid:${Theme.colors.primaryColorPress};
                background-color:rgba(45, 46, 131, 0.1);
            } `;
			case 'textLine':
				return `
           	  border:none;
          	  background-color:white;
          	  color:${Theme.colors.primaryColor};

          	  &:hover{
                color:${Theme.colors.primaryColorHover};
          	  };

          	  &:focus{
                color:${Theme.colors.primaryColorPress};
          	  }
            } `;
			case 'lightBlue':
				return `
                border:1px solid ${Theme.colors.lightBlue};
                color:${Theme.colors.lightBlue};
                background-color:white;
                `;

			case 'transparent':
				return `
           	  border:none;
          	  background-color:transparent;
          	  color:${Theme.colors.primaryColor};

          	  &:hover{
                color:${Theme.colors.primaryColorHover};
          	  };

          	  &:focus{
                color:${Theme.colors.primaryColorPress};
          	  }
            `;
			case 'gray':
				return `
           	  border:none;
          	  background-color: ${Theme.colors.gray};
          	  color:${Theme.colors.white};
            `;
			default:
				`
        		background-color: ${Theme.colors.primaryColor};
   		 	`;
		}
	}}

  ${(props: CustomButtonProps) => {
		switch (props.size) {
			case 'small':
				return `
                   width: max-content;
                   height : 40px;
                   font-size:12px;
                   min-width: ${props.fullWidth ? '100%' : 'max-content'};
            `;
			case 'middle':
				return `
                   width :116px;
                   max-width: max-content;
                   height :48px;
                   font-size:15px;
                   min-width: ${props.fullWidth ? '100%' : 'max-content'};
            `;
			default:
				return `
                   width: max-content;
                   height:48px;
                   min-width: ${props.fullWidth ? '100%' : 'max-content'};
            `;
		}
	}}

  &:disabled {
   opacity: 0.5;
  }

  ${(props: CustomButtonProps) => {
		return `
     opacity: ${props.loading ? '0.5' : '1'};
    `;
	}}
`;
