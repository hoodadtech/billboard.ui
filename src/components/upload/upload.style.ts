import Styled from 'styled-components';
import { ThemeInterface } from '../../styles/_theme';

interface Props {
	theme: ThemeInterface;
}

export const UploadStyle = Styled.div<Props>`
  .ant-upload-list-picture-card-container {
    width: 169px;
    height: 169px;
    border-radius: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    .ant-upload-list-item {
     width: 100%;
     height: 100%;
     border-radius: 16px;
     overflow: hidden;

     &.ant-upload-list-item-done {
      padding: 0;
     }

     &-error {
      border-color: ${(props: Props) => props.theme.colors.errorColor};

      .ant-upload-list-item-name {
       color: ${(props: Props) => props.theme.colors.errorColor};
      }
     }

     &-thumbnail {
      color: #3EAEFF;
     }

     .ant-progress-bg {
       background: #3EAEFF;
       height: 4px !important;
     }
    }
  }

  .ant-upload {
   &-select-picture-card {
    border: 1px dashed #3EAEFF;
    background: #F7F9FC;
    width: 169px;
    height: 169px;
    border-radius: 16px;

    &:hover {
     border-color: ${(props: Props) => props.theme.colors.primaryColor};
    }

    .ant-upload {
     color: #3EAEFF;

     .title {
      font-weight: bold;
      font-size: ${(props: Props) => props.theme.fontSize.sm}
     }

     .description {
      font-size: ${(props: Props) => props.theme.fontSize.xs}
     }
    }
   }
  }
`;
