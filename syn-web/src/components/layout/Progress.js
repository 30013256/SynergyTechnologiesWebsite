import styled from 'styled-components';

const  Progress  =  styled.div`
  position:  absolute;
  top: 0;
  margin-left: -2.5rem;
  background: #00AEEF;
  width:  100%;
  height:  3px;
  z-index:  10;

  transform-origin: left;
  transform: scaleX(${props => props.scroll});
  transition: all ease-out 150ms;
`;

export  default  Progress;