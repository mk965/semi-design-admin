/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-06 11:44:21
 * @LastEditTime: 2022-02-09 23:22:09
 * @Description: 国际化能力演示
 */

import React, { Suspense } from 'react';
import {
	Button,
	Space,
	Select,
	Card,
	Pagination,
	DatePicker,
} from '@douyinfe/semi-ui';
import { useTranslation } from '@/config/i18n';
import './index.css';

export default () => {
	const { t, i18n } = useTranslation();
	const changeLang = (lang: any) => {
		i18n.changeLanguage(lang);
	};

	return (
		<div className="content">
			<Select
				defaultValue={i18n.language}
				value={i18n.language}
				style={{ width: 120, marginBottom: '24px' }}
				onChange={changeLang}
			>
				<Select.Option value="zh_CN">{t('switchChinese')}</Select.Option>
				<Select.Option value="en_GB">{t('switchEnglish')}</Select.Option>
				<Select.Option value="ja_JP">{t('switchJapanese')}</Select.Option>
			</Select>
			<Card style={{ marginBottom: '24px' }}>
				<p>{t('WelcomeToSemiDesignAdmin')}</p>
				<p>当前的语言是{i18n.language}</p>
			</Card>
			<Card style={{ marginBottom: '24px' }}>
				<Pagination total={80} showSizeChanger></Pagination>
				<br />
				<br />
				<DatePicker />
				<br />
				<br />
				<DatePicker type="dateRange" density="compact" style={{ width: 260 }} />
			</Card>
			<Card>
				<Space>
					<Button onClick={() => i18n.changeLanguage('zh_CN')}>
						{t('switchChinese')}
					</Button>
					<Button onClick={() => i18n.changeLanguage('en_GB')}>
						{t('switchEnglish')}
					</Button>
					<Button onClick={() => i18n.changeLanguage('ja_JP')}>
						{t('switchJapanese')}
					</Button>
				</Space>
			</Card>
		</div>
	);
};
