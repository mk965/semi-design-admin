/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-17 22:28:17
 * @LastEditTime: 2022-03-19 23:45:36
 * @Description: Icon Page
 */

import React from 'react';
import {
	Banner,
	Card,
	Row,
	Col,
	Typography,
	Tabs,
	TabPane,
	Icon,
} from '@douyinfe/semi-ui';
import {
	IconHome,
	IconLanguage,
	IconHelpCircle,
	IconInfoCircle,
	IconTick,
	IconBell,
} from '@douyinfe/semi-icons';
import { Home } from '@icon-park/react';
import styles from './index.module.less';
import './iconFont.less';

import { ReactComponent as People } from '@/assets/icons/people.svg';

export default () => {
	const { Title, Text } = Typography;
	return (
		<div>
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
			<Title heading={2}>示例图标列表</Title>
			<Tabs>
				<TabPane tab="Semi Icons" itemKey="1">
					<div style={{ margin: '10px 0 20px' }}>
						<Row gutter={[24, 24]}>
							<Col md={8} lg={6} xl={4}>
								<Card
									shadows="hover"
									style={{ maxWidth: 360, textAlign: 'center' }}
								>
									<IconHome />
									<p>{`<IconHome />`}</p>
								</Card>
							</Col>
							<Col md={8} lg={6} xl={4}>
								<Card
									shadows="hover"
									style={{ maxWidth: 360, textAlign: 'center' }}
								>
									<IconLanguage />
									<p>{`<IconLanguage />`}</p>
								</Card>
							</Col>
							<Col md={8} lg={6} xl={4}>
								<Card
									shadows="hover"
									style={{ maxWidth: 360, textAlign: 'center' }}
								>
									<IconHelpCircle />
									<p>{`<IconHelpCircle />`}</p>
								</Card>
							</Col>
							<Col md={8} lg={6} xl={4}>
								<Card
									shadows="hover"
									style={{ maxWidth: 360, textAlign: 'center' }}
								>
									<IconInfoCircle />
									<p>{`<IconInfoCircle />`}</p>
								</Card>
							</Col>
							<Col md={8} lg={6} xl={4}>
								<Card
									shadows="hover"
									style={{ maxWidth: 360, textAlign: 'center' }}
								>
									<IconTick />
									<p>{`<IconTick />`}</p>
								</Card>
							</Col>
							<Col md={8} lg={6} xl={4}>
								<Card
									shadows="hover"
									style={{ maxWidth: 360, textAlign: 'center' }}
								>
									<IconBell />
									<p>{`<IconBell />`}</p>
								</Card>
							</Col>
						</Row>
					</div>
				</TabPane>
				<TabPane tab="IconPark" itemKey="2">
					<div style={{ margin: '10px 0 20px' }}>
						<Row gutter={[24, 24]}>
							<Col>
								<Card shadows="hover" style={{ textAlign: 'center' }}>
									<Home />
									<p>{`<Home />`}</p>
								</Card>
							</Col>
							<Col>
								<Card shadows="hover" style={{ textAlign: 'center' }}>
									<Home theme="filled" />
									<p>{`<Home theme="filled"/>`}</p>
								</Card>
							</Col>
							<Col>
								<Card shadows="hover" style={{ textAlign: 'center' }}>
									<Home theme="outline" size="32" fill="#000000" />
									<p>{`<Home theme="outline" size="32" fill="#000000"/>`}</p>
								</Card>
							</Col>
							<Col>
								<Card shadows="hover" style={{ textAlign: 'center' }}>
									<Home theme="two-tone" size="32" fill={['#333', '#2F88FF']} />
									<p>{`<Home theme="two-tone" size="32" fill={['#333' ,'#2F88FF']}/>`}</p>
								</Card>
							</Col>
							<Col>
								<Card shadows="hover" style={{ textAlign: 'center' }}>
									<Home
										theme="multi-color"
										size="32"
										fill={['#333', '#2F88FF', '#FFF', '#43CCF8']}
									/>
									<p>{`<Home theme="multi-color" size="32" fill={['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']}/>`}</p>
								</Card>
							</Col>
						</Row>
					</div>
				</TabPane>
				<TabPane tab="IconFont" itemKey="3">
					<div style={{ margin: '10px 0 20px' }}>
						<Row gutter={[24, 24]}>
							<Col md={8} lg={6} xl={4}>
								<Card shadows="hover" style={{ textAlign: 'center' }}>
									<p>
										<span className="iconfont icon-a-biaoqingqipao"></span>
									</p>
								</Card>
							</Col>
							<Col md={8} lg={6} xl={4}>
								<Card shadows="hover" style={{ textAlign: 'center' }}>
									<p>
										<span className="iconfont icon-cuo"></span>
									</p>
								</Card>
							</Col>
							<Col md={8} lg={6} xl={4}>
								<Card shadows="hover" style={{ textAlign: 'center' }}>
									<p>
										<span className="iconfont icon-a-suofangda"></span>
									</p>
								</Card>
							</Col>
							<Col md={8} lg={6} xl={4}>
								<Card shadows="hover" style={{ textAlign: 'center' }}>
									<p>
										<span className="iconfont icon-jingyin"></span>
									</p>
								</Card>
							</Col>
							<Col md={8} lg={6} xl={4}>
								<Card shadows="hover" style={{ textAlign: 'center' }}>
									<p>
										<span className="iconfont icon-huiyi"></span>
									</p>
								</Card>
							</Col>
							<Col md={8} lg={6} xl={4}>
								<Card shadows="hover" style={{ textAlign: 'center' }}>
									<p>
										<span className="iconfont icon-baocun"></span>
									</p>
								</Card>
							</Col>
						</Row>
					</div>
				</TabPane>
			</Tabs>

			<Title heading={2}>自定义图标</Title>
			<div style={{ margin: '10px 0 20px' }}>
				<Row gutter={[24, 24]}>
					<Col md={12} lg={12} xl={12}>
						<Card
							shadows="hover"
							style={{ textAlign: 'center' }}
						>
							<Icon svg={<People />} />
							<p>{`<Icon svg={<People />} />`}</p>
						</Card>
					</Col>
					<Col md={12} lg={12} xl={12}>
						<Card
							shadows="hover"
							style={{ textAlign: 'center' }}
						>
							<Icon svg={<People />} rotate={180} />
							<p>{`<Icon svg={<People />} rotate={180} />`}</p>
						</Card>
					</Col>
				</Row>
			</div>
			<br />
		</div>
	);
};
