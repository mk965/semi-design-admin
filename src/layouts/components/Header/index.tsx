// import { history } from 'umi';
// import { Layout, Nav, Button, Avatar, Typography } from '@douyinfe/semi-ui';
// import {
// 	IconBell,
// 	IconEdit,
// 	IconHelpCircle,
// 	IconHome,
// 	IconLive,
// 	IconSemiLogo,
// 	IconSetting,
// 	IconMoon,
// 	IconSun,
// } from '@douyinfe/semi-icons';
// import { useState } from 'react';

// export default () => {
// 	const { Header } = Layout;
// 	const onSelect = (e: any) => {
// 		if (e && e.itemKey) {
// 			// history.push(e.itemKey);
// 		}
// 	};

// 	const [isDark, setIsDark] = useState(false);
// 	const switchMode = () => {
// 		const body = document.body;
// 		if (body.hasAttribute('theme-mode')) {
// 			body.removeAttribute('theme-mode');
// 			setIsDark(false);
// 		} else {
// 			body.setAttribute('theme-mode', 'dark');
// 			setIsDark(true);
// 		}
// 	};
// 	const { Text } = Typography;
// 	return (
// 		<Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
// 			<div>
// 				<Nav
// 					mode="horizontal"
// 					defaultSelectedKeys={['/home']}
// 					selectedKeys={[location.pathname]}
// 					onSelect={onSelect}
// 				>
// 					<Nav.Header>
// 						<IconSemiLogo style={{ fontSize: 36 }} />
// 						<Text>EasyMP</Text>
// 					</Nav.Header>
// 					<Nav.Item
// 						itemKey="/home"
// 						text="首页"
// 						icon={<IconHome size="large" />}
// 					/>
// 					<Nav.Item
// 						itemKey="/live"
// 						text="直播"
// 						icon={<IconLive size="large" />}
// 					/>
// 					<Nav.Item
// 						itemKey="/setting"
// 						text="设置"
// 						icon={<IconSetting size="large" />}
// 					/>
// 					<Nav.Item
// 						itemKey="/editor"
// 						text="编辑器"
// 						icon={<IconEdit size="large" />}
// 					/>

// 					{/* <Nav.Item itemKey="Home2" text="首页" icon={<IconHome size="large" />}>
//               <Link to="/home">首页</Link>
//             </Nav.Item>
//             <Nav.Item itemKey="Editor" icon={<IconSetting size="large" />}>
//               <Link to="/editor">编辑器</Link>
//             </Nav.Item> */}
// 					<Nav.Footer>
// 						<Button
// 							theme="borderless"
// 							icon={
// 								isDark ? <IconSun size="large" /> : <IconMoon size="large" />
// 							}
// 							style={{
// 								color: 'var(--semi-color-text-2)',
// 								marginRight: '12px',
// 							}}
// 							onClick={switchMode}
// 						/>
// 						<Button
// 							theme="borderless"
// 							icon={<IconBell size="large" />}
// 							style={{
// 								color: 'var(--semi-color-text-2)',
// 								marginRight: '12px',
// 							}}
// 						/>
// 						<Button
// 							theme="borderless"
// 							icon={<IconHelpCircle size="large" />}
// 							style={{
// 								color: 'var(--semi-color-text-2)',
// 								marginRight: '12px',
// 							}}
// 						/>
// 						<Avatar color="orange" size="small">
// 							YJ
// 						</Avatar>
// 					</Nav.Footer>
// 				</Nav>
// 			</div>
// 		</Header>
// 	);
// };

import React, { FC, useEffect, useState } from 'react';
import {
	Layout,
	Nav,
	Button,
	Avatar,
	Badge,
	Dropdown,
	RadioGroup,
	Radio,
	Space,
} from '@douyinfe/semi-ui';
import {
	IconBell,
	IconHelpCircle,
	IconMoon,
	IconSun,
} from '@douyinfe/semi-icons';
import { useTranslation } from '@/config/i18n';
import Breadcrumb from '../Breadcrumb';
import useStore from '@/store/common/global';
import Tags from '../Tags';
// import '../../index.scss';

const { Header } = Layout;

const Index: FC = () => {
	const locale = useStore((state) => state.locale);
	const changeLocale = useStore((state) => state.changeLocale);
	const { t, i18n } = useTranslation();

	const [isDark, setIsDark] = useState(false);
	const switchMode = () => {
		const body = document.body;
		if (body.hasAttribute('theme-mode')) {
			body.removeAttribute('theme-mode');
			setIsDark(false);
		} else {
			body.setAttribute('theme-mode', 'dark');
			setIsDark(true);
		}
	};

	const [language, setLanguage] = useState(i18n.language);
	useEffect(() => {
		setLanguage(i18n.language);
	}, [i18n.language]);

	const selectLocale = (locale: 'zh_CN' | 'en_GB') => {
		i18n.changeLanguage(locale);
		// changeLocale(locale);
		localStorage.setItem('semi_locale', locale);
	};

	const question = () => {
		window.open('https://github.com/mk965/semi-design-admin/issues');
	};

	return (
		<Header className="layout-header">
			<Nav mode="horizontal">
				<Nav.Header>
					<Breadcrumb />
				</Nav.Header>
				<Nav.Footer>
					<Space>
						<Button
							theme="borderless"
							icon={
								isDark ? <IconSun size="large" /> : <IconMoon size="large" />
							}
							style={{
								color: 'var(--semi-color-text-2)',
								// marginRight: '12px',
							}}
							onClick={switchMode}
						/>

						<Badge count={5} type="danger">
							<Button
								theme="borderless"
								icon={
									// <Badge count={5} type="danger">
									<IconBell size="large" />
									// </Badge>
								}
								style={{
									color: 'var(--semi-color-text-2)',
									// marginRight: '12px',
								}}
							/>
						</Badge>
						<Button
							theme="borderless"
							icon={<IconHelpCircle size="large" />}
							style={{
								color: 'var(--semi-color-text-2)',
								// marginRight: '12px',
							}}
							onClick={question}
						/>

						{/* <Badge count={5} type="danger"> */}
						<Dropdown
							render={
								<Dropdown.Menu>
									<Dropdown.Item>{t('PersonalCenter')}</Dropdown.Item>
									<Dropdown.Item>{t('PersonalSettings')}</Dropdown.Item>
									<Dropdown.Item>退出登录</Dropdown.Item>
								</Dropdown.Menu>
							}
						>
							<Avatar color="orange" size="small">
								semi
							</Avatar>
						</Dropdown>
						{/* </Badge> */}

						<RadioGroup
							type="button"
							defaultValue={language}
							value={language}
							style={{ marginLeft: '20px' }}
						>
							<Radio value={'zh_CN'} onChange={() => selectLocale('zh_CN')}>
								中文
							</Radio>
							<Radio value={'en_GB'} onChange={() => selectLocale('en_GB')}>
								EN
							</Radio>
						</RadioGroup>
					</Space>
				</Nav.Footer>
			</Nav>
			<Tags />
		</Header>
	);
};

export default Index;
