/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-02 23:10:52
 * @LastEditTime: 2022-02-06 11:25:25
 * @Description: 全局状态
 */

import { getLocalStorage } from '@/utils/storage';
import create from 'zustand';

export interface GlobalState {
	locale: 'zh_CN' | 'en_US';
	loading: boolean;
	toogleLoading: (val: boolean) => void;
	changeLocale: (val: 'zh_CN' | 'en_US') => void;
}

const store = create<GlobalState>((set, get) => ({
	locale: (getLocalStorage('semi_locale') as 'zh_CN' | 'en_US') || 'zh_CN',
	loading: false,
	toogleLoading: (val = false) => set({ loading: val }),
	changeLocale: (val: 'zh_CN' | 'en_US') => {
		if (val === 'zh_CN') set({ locale: 'zh_CN' });
		else set({ locale: 'en_US' });
	},
}));

const { getState, setState, subscribe, destroy } = store;

export { getState, setState, subscribe, destroy };

export default store;
