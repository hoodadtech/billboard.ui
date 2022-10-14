import Styled from 'styled-components';
import { Theme } from '../../../styles/_theme';

export const RadioStyle = Styled.div`
  .ant-radio-wrapper:hover .ant-radio-inner, .ant-radio:hover .ant-radio-inner {
   border: 1px solid ${Theme.colors.primaryColor};
   
   &:after {
    background-color: ${Theme.colors.primaryColorTransparent};
   }
  }
  
  .ant-radio {
   &-group {
    width: 100%;
    
    .ant-space {
     width: 100%;
     justify-content: space-between;
    }
   }
  
   &-checked {
    .ant-radio-inner {
     border: 1px solid ${Theme.colors.primaryColor};   
  
     &:after {
      background-color: ${Theme.colors.primaryColor};
     }
    }
    
    &:hover {
     .ant-radio-inner {
      &:after {
      background-color: ${Theme.colors.primaryColor};
     }
     }
    }
   }
   
   &-disabled {
    .ant-radio-inner {
     border: 1px solid ${Theme.colors.primaryColorTransparent};
     
     &:after {
      background-color: ${Theme.colors.primaryColorTransparent};
     }
    }
    
    &:hover {
     .ant-radio-inner {
      &:after {
       background-color: ${Theme.colors.primaryColorTransparent};
      }
     }
    }
   }
   
   &.error {
    .ant-radio-inner {
     border: 1px solid ${Theme.colors.errorColor};
    }
   }
   
    &::after {
     border: 1px solid ${Theme.colors.primaryColor};
    }
  }
`;
