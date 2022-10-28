import Styled from 'styled-components';
import { ThemeInterface } from '../../../styles/_theme';

interface Props {
	theme: ThemeInterface;
}

export const RadioStyle = Styled.div<Props>`
  .ant-radio-wrapper:hover .ant-radio-inner, .ant-radio:hover .ant-radio-inner {
   border: 1px solid ${(props: Props) => props.theme.colors.primaryColor};

   &:after {
    background-color: ${(props: Props) => props.theme.colors.primaryColorTransparent};
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
     border: 1px solid ${(props: Props) => props.theme.colors.primaryColor};

     &:after {
      background-color: ${(props: Props) => props.theme.colors.primaryColor};
     }
    }

    &:hover {
     .ant-radio-inner {
      &:after {
      background-color: ${(props: Props) => props.theme.colors.primaryColor};
     }
     }
    }
   }

   &-disabled {
    .ant-radio-inner {
     border: 1px solid ${(props: Props) => props.theme.colors.primaryColorTransparent};

     &:after {
      background-color: ${(props: Props) => props.theme.colors.primaryColorTransparent};
     }
    }

    &:hover {
     .ant-radio-inner {
      &:after {
       background-color: ${(props: Props) => props.theme.colors.primaryColorTransparent};
      }
     }
    }
   }

   &.error {
    .ant-radio-inner {
     border: 1px solid ${(props: Props) => props.theme.colors.errorColor};
    }
   }

    &::after {
     border: 1px solid ${(props: Props) => props.theme.colors.primaryColor};
    }
  }
`;
