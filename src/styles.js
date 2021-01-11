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
  width: 200px;
  height: 300px;
  display: flex;
  flex-flow: column;
  border: 1px solid black;
  margin: 5px;
`;

const ModalStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  padding: 50px;
  z-index: 1000;
`;

const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;
`;

export {
  AppContainer,
  RowSegment,
  Card,
  ModalStyles,
  OverlayStyles,
};
