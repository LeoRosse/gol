import * as React from 'react';
import { Header as HeaderMantine, HeaderProps as HeaderPropsMantine } from '@mantine/core';

type HeaderProps = Pick<HeaderPropsMantine, 'children' | 'height' | 'p' | 'styles' | 'sx'>;

export const Header: React.FC<HeaderProps> = ({ children, ...rest }) => (
  <HeaderMantine {...rest}>{children}</HeaderMantine>
);
