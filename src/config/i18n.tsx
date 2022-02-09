/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-04 12:14:37
 * @LastEditTime: 2022-02-09 22:55:35
 * @Description: 国际化相关配置
 */

import React, { useEffect, useMemo } from 'react';
import i18n, { Callback } from 'i18next';
import { LocaleProvider } from '@douyinfe/semi-ui';
import useStore from '../store/common/global';
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB';
import ja_JP from '@douyinfe/semi-ui/lib/es/locale/source/ja_JP';

import {
	initReactI18next,
	useTranslation as TrueUsetranslation,
} from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import resources from '@/assets/locales';
import { getLocalStorage, setLocalStorage } from '@/utils/storage';

export const storageName = 'semi_locale';
const initLang = getLocalStorage(storageName);

i18n
	// .use(Backend)
	// .use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'zh_CN',
		lng: initLang,
		debug: import.meta.env.VITE_APP_ENV === 'DEV' ? true : false,
		resources,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	});
export default i18n;

export const Provider = (props) => {
	const { i18n } = useTranslation();
	const locale = getLocalStorage(storageName);
	const getLocale = useMemo(() => {
		console.log("getLocalegetLocale")
		switch (locale) {
			case 'en_GB':
				return en_GB;
			case 'ja_JP':
				return ja_JP;
			default:
			case 'zh_CN':
				return zh_CN;
		}
	}, [locale, i18n.language]);
	
	return <LocaleProvider locale={getLocale}>{props.children}</LocaleProvider>;
};

export const useTranslation = () => {
	const { t, i18n } = TrueUsetranslation();
	const TrueChangeLanguage = i18n.changeLanguage;
	i18n.changeLanguage = (lng: string, callback?: Callback) => {
		setLocalStorage(storageName, lng || 'zh_CN');
		return TrueChangeLanguage(lng, callback);
	};
	return { t, i18n };
};
