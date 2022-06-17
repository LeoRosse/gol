import * as React from 'react';
import { Aside as AsideMantine, AsideProps as AsidePropsMantine } from '@mantine/core';

type AsideProps = Pick<AsidePropsMantine, 'children' | 'height' | 'hiddenBreakpoint' | 'p' | 'styles' | 'sx' | 'width'>;

export const Aside: React.FC<AsideProps> = ({ children, ...rest }) => <AsideMantine {...rest}>{children}</AsideMantine>;
