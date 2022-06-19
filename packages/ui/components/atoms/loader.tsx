import * as React from 'react';
import { Loader as LoaderMantine, LoaderProps as LoaderMantineProps } from '@mantine/core';

type LoaderProps = Pick<LoaderMantineProps, 'variant' | 'size' | 'color'>;

export const Loader: React.FC<LoaderProps> = ({ ...rest }) => <LoaderMantine {...rest} />;
