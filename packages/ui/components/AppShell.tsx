import * as React from 'react';
import { AppShell as AppShellMantine, AppShellProps as AppShellPropsMantine } from '@mantine/core';

type AppShellProps = Pick<
  AppShellPropsMantine,
  'aside' | 'children' | 'className' | 'fixed' | 'navbar' | 'navbarOffsetBreakpoint' | 'styles' | 'footer' | 'header'
>;

export const AppShell: React.FC<AppShellProps> = ({ children, ...rest }) => (
  <AppShellMantine {...rest}>{children}</AppShellMantine>
);
