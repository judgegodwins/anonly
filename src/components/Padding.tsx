import styled from 'styled-components';

type StringOrNumber = string | number;

interface PaddingProps {
  padding: StringOrNumber[] | StringOrNumber;
  [item: string]: any;
}

const Padding = styled.div`
  padding: ${(props: PaddingProps): string => {
      // if paddings are numbers cast to px.
      if (props.padding instanceof Array) {
        return props.padding.map(pad => Number.isInteger(pad) ? `${pad}px` : pad)
          .join(' ');
      } else if (typeof props.padding === "number") {
        return `${props.padding}px`;
      } else {
        return props.padding;
      }

    }
  };
`

export default Padding;