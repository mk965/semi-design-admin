/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-04 12:24:22
 * @LastEditTime: 2022-02-04 22:27:30
 * @Description: Modify here please
 */

import zh_CN from './zh_CN';
import en_US from './en_US';
import ja from './ja.json';

const languages = { zh_CN, en_US, ja };

const wrapObj = {};

Object.keys(languages).forEach((lang) => {
	wrapObj[lang] = { "translation": languages[lang] };
});
console.log("=========", wrapObj);
export default wrapObj;


// import React, { FC } from 'react';
// import en_US from './en_US';
// import zh_CN from './zh_CN';
// import { FormattedMessage, MessageDescriptor, useIntl } from 'react-intl';

// export const localeConfig = {
// 	zh_CN: zh_CN,
// 	en_US: en_US,
// };

// interface Props extends MessageDescriptor {
// 	id: string;
// }

// export const LocaleFormatter: FC<Props> = ({ ...props }) => {
// 	const notChildProps = { ...props, children: undefined };
// 	return <FormattedMessage {...notChildProps} id={props.id} />;
// };

// type FormatMessageProps = (descriptor: Props) => string;

// export const useLocale = () => {
// 	const { formatMessage: _formatMessage, ...rest } = useIntl();
// 	const formatMessage: FormatMessageProps = _formatMessage;
// 	return {
// 		...rest,
// 		formatMessage,
// 	};
// };
