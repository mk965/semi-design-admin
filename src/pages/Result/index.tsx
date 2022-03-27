/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-03-27 16:28:20
 * @LastEditTime: 2022-03-27 17:03:54
 * @Description: 结果
 */

import React from 'react';
import { Button, Typography } from '@douyinfe/semi-ui';
import { IconClear, IconLanguage } from '@douyinfe/semi-icons';

import Reault from '@/components/Result';

import styles from './index.module.less';

export default () => {
	const { Paragraph, Title, Text } = Typography;
	return (
		<div>
			<Title heading={3} style={{ marginBottom: '24px' }}>
				Success 成功的结果
			</Title>
			<div className={styles.codeBox}>
				<Reault
					status={'success'}
					title={'Submitted successfully!'}
					subTitle={'We have received your application!'}
					extra={[
						<Button theme="solid" type="primary" key="console">
							Go Console
						</Button>,
						<Button key="buy">Buy Again</Button>,
					]}
				/>
			</div>
			<Title heading={3} style={{ margin: '32px 0 24px' }}>
				Info 展示处理结果
			</Title>
			<div className={styles.codeBox}>
				<Reault
					status={'info'}
					title={'There are some problems with your operation.'}
					extra={
						<Button theme="solid" type="primary">
							Go Home
						</Button>
					}
				/>
			</div>
			<Title heading={3} style={{ margin: '32px 0 24px' }}>
				Warning 警告类型的结果
			</Title>
			<div className={styles.codeBox}>
				<Reault
					status={'warning'}
					title={'Your operation has been executed'}
					extra={<Button key="buy">Back</Button>}
				/>
			</div>
			<Title heading={3} style={{ margin: '32px 0 24px' }}>
				Error 复杂的错误反馈
			</Title>
			<div className={styles.codeBox}>
				<Reault
					status={'error'}
					title={'Submission Failed'}
					subTitle={
						'Please check and modify the following information before resubmitting.'
					}
					extra={[
						<Button theme="solid" type="primary" key="console">
							Go Console
						</Button>,
						<Button key="buy">Buy Again</Button>,
					]}
				>
					<div className={styles.desc}>
						<Paragraph>
							<Text
								strong
								style={{
                                    fontSize: 16,
								}}
							>
								The content you submitted has the following error:
							</Text>
						</Paragraph>
						<Paragraph>
                            <IconClear className={styles.errorIcon} />{' '}
                            Your account name or password is incorrect.{' '}
                            <Text link={{ href: 'https://github.com/mk965/semi-design-admin' }}>Do it again &gt;</Text>
						</Paragraph>
						<Paragraph>
                            <IconClear className={styles.errorIcon} />{' '}
                            Your account does not have permission.{' '}
                            <Text link={{ href: 'https://github.com/mk965/semi-design-admin' }}>Apply for permission &gt;</Text>
						</Paragraph>
					</div>
				</Reault>
			</div>
		</div>
	);
};
