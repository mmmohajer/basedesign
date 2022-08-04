export const css = (cssConfig) => {
  const containerWidth =
    Math.max(
      cssConfig['hamburgerMenuTopWidth'],
      cssConfig['hamburgerMenuMiddleWidth'],
      cssConfig['hamburgerMenuBottomWidth'],
      cssConfig['hamburgerMenuClosedIconWidth']
    ) + cssConfig['hamburgerMenuContainerXPadding'];
  const containerHeight =
    cssConfig['hamburgerMenuHeight'] * 3 + cssConfig['hamburgerMenuSpace'] * 2 + 10;
  const toBeExtended = `
        height: ${cssConfig['hamburgerMenuHeight']}px;
        background-color: ${cssConfig['hamburgerMenuBgColor']};
        display: block;
        border-radius: ${cssConfig['hamburgerMenuBorderRadius']}px;
        transition: all ease-in ${cssConfig['hamburgerMenuTransitionDuration']}s;
    `;

  return `
    .${'ISWAD-Hamburger-hamburgerMenuContainer'} {
        display: flex;
        width: ${containerWidth}px;
        justify-content: center;
        align-items: center;
        height: ${containerHeight}px;
        cursor: pointer;
        background-color: ${cssConfig['hamburgerMenuContainerBgColor']};
        border: ${cssConfig['hamburgerMenuContainerBorder']};
        border-radius: ${cssConfig['hamburgerMenuContainerBorderRadius']}px;
    }

    .${'ISWAD-Hamburger-hamburgerMenuIcon'} {
        ${toBeExtended}
        position: relative;
        width: ${cssConfig['hamburgerMenuMiddleWidth']}px;
        transform: ${cssConfig['hamburgerMenuTransform']};
      }
      
      .${'ISWAD-Hamburger-hamburgerMenuIcon'}::before {
        content: "";
        ${toBeExtended}
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-${cssConfig['hamburgerMenuSpace']}px);
        width: ${cssConfig['hamburgerMenuTopWidth']}px;
      }
      
      .${'ISWAD-Hamburger-hamburgerMenuIcon'}::after {
        content: "";
        ${toBeExtended}
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(${cssConfig['hamburgerMenuSpace']}px);
        width: ${cssConfig['hamburgerMenuBottomWidth']}px;
      }
      
      .${'ISWAD-Hamburger-hamburgerMenuClosedIcon'} {
        ${toBeExtended}
        position: relative;
        transform: scaleX(1);
        opacity: 1;
        background-color: transparent;
        width: ${cssConfig['hamburgerMenuClosedIconWidth']}px;
      }
      
      .${'ISWAD-Hamburger-hamburgerMenuClosedIcon'}::before {
        content: "";
        ${toBeExtended}
        position: absolute;
        transform: rotate(-45deg) scaleX(1.25);
        opacity: 1;
        width: ${cssConfig['hamburgerMenuClosedIconWidth']}px;
      }
      
      .${'ISWAD-Hamburger-hamburgerMenuClosedIcon'}::after {
        content: "";
        ${toBeExtended}
        position: absolute;
        transform: rotate(45deg) scaleX(1.25);
        opacity: 1;
        width: ${cssConfig['hamburgerMenuClosedIconWidth']}px;
      }     
    `;
};
