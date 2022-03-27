/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-03-26 22:56:27
 * @LastEditTime: 2022-03-27 17:03:52
 * @Description: 结果组件
 */

import React, { ReactNode } from 'react';
import { Button, Typography } from '@douyinfe/semi-ui';
import {
	IconTickCircle,
	IconClear,
	IconUploadError,
	IconAlertTriangle,
} from '@douyinfe/semi-icons';

import styles from './index.module.less';

interface IProps {
	children?: ReactNode,
	status?:
		| 'success'
		| 'error'
		| 'info'
		| 'warning'
		| '404'
		| '403'
		| '500'
		| 404
		| 403
		| 500;
	title?: ReactNode;
	subTitle?: ReactNode;
	icon?: ReactNode;
	extra?: ReactNode;
}

const statusToIcon = {
	success: <IconTickCircle className={styles.successIcon} />,
	error: <IconClear className={styles.failedIcon} />,
	info: <IconUploadError className={styles.infoIcon} />,
	warning: <IconAlertTriangle className={styles.warningIcon} />,
};

export default (
	props: IProps = {
		status: 'info',
		title: '',
		subTitle: '',
	}
) => {
	const { Title } = Typography;
	const { children, status, title, subTitle, icon, extra } = props;
	return (
		<div className={styles.semiResult}>
			<div className={styles.resultIcon}>
				{icon ? icon : statusToIcon[status]}
			</div>
			<Title className={styles.resultTitle}>{title}</Title>
			<Title className={styles.resultSubTitle} heading={4} type="tertiary">
				{subTitle}
			</Title>
			<div className={styles.resultExtra}>{extra}</div>
			{ children ? children : null }
		</div>
	);
};
