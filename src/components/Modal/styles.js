import styled from "styled-components"

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  position: relative;
  width: 800px;
  background: #000;
  padding: 15px; /* essa borda preta da sua foto */
  border-radius: 10px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 20px; // DENTRO da caixinha
  right: 20px; // DENTRO da caixinha
  z-index: 10;
  background: rgba(0,0,0,0.7);
  border: none;
  color: white;
  font-size: 20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: red;
  }
`