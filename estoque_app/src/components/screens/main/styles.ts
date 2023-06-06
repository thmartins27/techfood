import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
    padding-top: 5rem;
`;

export const ContentCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 15px;
`;


export const CircleCarrinho = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #ff9f43;
  position: absolute;
  left: 2.8rem;
  top: -.5rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
`