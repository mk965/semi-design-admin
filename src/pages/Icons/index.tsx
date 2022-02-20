/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-17 22:28:17
 * @LastEditTime: 2022-02-17 23:30:42
 * @Description: Icon Page
 */

import React from 'react';
import { Banner, Card, Row, Col, Typography } from '@douyinfe/semi-ui';
import { IconHome, IconLanguage } from '@douyinfe/semi-icons';
import styles from './index.module.less';

export default () => {
	const { Title, Text } = Typography;
	return (
		<div>
			{/* <Title heading={2}>官方图标库</Title>
			<p style={{marginTop: '20px'}}>
				semi-design 图标库：
				<Text link={{ href: 'https://semi.design/zh-CN/basic/icon' }}>
					点击查看
				</Text>
			</p>
			<p>
				IconPark 图标库：
				<Text link={{ href: 'https://iconpark.oceanengine.com/' }}>
					点击查看
				</Text>
			</p> */}
			<Banner
				fullMode={false}
				type="success"
				bordered
				icon={null}
				closeIcon={null}
				style={{ marginBottom: '24px' }}
				title={
					<div
						style={{ fontWeight: 600, fontSize: '14px', lineHeight: '20px' }}
					>
						<Text>官方图标库</Text>
					</div>
				}
				description={
					<div>
						<p>
							semi-design 图标库：
							<Text link={{ href: 'https://semi.design/zh-CN/basic/icon' }}>
								点击查看
							</Text>
						</p>
						<p>
							IconPark 图标库：
							<Text link={{ href: 'https://iconpark.oceanengine.com/' }}>
								点击查看
							</Text>
						</p>
					</div>
				}
			/>
			<Title heading={2}>图标列表</Title>
			<div style={{ margin: '10px 0 20px' }}>
				<Row gutter={[16, 16]}>
					<Col span={6}>
						<Card
							shadows='hover'
							style={{ maxWidth: 360 }}
							bodyStyle={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<IconHome />
						</Card>
					</Col>
					<Col span={6}>
						<Card
							shadows='hover'
							style={{ maxWidth: 360 }}
							bodyStyle={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<IconLanguage />
						</Card>
					</Col>
					<Col span={6}>
						<Card
							shadows='hover'
							style={{ maxWidth: 360 }}
							bodyStyle={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<IconLanguage />
						</Card>
					</Col>
					<Col span={6}>
						<Card
							shadows='hover'
							style={{ maxWidth: 360 }}
							bodyStyle={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<IconLanguage />
						</Card>
					</Col>
					<Col span={6}>
						<Card
							shadows='hover'
							style={{ maxWidth: 360 }}
							bodyStyle={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<IconLanguage />
						</Card>
					</Col>
				</Row>
			</div>
			<Title heading={2}>自定义图标</Title>
			<br />
		</div>
	);
};
