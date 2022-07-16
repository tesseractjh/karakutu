import styled from '@emotion/styled';
import GlobalStyle from '@styles/GlobalStyle';
import ThemeProvider from '@contexts/ThemeProvider';
import Header from '@components/Header';
import Section from '@components/Section';

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
          <Section />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
