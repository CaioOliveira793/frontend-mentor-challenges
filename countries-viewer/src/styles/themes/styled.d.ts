import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		name: string,

		colors: {
			elements: string,
			background: string,
			text: string
		}
	}
}
