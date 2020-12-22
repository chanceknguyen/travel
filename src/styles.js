/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  border: 1px solid black;
`;

const RowSegment = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-flow: column;
  border: 1px solid black;
  margin: 5px;
`;

export {
  AppContainer,
  RowSegment,
  Card,
};
