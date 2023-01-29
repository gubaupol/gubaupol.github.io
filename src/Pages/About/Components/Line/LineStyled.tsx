import styled from "styled-components";

export const LineStyled = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  text-align: center;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: row;
  svg {
    height: fit-content;

    display: flex;
  }
`;
