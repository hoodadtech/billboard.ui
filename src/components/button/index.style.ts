import Styled from 'styled-components';
import { ThemeInterface } from '../../styles/_theme';
import { CustomButtonProps } from './types';

interface Props extends CustomButtonProps {
	theme: ThemeInterface;
}

export const ButtonStyle = Styled.button`
    display:inline-flex;
    height: 48px;
    border-radius: 10px;
    padding: ${(props: Props) => (props.text ? '3px 20px' : '3px 14px')};
    direction: ${(props: Props) => props.direction || 'unset'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    color:white;
    align-items: center;
    border: none;
    background-color:${(props: Props) => props.theme.colors.primaryColor} ;
    cursor:pointer;
    font-weight: 600;
    justify-content: space-around;
    transition: all 200ms ease-in-out;

    .left-icon {
      display: ${(props: Props) => (props.isMobileIcon ? 'none' : 'flex')};
      transition: all 200ms ease-in-out;

      @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.largePhone}px){
        display: flex;
      }
    }

    .dropdown-icon {
      display: ${(props: Props) => (props.text ? 'flex' : 'none')};
    }

    .text {
     display: inline-flex;
     margin: ${(props: Props) => (props.icon ? '0 10px 0 5px' : '0 5px')};

     @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.largePhone}px){
       display: ${(props: Props) => (props.isDesktopText ? 'none' : 'inline-flex')};
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

  ${(props: Props) => {
		switch (props.variant) {
			case 'successBold':
				return `
            background-color: ${props.theme.colors.successColor};
            color:${props.theme.colors.white};
            `;
			case 'success':
				return `
            background-color: ${props.theme.colors.successTransparentColor};
            color:${props.theme.colors.successColor};

            &:hover,&:focus {
                background:${props.theme.colors.successColorHover};
            };
                `;
			case 'primary':
				return `
            color:white;
            background-color:${props.theme.colors.primaryColor};

            &:hover {
                background:${props.theme.colors.primaryColorHover};
            };

            &:focus{
                background-color:${props.theme.colors.primaryColorPress};
            }
                `;
			case 'secondary':
				return `
            background-color: ${props.theme.colors.primaryColorTransparent};
            color:${props.theme.colors.primaryColorHover};

            &:hover {
                background:#2D2E831A;
                box-shadow: 0px 0px 10px rgba(73, 74, 164, 0.3);
            };

            &:focus{
                background-color:${props.theme.colors.primaryColorButtonFocus};
            }
             `;
			case 'leased':
				return `
            background-color: ${props.theme.colors.secondaryColor};
            color:${props.theme.colors.white};

            &:hover {
                background-color: ${props.theme.colors.secondaryColorHover};
            };

            &:focus{
                background-color:${props.theme.colors.secondaryColorPress};
            }
             `;
			case 'error':
				return `
            background-color: ${props.theme.colors.errorTransparentColor};
            color:${props.theme.colors.errorColor};

            &:hover, &:focus {
                box-shadow: 0px 0px 10px rgba(254, 80, 80, 0.3);
            };
             `;
			case 'tertiary':
				return `
            background-color:white;
            border:1px solid ${props.theme.colors.primaryColor};
            color:${props.theme.colors.primaryColor};

            &:hover{
                 color:${props.theme.colors.primaryColorHover};
                 border:1px solid:${props.theme.colors.primaryColorHover};
            };

            &:focus{
                color:${props.theme.colors.primaryColorPress};
                border:1px solid:${props.theme.colors.primaryColorPress};
                background-color:rgba(45, 46, 131, 0.1);
            } `;
			case 'textLine':
				return `
           	  border:none;
          	  background-color:white;
          	  color:${props.theme.colors.primaryColor};

          	  &:hover{
                color:${props.theme.colors.primaryColorHover};
          	  };

          	  &:focus{
                color:${props.theme.colors.primaryColorPress};
          	  }
            } `;
			case 'lightBlue':
				return `
                border:1px solid ${props.theme.colors.lightBlue};
                color:${props.theme.colors.lightBlue};
                background-color:white;
                `;

			case 'transparent':
				return `
           	  border:none;
          	  background-color:transparent;
          	  color:${props.theme.colors.primaryColor};

          	  &:hover{
                color:${props.theme.colors.primaryColorHover};
          	  };

          	  &:focus{
                color:${props.theme.colors.primaryColorPress};
          	  }
            `;
			case 'gray':
				return `
           	  border:none;
          	  background-color: ${props.theme.colors.gray};
          	  color:${props.theme.colors.white};
            `;
			default:
				`
        		background-color: ${props.theme.colors.primaryColor};
   		 	`;
		}
	}}

  ${(props: Props) => {
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

  ${(props: Props) => {
		return `
     opacity: ${props.loading ? '0.5' : '1'};
    `;
	}}
`;
