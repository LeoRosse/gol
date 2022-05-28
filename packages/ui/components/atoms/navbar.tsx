import * as React from 'react';
import { Navbar as NavbarMantine, NavbarProps as NavbarPropsMantine } from '@mantine/core';

type NavbarProps = Pick<NavbarPropsMantine, 'width' | 'height' | 'p' | 'children'>;

export const Navbar: React.FC<NavbarProps> = ({ children, ...rest }) => (
  <NavbarMantine {...rest}>{children}</NavbarMantine>
);
