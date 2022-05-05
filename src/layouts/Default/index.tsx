import React, { Suspense } from 'react';
import { Layout } from '@douyinfe/semi-ui';
import Header from '../components/Header';
import Sider from '../components/Sider';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import SuspendFallbackLoading from '@/components/fallback-loading';
import { useTranslation } from 'react-i18next';
import useResponsive from '@/hooks/responsive';
import useStore from '@/store/common/global';

import './index.css';

const { Content } = Layout;

const Index: React.FC = () => {
	useResponsive(true);
	const { t } = useTranslation();
	const hideMenu = useStore((state) => state.hideMenu);
	return (
		<Layout className={`"layout-page" ${hideMenu ? 'mobile' : '' }`} hasSider>
			<Sider />
			<Layout style={{ backgroundColor: 'var(--semi-color-bg-0)' }}>
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
