import * as React from 'react';
import { Button as ButtonMantine, SharedButtonProps as ButtonPropsMantine } from '@mantine/core';

type ButtonProps = Pick<
  ButtonPropsMantine,
  'variant' | 'size' | 'radius' | 'disabled' | 'children' | 'uppercase' | 'className' | 'color' | 'sx' | 'style'
> & { onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined };

export const Button: React.FC<ButtonProps> = ({ children, onClick, ...rest }) => (
  <ButtonMantine {...rest} onClick={onClick}>
    {children}
  </ButtonMantine>
);
