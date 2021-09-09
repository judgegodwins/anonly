import styled from 'styled-components';

type StringOrNumber = string | number;

interface PaddingProps {
  padding: (number | string)[] | string | number;
  [item: string]: any;
}

const Padding = styled.div`
  padding: ${({padding}: PaddingProps): string => {
      // if paddings are numbers cast to px.
      if (padding instanceof Array) {
        return padding.map(pad => Number.isInteger(pad) ? `${pad}px` : pad)
          .join(' ');
      } else if (typeof padding === "number") {
        return `${padding}px`;
      } else {
        return padding;
      }

    }
  }
`

export default Padding