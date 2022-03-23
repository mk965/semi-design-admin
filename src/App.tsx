/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-02 22:31:47
 * @LastEditTime: 2022-03-23 21:31:25
 * @Description: Modify here please
 */

import React, { useEffect } from 'react';
import { Provider as LocaleProvider } from '@/config/i18n';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './router';
import useStore from '@/store/common/global';
import './App.less';
import '@icon-park/react/styles/index.less';

function App() {
	const changeDarkMode = useStore((state) => state.changeDarkMode);
	const mql = window.matchMedia('(prefers-color-scheme: dark)');
	const body = document.body;
	function matchMode(e) {
		if (e.matches) {
			if (!body.hasAttribute('theme-mode')) {
				changeDarkMode(true);
				body.setAttribute('theme-mode', 'dark');
			}
		} else {
			if (body.hasAttribute('theme-mode')) {
				changeDarkMode(false);
				body.removeAttribute('theme-mode');
			}
		}
	}
	useEffect(() => {
		matchMode(mql);
		mql.addListener(matchMode);
	})
	return (
		<LocaleProvider>
			<BrowserRouter>
				<RenderRouter />
			</BrowserRouter>
		</LocaleProvider>
	);
}

export default App;
