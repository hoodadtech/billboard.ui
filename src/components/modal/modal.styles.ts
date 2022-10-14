import { Theme } from '../../styles/_theme';

export const ModalWrapperStyles = `
  .ant-modal {
    &-wrap {
      z-index: 10000;
    }

    &.small {
        width: 326px !important;

        @media screen and (max-width: ${Theme.breakPoints.largePhone}px){
                 width: 260px !important;
        }

        .ant-modal-footer {
         justify-content: space-around;
         display: flex;
        }
    }

    &.medium {
        width: 440px !important;

        @media screen and (max-width: ${Theme.breakPoints.largePhone}px){
                 width: 360px !important;
        }
    }

    &.error {
      .ant-btn {
        background-color: ${Theme.colors.gray_200};
        color: ${Theme.colors.gray_500};
        border-radius: 10px;
        border: 0;
        width: 120px;
        height: 48px;
      }

      .ant-btn-primary {
        background-color: ${Theme.colors.errorColor};
        color: ${Theme.colors.white};
      }
    }

    &.primary {
      .ant-btn {
        background-color: ${Theme.colors.gray_200};
        color: ${Theme.colors.gray_500};
        border-radius: 10px;
        border: 0;
        width: 120px;
        height: 48px;
      }

      .ant-btn-primary {
        background-color: ${Theme.colors.primaryColor};
        color: ${Theme.colors.white};
      }
    }

    &-body {
      color: ${Theme.colors.gray_600};
    }
  }
`;
