import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { border, color, flex } from '@src/styles/mixins';
import pxToRem from '@src/utils/pxToRem';
import AngleLeftIcon from '@assets/images/angles-left-solid.svg';
import AngleRightIcon from '@assets/images/angles-right-solid.svg';

interface ButtonProps extends Props {
  expanded: boolean;
  handleClick: () => void;
}

const CONTENT_ID = 'cont-sidebar';
const DURATION = 250;

const fadeIn = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

const ExpandButton = styled.button`
  ${flex()}
  position: absolute;
  bottom: ${pxToRem(20)};
  left: ${pxToRem(14)};
  z-index: 20;
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${color('hoverLight')};
  }

  & svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    fill: ${color('text')};
  }
`;

const SidebarContentContainer = styled.div<{
  isAnimationActive: boolean;
  isFadeIn: boolean;
}>`
  width: ${pxToRem(800)};
  height: 100%;
  border-right: ${border()} ${color('border')};
  background-color: ${color('backgroundLight')};
  ${({ isAnimationActive, isFadeIn }) =>
    isAnimationActive
      ? css`
          animation: ${isFadeIn ? fadeIn : fadeOut} ${DURATION / 1000}s ease-out;
          ${isFadeIn ? '' : 'transform: translate3d(-100%, 0, 0);'}
        `
      : ''}
`;

function Button({ expanded, handleClick }: ButtonProps) {
  return (
    <ExpandButton
      aria-controls={CONTENT_ID}
      aria-expanded="true"
      onClick={handleClick}
    >
      {expanded ? <AngleLeftIcon /> : <AngleRightIcon />}
    </ExpandButton>
  );
}

function Content() {
  return <div></div>;
}

function SidebarContent() {
  const [active, setActive] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(true);
  const [ready, setReady] = useState<boolean>(true);

  const handleExpandButtonClick = useCallback(() => {
    if (!ready) {
      return;
    }
    setActive(true);
    setExpanded((prev) => !prev);
  }, [ready]);

  useEffect(() => {
    if (active) {
      setReady(false);
      if (expanded) {
        setVisible(true);
      } else {
        setTimeout(() => setVisible(false), DURATION);
      }
      setTimeout(() => setReady(true), DURATION);
    }
  }, [active, expanded]);

  return (
    <>
      <Button expanded={expanded} handleClick={handleExpandButtonClick} />
      {visible ? (
        <SidebarContentContainer
          id={CONTENT_ID}
          aria-hidden="false"
          isAnimationActive={active}
          isFadeIn={expanded}
        >
          <Content></Content>
        </SidebarContentContainer>
      ) : null}
    </>
  );
}

export default SidebarContent;
