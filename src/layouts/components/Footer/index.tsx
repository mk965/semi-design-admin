import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import { IconBytedanceLogo } from '@douyinfe/semi-icons';

export default () => {
	const { Footer } = Layout;
	const onSelect = (e: any) => {
		if (e && e.itemKey) {
			// history.push(e.itemKey)
		}
	};
	return (
		<Footer
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '20px',
				color: 'var(--semi-color-text-2)',
				backgroundColor: 'rgba(var(--semi-grey-0), 1)',
			}}
		>
			<span
				style={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
				<span>Copyright © 2022 Mengke. All Rights Reserved. </span>
			</span>
			<span>
				<span style={{ marginRight: '24px' }}>平台客服</span>
				<span>反馈建议</span>
			</span>
		</Footer>
	);
};
