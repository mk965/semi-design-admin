/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-12 14:46:56
 * @LastEditTime: 2022-02-17 22:50:24
 * @Description: Guide Page
 */

import React, { useEffect } from 'react';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css'; // import driver.js css
import step from './step';
import { Banner, Typography, Button } from '@douyinfe/semi-ui';

export default React.memo(
	() => {
		const { Text } = Typography;
		let driver = new Driver();
		useEffect(() => {
			driver.defineSteps(step);
		}, []);
		const guide = () => {
			// https://github.com/kamranahmedse/driver.js/issues/316
			setTimeout(() => driver.start());
		};
		return (
			<>
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
							driver.js
						</div>
					}
					description={
						<div>
							引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本
							Demo 是基于{' '}
							<Text
								link={{ href: 'https://github.com/kamranahmedse/driver.js' }}
							>
								driver.js
							</Text>{' '}
							.
						</div>
					}
				/>
				<Button onClick={guide}>Show Guide</Button>
			</>
		);
	},
	(prevProps, nextProps) => {
		console.log(prevProps, nextProps);
		return false;
	}
);
