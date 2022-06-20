import * as React from 'react';
import { Grid as GridMantine, GridProps as GridPropsMantine } from '@mantine/core';

type GridProps = GridPropsMantine;

export const Grid: React.FC<GridProps> = ({ children, ...rest }) => <GridMantine {...rest}>{children}</GridMantine>;
