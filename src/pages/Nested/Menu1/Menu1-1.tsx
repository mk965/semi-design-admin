/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-16 22:31:17
 * @LastEditTime: 2022-02-16 23:07:17
 * @Description: 路由嵌套相关页面
 */


import { Card, Typography } from '@douyinfe/semi-ui';
import React from 'react';

export default () => {
	const { Text } = Typography;
	return (
		<Card
			title="Menu1-1"
			style={{ maxWidth: 360 }}
		>
			<Text>This is 'Menu1-1' page.</Text>
		</Card>
	);
};
