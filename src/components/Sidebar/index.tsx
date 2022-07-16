import React from 'react';
import styled from '@emotion/styled';
import SideMenu from './SideMenu';
import SidebarContent from './SidebarContent';

const SidebarContainer = styled.div`
  display: flex;
  height: 100%;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <SideMenu />
      <SidebarContent />
    </SidebarContainer>
  );
}

export default React.memo(Sidebar);
