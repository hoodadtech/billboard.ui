import Styled from 'styled-components';
import { ThemeInterface } from '../../../styles/_theme';

interface Props {
	theme: ThemeInterface;
}

export const SwitchStyle = Styled.div<Props>`
  .ant-switch {
    min-width: 40px;
    height: 24px;
    margin: 0 5px;

    &-handle {
     width: 16px;
     height: 16px;
     top: 4px;
     left: 4px;
    }

    &-checked {
     background-color: ${(props: Props) => props.theme.colors.primaryColor};

     .ant-switch-handle {
       left: calc(100% - 16px - 4px);
     }
    }

    &-disabled {
     background-color: ${(props: Props) => props.theme.colors.primaryColorTransparent};
    }
  }
`;
