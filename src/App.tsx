/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-02 22:31:47
 * @LastEditTime: 2022-02-17 22:21:54
 * @Description: Modify here please
 */

import React from 'react';
import { Provider as LocaleProvider } from '@/config/i18n';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './router';
import './App.less';
import '@icon-park/react/styles/index.less';

function App() {
	return (
		<LocaleProvider>
			<BrowserRouter>
				<RenderRouter />
			</BrowserRouter>
		</LocaleProvider>
	);
}

export default App;
