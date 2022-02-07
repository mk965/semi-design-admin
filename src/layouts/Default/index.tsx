import React, { Suspense } from 'react';
import { Layout } from '@douyinfe/semi-ui';
import Header from '../components/Header';
import Sider from '../components/Sider';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import SuspendFallbackLoading from '@/components/fallback-loading';

// import './index.scss';

const { Content } = Layout;

const Index: React.FC = () => {
	return (
		<Layout className="layout-page">
			<Sider />
			<Layout>
				<Header />
				<Content className="layout-content">
					<Suspense fallback={<SuspendFallbackLoading message="正在加载中" />}>
						<Outlet />
					</Suspense>
				</Content>
				<Footer />
			</Layout>
		</Layout>
	);
};

export default Index;
