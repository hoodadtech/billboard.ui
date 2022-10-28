import Styled from 'styled-components';
import { ThemeInterface } from '../../../styles/_theme';

interface Props {
	theme: ThemeInterface;
}

export const TextareaStyle = Styled.div<Props>`
   @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.smallPhone}px){
    width: 100%;
   }

   textarea {
    color: ${(props: Props) => props.theme.colors.gray_900};
    width: 371px;
    max-width: 100%;
    border-radius: 12px;
    border: 1px solid ${(props: Props) => props.theme.colors.borderDefaultColor};
    box-sizing: border-box;

    @media screen and (max-width: ${(props: Props) => props.theme.breakPoints.smallPhone}px){
     width: 100%;
    }

    &:focus, &:hover {
     border: 1px solid ${(props: Props) => props.theme.colors.secondaryColor};
    }

    &:focus{
     box-shadow: 0 0 0 2px ${(props: Props) => props.theme.colors.secondaryTransparentColor}
    }

    &.error {
     color: ${(props: Props) => props.theme.colors.errorColor};
     border: 1px solid ${(props: Props) => props.theme.colors.errorColor};

     &:focus {
      box-shadow: 0 0 0 2px ${(props: Props) => props.theme.colors.errorTransparentColor}
     }
    }

    &.success {
     color: ${(props: Props) => props.theme.colors.successColor};
     border: 1px solid ${(props: Props) => props.theme.colors.successColor};
     box-shadow: 0 0 0 2px ${(props: Props) => props.theme.colors.successTransparentColor}

     &:focus {
      box-shadow: 0 0 0 2px ${(props: Props) => props.theme.colors.successTransparentColor}
     }
    }

    &:disabled {
     background-color: ${(props: Props) => props.theme.colors.gray_100};
     color: ${(props: Props) => props.theme.colors.gray_900};
    }
   }
`;
