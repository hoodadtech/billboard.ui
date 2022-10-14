import Styled from 'styled-components';
import { Theme } from '../../styles/_theme';
import { AccordionProps } from '../accordion/accordion';

export const AccordionStyle = Styled.div`
    border: 1px solid ${Theme.colors.gray_300};
    border-radius: 15px;
    transition: all 150ms ease-in-out;
    min-height: 94px;
    box-sizing: border-box;
    overflow: hidden;
    &:hover {
       box-shadow: 0 1px 5px rgb(0 0 0 / 0.2);
       border: 0;
    }
      
    .accordion {
      &-header {
        background-color: ${Theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 94px;
        padding: 14px 17px;
        border-radius: 15px;
        box-sizing: border-box;
        z-index: 2;
        flex-direction: row;
        
        .date{
          border-left: 1px solid #E7ECF2;
          margin:0 10px;
          padding:0 10px;
          
          .data-title{
              color:${Theme.colors.gray_500};
              font-size: 16px;
          }
        }
        
        &--number {
            margin:0 10px;
            color:${Theme.colors.secondaryColor};
            background-color: #d2ab66;
            border-radius: 10px;
            font-size: ${Theme.fontSize['2xl']};
            height: 48px;
            width: 48px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
       
        &--left {
         display: flex;
         align-items: center;
         height: 100%;
         
         .title {
           font-weight: 500;
           color: ${Theme.colors.black};
           font-size: ${Theme.fontSize.xl};
         }
         
         .number {
            margin:0 20px 0 10px;
            color:${Theme.colors.secondaryColor};
            background: rgba(210, 171, 102, 0.1);
            border-radius: 10px;
            font-size: ${Theme.fontSize['2xl']};
            height: 48px;
            width: 48px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            padding-top: 4px;
         }
        }
    
        &--right {
         display: flex;
         align-items: center;
         justify-content: space-between;

         .flex{
          display: flex;
          button{
            margin:0 10px;
          }
       } 
        }
        
      }
      
      &-content {
        display: none;
        opacity: 0;
        border-radius: 0 0 15px 15px;
        padding:16px 0;
        transition: all 150ms ease-in-out;
      }
    }  
  
    ${(props: AccordionProps) => {
			if (props.isAccordionOpen) {
				return `
                .accordion-header {
                 background-color: ${Theme.colors.gray_100};
                 border-radius: 15px 15px 0 0 ;
                
                 &:hover {
                   box-shadow: 0 0 0 rgb(0 0 0);
                 }
                 
                 &--left {
                  color: ${Theme.colors.primaryColor};
                 }
               }
       
               .accordion-content {
                  opacity: 1;
                  display: block;
                  transition: all 150ms ease-in-out;
               }
        `;
			}
		}}
`;
