import * as React from 'react';
import { Sun, MoonStars, Heart } from 'tabler-icons-react';
import {
  ActionIcon,
  AppShell as AppShellMantine,
  AppShellProps as AppShellPropsMantine,
  Group,
  MediaQuery,
  useMantineColorScheme,
} from '@mantine/core';
import { Aside, Footer, Header, Navbar, Title } from './atoms';
import { CommandsUiProps, ParserUiProps } from '../types';

type ShellProps = Pick<
  AppShellPropsMantine,
  'aside' | 'children' | 'className' | 'fixed' | 'navbar' | 'navbarOffsetBreakpoint' | 'styles' | 'footer' | 'header'
> & {
  CommandsComponent: React.ComponentType<CommandsUiProps>;
  title: string;
  ParserComponent: React.ComponentType<ParserUiProps>;
};

export const Shell: React.FC<ShellProps> = ({ children, CommandsComponent, ParserComponent, title, ...rest }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const { aside, footer, header, navbar } = rest;
  return (
    <AppShellMantine
      padding={7}
      fixed
      navbar={
        (
          <Navbar p="md" width={{ sm: 200, lg: 300 }}>
            <CommandsComponent colorScheme={colorScheme} />
          </Navbar>
        ) || navbar
      }
      aside={
        (
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <ParserComponent colorScheme={colorScheme} />
            </Aside>
          </MediaQuery>
        ) || aside
      }
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
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
              </ActionIcon>
            </Group>
          </Header>
        ) || header
      }
      footer={
        (
          <Footer
            height={60}
            p="xs"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Built with <Heart /> by Leonardo Rosseti
          </Footer>
        ) || footer
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
  );
};
