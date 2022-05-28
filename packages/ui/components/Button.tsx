import * as React from 'react';
import { Button as ButtonMantine, SharedButtonProps as ButtonPropsMantine } from '@mantine/core';

type ButtonProps = Pick<
  ButtonPropsMantine,
  'variant' | 'size' | 'radius' | 'disabled' | 'children' | 'uppercase' | 'className' | 'color'
>;

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <ButtonMantine {...rest}>{children}</ButtonMantine>
);
