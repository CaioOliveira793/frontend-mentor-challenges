import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		value: {
			name: string,

			colors: {
				elements: string,
				background: string,
				text: string,
				scroll: string
			},

			shadow: string,
			borderRadius: string,
			maxPageWidth: string
		},

		choose: (name: 'light' | 'dark') => void;
	}
}
