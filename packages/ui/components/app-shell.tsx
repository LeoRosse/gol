import * as React from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Shell } from './shell';
import { CommandsUiProps, ParserUiProps } from '../types';

type AppShellProps = {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  CommandsComponent: React.ComponentType<CommandsUiProps>;
  ParserComponent: React.ComponentType<ParserUiProps>;
  title: string;
};

export const AppShell: React.FC<AppShellProps> = ({
  children,
  colorScheme,
  CommandsComponent,
  ParserComponent,
  title,
}) => {
  const [colorSchemeState, setColorSchemeState] = React.useState<ColorScheme>(colorScheme || 'light');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorSchemeState(value || (colorSchemeState === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorSchemeState} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: colorSchemeState,
        }}
      >
        <Shell CommandsComponent={CommandsComponent} ParserComponent={ParserComponent} title={title}>
          {children}
        </Shell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
