import React, { Suspense } from 'react';
import { Layout } from '@douyinfe/semi-ui';
import Header from '../components/Header';
import Sider from '../components/Sider';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import SuspendFallbackLoading from '@/components/fallback-loading';
import { useTranslation } from 'react-i18next';

import './index.css';

const { Content } = Layout;

const Index: React.FC = () => {
	const { t } = useTranslation();
	return (
		<Layout className="layout-page">
			<Sider />
			<Layout style={{ backgroundColor: 'var(--semi-color-bg-1)' }} >
				<Header />
				<Content className="layout-content">
					<Suspense fallback={<SuspendFallbackLoading message={t('loading')} />}>
						<Outlet />
					</Suspense>
				</Content>
				<Footer />
			</Layout>
		</Layout>
	);
};

export default Index;
