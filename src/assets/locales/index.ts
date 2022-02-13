/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-04 12:24:22
 * @LastEditTime: 2022-02-08 23:29:39
 * @Description: Modify here please
 */

import zh_CN from './zh_CN';
import en_GB from './en_GB';
import ja_JP from './ja_JP';

const languages = { zh_CN, en_GB, ja_JP };

const wrapObj = {};

Object.keys(languages).forEach((lang) => {
	wrapObj[lang] = { "translation": languages[lang] };
});

export default wrapObj;