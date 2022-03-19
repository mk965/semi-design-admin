import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	plugins: [
		react(),
		// svgrPlugin({
		// 	svgrOptions: {
		// 		icon: true,
				
		// 	  // ...svgr options (https://react-svgr.com/docs/options/)
		// 	},
		// }),
		svgrPlugin(),
	],
});
