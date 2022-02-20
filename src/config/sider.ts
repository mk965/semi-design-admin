/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-02 23:10:23
 * @LastEditTime: 2022-02-16 22:51:52
 * @Description: 侧边栏配置
 */

import {
	IconHome,
	IconArticle,
	IconLanguage,
	IconQuote,
	IconMenu,
	IconEdit,
	IconGridRectangle,
	IconApps,
	IconTickCircle,
	IconAlertTriangle,
	IconUser,
} from '@douyinfe/semi-icons';

export interface MenuItem {
	itemKey: string;
	text: string;
	icon?: React.ReactNode;
	path?: string;
	items?: MenuItem[];
	component?: React.ComponentType<any>;
}

const MENU_CONFIG: MenuItem[] = [
	{
		itemKey: '1',
		text: 'sider.dashboard',
		icon: IconHome,
		path: '/dashboard',
	},
	{
		itemKey: '2-0',
		text: 'sider.docs',
		icon: IconArticle,
		path: '/docs',
	},
	{
		itemKey: '3-0',
		text: 'sider.i18n',
		icon: IconLanguage,
		path: '/language',
	},
	{
		itemKey: '4-0',
		text: 'sider.guide',
		icon: IconQuote,
		path: '/guide',
	},
	{
		itemKey: '5-0',
		text: 'sider.nested',
		icon: IconMenu,
		items: [
			{
				itemKey: '5-1',
				text: 'sider.nested.menu1',
				items: [
					{
						itemKey: '5-1-1',
						text: 'sider.nested.menu1.menu1-1',
						path: '/nested/menu1/menu1-1',
					},
					{
						itemKey: '5-1-2',
						text: 'sider.nested.menu1.menu1-2',
						path: '/nested/menu1/menu1-2',
					},
				]
			},
			{
				itemKey: '5-2',
				text: 'sider.nested.menu2',
				path: '/nested/menu2',
			}
		]
	},
	{
		itemKey: '6-0',
		text: 'sider.icons',
		icon: IconArticle,
		path: '/icons',
	},


	{
		itemKey: '2',
		text: 'form',
		icon: IconEdit,
		items: [
			{
				itemKey: '2-1',
				text: 'form.basic',
				path: '/form/basic',
			},
			{
				itemKey: '2-2',
				text: 'form.step',
				path: '/form/step',
			},
			{
				itemKey: '2-3',
				text: 'form.advanced',
				path: '/form/advanced',
			},
		],
	},
	{
		itemKey: '3',
		text: 'list',
		icon: IconGridRectangle,
		items: [
			{
				itemKey: '3-1',
				text: 'list.search',
				path: '/list/search',
			},
			{
				itemKey: '3-2',
				text: 'list.inquire',
				path: '/list/inquire',
			},
			{
				itemKey: '3-3',
				text: 'list.standard',
				path: '/list/standard',
			},
			{
				itemKey: '3-4',
				text: 'list.card',
				path: '/list/card',
			},
		],
	},
	{
		itemKey: '4',
		text: 'detail',
		icon: IconApps,
		items: [
			{
				itemKey: '4-1',
				text: 'detail.basic',
				path: '/detail/basic',
			},
			{
				itemKey: '4-2',
				text: 'detail.advanced',
				path: '/detail/advanced',
			},
		],
	},
	{
		itemKey: '5',
		text: 'result',
		icon: IconTickCircle,
		items: [
			{
				itemKey: '5-1',
				text: 'result.success',
				path: '/result/success',
			},
			{
				itemKey: '5-2',
				text: 'result.failed',
				path: '/result/failed',
			},
		],
	},
	{
		itemKey: '6',
		text: 'abnormal',
		icon: IconAlertTriangle,
		items: [
			{
				itemKey: '6-1',
				text: 'abnormal.403',
				path: '/abnormal/403',
			},
			{
				itemKey: '6-2',
				text: 'abnormal.404',
				path: '/abnormal/404',
			},
			{
				itemKey: '6-3',
				text: 'abnormal.500',
				path: '/abnormal/500',
			},
		],
	},
	{
		itemKey: '7',
		text: 'user',
		icon: IconUser,
		items: [
			{
				itemKey: '7-1',
				text: 'user.center',
				path: '/user/center',
			},
			{
				itemKey: '7-2',
				text: 'user.settings',
				path: '/user/settings',
			},
		],
	},
];

export default MENU_CONFIG;
