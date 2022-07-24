import 'styled-components';
import { ThemeGlobalApp } from './theme.global';

declare module 'styled-components' {
    type ThemeType = typeof ThemeGlobalApp;
    export interface DefaultTheme extends ThemeType {}
}
