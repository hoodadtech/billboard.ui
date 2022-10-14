import styled from 'styled-components';
import {Theme} from "../../../styles/_theme";

export interface RadioPermProps {
	variant?: 'primary' | 'secondary' | 'warning' | 'suspended';
	icon?: {
		src: string;
	};
}

export const RadioWrapper = styled.div`
.ant-space-item {
    padding: 12px;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    border-radius: 12px;
    .radioStatus{
      display: flex;

    } 
       .ant-radio-wrapper {
      display: flex;
      flex-direction: row-reverse;

      ${(props: RadioPermProps) => {
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
						return ``;
				}
			}}
    }
`;
