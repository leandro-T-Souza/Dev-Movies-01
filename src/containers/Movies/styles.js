import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  min-height: 100vh;
  padding: 120px 20px 40px 20px;

  h1 {
    color: #fff;
    text-align: center;
    font-size: 45px;
    margin-bottom: 40px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 25px;
  max-width: 1500px;
  margin: 0 auto;
`;

export const Card = styled.div`
  cursor: pointer;
  transition: all 0.3s;

  img {
    width: 100%;
    border-radius: 15px;
  }

  h3 {
    color: #fff;
    margin-top: 10px;
    font-size: 16px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;