import styled from '@emotion/styled';
import pxToRem from '@src/utils/pxToRem';
import { color, size, flex, border } from '@styles/mixins';
import SunIcon from '@assets/images/sun-solid.svg';
import MoonIcon from '@assets/images/moon-solid.svg';
import useMode from '@src/hooks/useMode';

interface MenuItemProps extends Props {
  handleClick: () => void;
  attributes?: { [key: string]: string };
}

interface ModeIconProps {
  mode: ThemeName;
}

const StyledHeader = styled.header`
  ${flex('space-between')}
  height: ${size('header')};
  padding: ${pxToRem(0, 40)};
  margin: 0 auto;
  border-bottom: ${border()} ${color('border')};
  background-color: ${color('backgroundCon')};
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: ${pxToRem(36)};
  color: ${color('textCon')};
`;

const Menu = styled.ul`
  ${flex('flex-start')}
`;

const MenuButton = styled.button`
  ${flex()}
  width: ${pxToRem(32)};
  height: ${pxToRem(32)};
  border-radius: 50%;
  background-color: ${color('background')};
  cursor: pointer;

  &:hover {
    background-color: ${color('hover')};
  }

  & .icon-mode {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    fill: ${color('text')};
  }
`;

function MenuItem({ handleClick, attributes, children }: MenuItemProps) {
  return (
    <li role="menuitem">
      <MenuButton type="button" onClick={handleClick} {...attributes}>
        {children}
      </MenuButton>
    </li>
  );
}

function ModeIcon({ mode }: ModeIconProps) {
  if (mode === 'LIGHT') {
    return <SunIcon className="icon-mode" />;
  }
  return <MoonIcon className="icon-mode" />;
}

function Header() {
  const [mode, handleClick] = useMode();
  return (
    <StyledHeader>
      <Title>Kara Kutu</Title>
      <Menu role="menu">
        <MenuItem handleClick={handleClick} attributes={{ role: 'switch' }}>
          <ModeIcon
            mode={mode}
            aria-label={`toggle to ${mode.toLowerCase()} mode`}
          />
        </MenuItem>
      </Menu>
    </StyledHeader>
  );
}

export default Header;
