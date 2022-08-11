import Styled from 'styled-components';

export const ImageStyle = Styled.img`
   display: block;

  &.test {
    height: 300px;
    width: 300px;
  }

  @keyframes loaded {
    0% {
      opacity: 0.1;
    }

    100% {
      opacity: 1;
    }
  }

  &.image-loaded:not(.image-has-error) {
    animation: loaded 300ms ease-in-out;
  }

  &.image-has-error {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=');
  }
`;
