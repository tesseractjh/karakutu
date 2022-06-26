import Header from '@src/components/Header';
import ThemeProvider from '@contexts/ThemeProvider';
import GlobalStyle from '@styles/GlobalStyle';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.background};
  transition: background-color 0.3s;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
