import * as React from 'react';
import { Title as TitleMantine, TitleProps as TitlePropsMantine } from '@mantine/core';

type TitleProps = TitlePropsMantine;

export const Title: React.FC<TitleProps> = ({ children, ...rest }) => <TitleMantine {...rest}>{children}</TitleMantine>;
