import * as React from 'react';
import { Footer as FooterMantine, FooterProps as FooterPropsMantine } from '@mantine/core';

type FooterProps = Pick<FooterPropsMantine, 'children' | 'height' | 'p' | 'styles' | 'sx'>;

export const Footer: React.FC<FooterProps> = ({ children, ...rest }) => (
  <FooterMantine {...rest}>{children}</FooterMantine>
);
