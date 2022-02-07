/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-02 22:31:47
 * @LastEditTime: 2022-02-04 19:10:40
 * @Description: Modify here please
 */
import React, { useMemo } from 'react';
import { LocaleProvider } from '@douyinfe/semi-ui';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import useStore from './store/common/global';
import { localeConfig } from './locales';
import RenderRouter from './router';
import './App.less';

function App() {
	const locale = useStore((state) => state.locale);

	const getLocale = useMemo(() => {
		if (locale === 'en_US') {
			return en_US;
		} else if (locale === 'zh_CN') {
			return zh_CN;
		}
	}, [locale]);

	return (
		<LocaleProvider locale={getLocale}>
			<IntlProvider
				locale={locale.split('_')[0]}
				messages={localeConfig[locale]}
			>
				<BrowserRouter>
					<RenderRouter />
				</BrowserRouter>
			</IntlProvider>
		</LocaleProvider>
	);
}

export default App;

// export default () => {
//     return (
//         <div>哈哈哈</div>
//     )
// }
