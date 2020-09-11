import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		value: {
			name: string,

			colors: {
				elements: string,
				background: string,
				text: string
			},

			shadow: string
		},

		choose: (name: 'light' | 'dark') => void;
	}
}
