import Styled from 'styled-components';
import { ThemeInterface } from '../../styles/_theme';

interface Props {
	theme: ThemeInterface;
}

export const RowLinkStyles = Styled.div<Props>`
    .common-style{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .link{
        border-radius:20px;
        border:1px solid ${(props: Props) => props.theme.colors.gray_200};
        height: 98px;
        padding: 24px;

        &:hover {
            color:${(props: Props) => props.theme.colors.gray_600}
        }

        .title{
                font-size: ${(props: Props) => props.theme.fontSize.base};
        }

        .number-row {
            margin-right: 20px;
            color:${(props: Props) => props.theme.colors.secondaryColor};
            background-color: #d2ab6629;
            border-radius: 10px;
            font-size: ${(props: Props) => props.theme.fontSize['2xl']};
            height: 48px;
            width: 48px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
    }
`;
