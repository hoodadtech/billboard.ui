import styled from 'styled-components';
import {SizeType} from "antd/es/config-provider/SizeContext";
import {Theme} from '../../styles/_theme';

interface MediaCardStylesProps {
    size?: SizeType
}

export const MediaCardStyles = styled.div`
  width: 219px;
  height: auto;
  border-radius: 10px;
  padding: 12px 12px 8px;

  ${(props: MediaCardStylesProps) => {
    switch (props.size) {
      case 'small':
        return `
                width: 200px;
			`;
      default:
        return ``;
    }
  }}

  .carousel {
    width: 100%;

    .slick {
      &-arrow {
        background-color: ${Theme.colors.white};
        top: 51px;
        border-radius: 20px;
        padding: 2px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
      }

      &-next {
        right: -8px;
      }

      &-prev {
        left: -8px;
        z-index: 2;
      }
    }
  }

  .row {
    padding: 4px 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .billboard-id {
      font-size: ${Theme.fontSize.xs};
      font-weight: 600;
    }

    .title {
      color: ${Theme.colors.gray_400};
      font-size: ${Theme.fontSize.xs};
    }

    .data {
      color: ${Theme.colors.gray_700};
      font-size: ${Theme.fontSize.sm};
    }
  }

  .brand {
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: ${Theme.colors.gray_200};
    padding: 13px 4px;
    margin: 4px 0;

    &-name {
      color: ${Theme.colors.primaryColor};
      font-size: ${Theme.fontSize.xs};
    }

    .billboard-date {
      color: ${Theme.colors.gray_500};
      font-size: ${Theme.fontSize.xs};
      border-left: 1px solid ${Theme.colors.gray_200};
      padding-left: 10px;
      min-width: 80px;
    }
  }

  button {
   width: 100%;
   margin-top: 16px;
  }
`;
