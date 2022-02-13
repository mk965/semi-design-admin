/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-02 23:10:52
 * @LastEditTime: 2022-02-08 23:05:35
 * @Description: 全局状态
 */

import { getLocalStorage } from '@/utils/storage';
import create from 'zustand';

type LocaleType = 'zh_CN' | 'en_GB' | 'ja_JP';
export interface GlobalState {
	loading: boolean;
	toogleLoading: (val: boolean) => void;
	locale: LocaleType;
	changeLocale: (val: LocaleType) => void;
}

const store = create<GlobalState>((set, get) => ({
	loading: false,
	toogleLoading: (val = false) => set({ loading: val }),
	locale: (getLocalStorage('semi_locale') as LocaleType) || 'zh_CN',
	changeLocale: (val: LocaleType) => {set({ locale: val });},
}));

const { getState, setState, subscribe, destroy } = store;

export { getState, setState, subscribe, destroy };

export default store;
