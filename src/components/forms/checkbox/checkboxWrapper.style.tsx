import styled from 'styled-components';
import { Theme } from '../../../styles/_theme';

export interface CheckBoxProps {
	variant: 'primary' | 'secondary' | 'warning' | 'suspended';
	icon?: {
		src: string;
	};
}
export const CheckboxWrapper = styled.div`
width: fit-content;
display:flex;
flex-direction: column;

.ant-space {
 flex-wrap: wrap;
 justify-content: flex-start !important;

 &-item {
  padding: 12px 0;
  border: 1px solid #EAEAEA;
  box-sizing: border-box;
  border-radius: 12px;
  width: 118px;
 }
}

.contactTitle{
  color:${Theme.colors.gray_800};
  margin: 10px 0;
}

.ant-layout{
  display:flex;
}

  .ant-checkbox-wrapper {
    flex-direction: row-reverse;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 7px;
    &::after{
      display:none;
    }
    &:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner {
   background-color: ${Theme.colors.primaryColorTransparent};
   border: 1px solid ${Theme.colors.primaryColor};
  }
}}

.ant-checkbox + span {
   padding-left: 0; 
}
  
  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
   background-color: ${Theme.colors.primaryColor};
  }
  
  .ant-checkbox {
   &-checked {
    .ant-checkbox-inner {
     background-color: ${Theme.colors.primaryColor};
     border: 1px solid ${Theme.colors.primaryColor};
    }
     &:hover {
     .ant-checkbox-inner {
      background-color: ${Theme.colors.primaryColor};
     }
    }
   }
   
   &-disabled {
    .ant-checkbox-inner {
     background-color: ${Theme.colors.primaryColorTransparent};
     border: 1px solid ${Theme.colors.primaryColorTransparent};
    }
    &:hover {
     .ant-checkbox-inner {
      background-color: ${Theme.colors.primaryColorTransparent};
     }
    }
   }
   
   &.error {
    .ant-checkbox-inner {
     border: 1px solid ${Theme.colors.errorColor};
    }
   }
   
    &::after {
     border: 1px solid ${Theme.colors.primaryColor};
    }
  }
  ${(props: CheckBoxProps) => {
		switch (props.variant) {
			case 'suspended':
				return `
          color: ${Theme.colors.gray_600};`;
			case 'primary':
				return `
          color: ${Theme.colors.primaryColor}`;
			case 'warning':
				return `
          color: ${Theme.colors.warningColor}`;
			case 'secondary':
				return `
          color: ${Theme.colors.secondaryColor}`;
			default:
				return `
        color: ${Theme.colors.black}`;
		}
	}}
`;
