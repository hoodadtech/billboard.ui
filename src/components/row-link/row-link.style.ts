import Styled from 'styled-components';
import {Theme} from '../../styles/_theme';

export const RowLinkStyles = Styled.div`
    .common-style{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .link{
        border-radius:20px;
        border:1px solid ${Theme.colors.gray_200};
        height: 98px;
        padding: 24px;
      
        &:hover {
            color:${Theme.colors.gray_600}
        }
        
        .title{
                font-size: ${Theme.fontSize.base};
        }
    
        .number-row {
            margin-right: 20px;
            color:${Theme.colors.secondaryColor};
            background-color: #d2ab6629;
            border-radius: 10px;
            font-size: ${Theme.fontSize['2xl']};
            height: 48px;
            width: 48px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
    }
`;
