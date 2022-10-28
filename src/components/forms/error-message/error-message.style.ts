import Styled from 'styled-components';
import { ThemeInterface } from '../../../styles/_theme';

interface Props {
	theme: ThemeInterface;
}

export const ErrorMessageStyle = Styled.div`
   width: 100%;
   margin: 5px 0;
   min-height: 20px;
   padding-left: 16px;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   color: ${(props: Props) => props.theme.colors.errorColor};
   font-weight: 300;
   font-size: ${(props: Props) => props.theme.fontSize.sm};
   line-height: 18px;
   font-style: normal;
`;
