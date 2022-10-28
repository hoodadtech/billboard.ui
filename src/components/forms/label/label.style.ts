import Styled from 'styled-components';
import { ThemeInterface } from '../../../styles/_theme';

interface Props {
	theme: ThemeInterface;
}

export const LabelStyle = Styled.div`
   width: 100%;
   margin: 5px 0;
   padding-left: 16px;
   display: flex;
   align-items: center;
   justify-content: flex-start;

   label {
    color: ${(props: Props) => props.theme.colors.gray_800};
    font-style: normal;
    font-weight: 300;
    font-size: ${(props: Props) => props.theme.fontSize.sm};
    line-height: 20px;
   }
`;
