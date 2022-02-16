/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-16 22:30:06
 * @LastEditTime: 2022-02-16 23:07:27
 * @Description: 路由嵌套相关页面
 */

import { Card, Typography } from '@douyinfe/semi-ui';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default () => {
	const { Text } = Typography;
	return (
		<Card
			title="Menu1"
			style={{ maxWidth: 360 }}
		>
			<Text>This is 'Menu1' page.</Text>
            <Text>Below is the sub route。⬇️</Text>
            <Outlet />
		</Card>
	);
};
