import Styled from 'styled-components';
import { Theme } from '../../styles/_theme';

export interface TableWrapperProps {
	fullPage?: boolean;
	differenceHeight?: number;
	loading?: boolean;
}

export const TableWrapper = Styled.div`
    width: 100%;
    max-width: 100vw;
    position: relative;
    overflow: auto;
    
    ${(props: TableWrapperProps) => {
			if (props.fullPage) {
				return `
         @media screen and (min-width: ${Theme.breakPoints.largePhone}px) {
            min-height: calc(100vh - ${props.differenceHeight || 178}px);
            max-height: calc(100vh - ${props.differenceHeight || 178}px);
            overflow-y: auto;
         }
      `;
			}
		}}
    
  .ant-table-wrapper {
    .ant-table-content {
     padding: 16px;
     overflow: auto;
    }
  
    .ant-table-thead {
     background-color: ${Theme.colors.white};
     
     th {
      background-color: ${Theme.colors.white};
      color: ${Theme.colors.gray_400};
      text-align:center;
      
      @media screen and (max-width: ${Theme.breakPoints.largePhone}px){
        font-size:${Theme.fontSize.xs}
      }
     }
    }  
    
    .date{
       @media screen and (max-width: ${Theme.breakPoints.tablet}px){
        font-size:${Theme.fontSize.xs}
        padding: 0;
        color:red;
       }
      }
    }
    
    .spanGray{
      color:${Theme.colors.gray_400}
    }
    
    .ant-table-tbody {
      td {
        text-align:center;
        border: 0;
        padding: 11px 16px;
        height: 70px;
        
        @media screen and (max-width: ${Theme.breakPoints.tablet}px){
          padding:0;
        }
        
        a {
         color: ${Theme.colors.gray_900};
         
         &:hover {
          color: ${Theme.colors.secondaryColor};
         }
        }
      }
    }
  }
`;
