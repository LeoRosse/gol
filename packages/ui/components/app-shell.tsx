import * as React from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Shell } from './shell';

type AppShellProps = { children: React.ReactNode; colorScheme?: ColorScheme; title: string };

export const AppShell: React.FC<AppShellProps> = ({ children, colorScheme, title }) => {
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
        <Shell title={title}>{children}</Shell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
