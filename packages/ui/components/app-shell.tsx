import * as React from 'react';
import { Sun, MoonStars } from 'tabler-icons-react';
import {
  ActionIcon,
  AppShell as AppShellMantine,
  AppShellProps as AppShellPropsMantine,
  ColorScheme,
  Group,
  MantineProvider,
} from '@mantine/core';
import { Header, Title } from './atoms';

type AppShellProps = Pick<
  AppShellPropsMantine,
  'aside' | 'children' | 'className' | 'fixed' | 'navbar' | 'navbarOffsetBreakpoint' | 'styles' | 'footer' | 'header'
> & { colorScheme?: ColorScheme; title: string };

export const AppShell: React.FC<AppShellProps> = ({ children, colorScheme, title, ...rest }) => {
  const [colorSchemeState, setColorSchemeState] = React.useState<ColorScheme | undefined>(colorScheme);

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorSchemeState(value || (colorSchemeState === 'dark' ? 'light' : 'dark'));

  const { header } = rest;
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: colorSchemeState,
      }}
    >
      <AppShellMantine
        padding="md"
        fixed
        header={
          (
            <Header
              height={60}
              p="xs"
              sx={{
                display: 'flex',
              }}
              styles={(theme) => ({
                main: {
                  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
              })}
            >
              <Title sx={{ flexGrow: 1 }}>{title}</Title>
              <Group sx={{ height: '100%' }} px={20} position="apart">
                {/* <Logo colorScheme={colorScheme} /> */}
                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                  {colorSchemeState === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
                </ActionIcon>
              </Group>
            </Header>
          ) || header
        }
        styles={(theme) => ({
          main: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
        {...rest}
      >
        {children}
      </AppShellMantine>
    </MantineProvider>
  );
};
