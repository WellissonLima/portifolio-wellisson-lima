import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const LoaderCircle = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const LoaderText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #3498db;
`;

const Loader = () => (
  <LoaderContainer>
    <LoaderCircle />
    <LoaderText>Carregando repositórios...</LoaderText>
  </LoaderContainer>
);

export default Loader;