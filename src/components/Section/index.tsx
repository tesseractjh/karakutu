import styled from '@emotion/styled';
import { flex } from '@styles/mixins';
import Sidebar from '@src/components/Sidebar';

const SectionContainer = styled.section`
  ${flex('flex-start')}
  height: calc(100vh - ${({ theme }) => theme.size.header});
`;

function Section() {
  return (
    <SectionContainer>
      <Sidebar />
    </SectionContainer>
  );
}

export default Section;
