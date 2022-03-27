import React, { FC } from 'react';
import { Spin, Banner } from '@douyinfe/semi-ui';
import { useTranslation } from 'react-i18next';

interface FallbackMessageProps {
	message: string
	description?: string
}

const SuspendFallbackLoading: FC<FallbackMessageProps> = ({ message, description }) => {
	const { t } = useTranslation();
	return (
		<Spin tip={t('loading')}>
			<Banner
				fullMode={false}
				type="info"
				bordered
				icon={null}
				closeIcon={null}
				description={<div>{description}</div>}
				style={{minHeight: '100px'}}
			/>
		</Spin>
	)
}

export default SuspendFallbackLoading
