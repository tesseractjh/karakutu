import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import PenIcon from '@assets/images/pen-to-square-solid.svg';
import PaletteIcon from '@assets/images/palette-solid.svg';
import pxToRem from '@src/utils/pxToRem';
import { border, color, flex } from '@src/styles/mixins';
import { nanoid } from 'nanoid';

interface MenuItemInfo {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  text: string;
}

interface SideMenuItemProps extends Props {
  text: string;
  isSelected: boolean;
  handleClick: () => void;
}

const SideMenuContainer = styled.div`
  z-index: 10;
  width: ${pxToRem(64)};
  height: 100%;
  padding: ${pxToRem(20, 0)};
  border-right: ${border()} ${color('border')};
  background-color: ${color('backgroundLight')};
`;

const Menu = styled.ul`
  width: 100%;
  & > li {
    margin-bottom: ${pxToRem(8)};
  }
`;

const SideMenuButton = styled.button`
  ${flex()}
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: ${pxToRem(10, 0)};
  cursor: pointer;
  user-select: none;

  & span {
    color: ${color('textLight')};
  }

  & svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    fill: ${color('textLight')};
  }

  .menu-selected & {
    background-color: ${color('primaryLight')};

    & span {
      color: ${color('primaryDark')};
    }

    & svg {
      fill: ${color('primaryDark')};
    }
  }
`;

const menuItemList: MenuItemInfo[] = [
  {
    icon: PenIcon,
    text: 'Input'
  },
  {
    icon: PaletteIcon,
    text: 'Style'
  }
];

function SideMenuItem({
  text,
  isSelected,
  handleClick,
  children
}: SideMenuItemProps) {
  return (
    <li role="menuitem" className={isSelected ? 'menu-selected' : ''}>
      <SideMenuButton type="button" onClick={handleClick}>
        {children}
        <span>{text}</span>
      </SideMenuButton>
    </li>
  );
}

function SideMenu() {
  const [selected, setSelected] = useState<number>(0);

  const handleMenuClick = useCallback(
    (index: number) => () => setSelected(index),
    [setSelected]
  );

  return (
    <SideMenuContainer>
      <Menu>
        {menuItemList.map(({ icon: Icon, text }, index) => {
          return (
            <SideMenuItem
              text={text}
              isSelected={selected === index}
              handleClick={handleMenuClick(index)}
              key={nanoid()}
            >
              <Icon />
            </SideMenuItem>
          );
        })}
      </Menu>
    </SideMenuContainer>
  );
}

export default SideMenu;
