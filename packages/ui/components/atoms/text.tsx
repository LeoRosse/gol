import * as React from 'react';
import { Text as TextMantine, SharedTextProps as TextPropsMantine } from '@mantine/core';

type TextProps = Pick<TextPropsMantine, 'align' | 'className' | 'color' | 'weight' | 'variant' | 'lineClamp'> & {
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ children, ...rest }) => <TextMantine {...rest}>{children}</TextMantine>;
