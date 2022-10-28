import Styled from 'styled-components';
import { ThemeInterface } from '../../styles/_theme';

export interface TableWrapperProps {
	fullPage?: boolean;
	differenceHeight?: number;
	loading?: boolean;
	theme: ThemeInterface;
}

export const TableWrapper = Styled.div<TableWrapperProps>`
    width: 100%;
    max-width: 100vw;
    position: relative;
    overflow: auto;

    ${(props: TableWrapperProps) => {
			if (props.fullPage) {
				return `
         @media screen and (min-width: ${props.theme.breakPoints.largePhone}px) {
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
     background-color: ${(props: TableWrapperProps) => props.theme.colors.white};

     th {
      background-color: ${(props: TableWrapperProps) => props.theme.colors.white};
      color: ${(props: TableWrapperProps) => props.theme.colors.gray_400};
      text-align:center;

      @media screen and (max-width: ${(props: TableWrapperProps) => props.theme.breakPoints.largePhone}px){
        font-size:${(props: TableWrapperProps) => props.theme.fontSize.xs}
      }
     }
    }

    .date{
       @media screen and (max-width: ${(props: TableWrapperProps) => props.theme.breakPoints.tablet}px){
        font-size:${(props: TableWrapperProps) => props.theme.fontSize.xs}
        padding: 0;
        color:red;
       }
      }
    }

    .spanGray{
      color:${(props: TableWrapperProps) => props.theme.colors.gray_400}
    }

    .ant-table-tbody {
      td {
        text-align:center;
        border: 0;
        padding: 11px 16px;
        height: 70px;

        @media screen and (max-width: ${(props: TableWrapperProps) => props.theme.breakPoints.tablet}px){
          padding:0;
        }

        a {
         color: ${(props: TableWrapperProps) => props.theme.colors.gray_900};

         &:hover {
          color: ${(props: TableWrapperProps) => props.theme.colors.secondaryColor};
         }
        }
      }
    }
  }
`;
