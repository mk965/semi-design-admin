/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-02 22:45:47
 * @LastEditTime: 2022-02-06 12:34:40
 * @Description: 路由配置
 */

import React, { FC, Suspense } from 'react';
import { RouteProps } from 'react-router';
import PrivateRoute from './privateRoute';
import SuspendFallbackLoading from '@/components/fallback-loading';
import { useTranslation } from 'react-i18next';

export interface WrapperRouteProps extends RouteProps {
	/** document title id */
	titleId: string;
	/** authorization？ */
	auth?: boolean;
}

const PublicRoute = (props) => {
	return props.element;
};

const WrapperRouteComponent: FC<WrapperRouteProps> = ({
	titleId,
	auth,
	...props
}) => {
	const { t } = useTranslation();
	const WitchRoute = auth ? PrivateRoute : PublicRoute;
	if (titleId) {
		document.title = t(titleId);
	}
	return <WitchRoute {...props} />;
};

const WrapperRouteWithOutLayoutComponent: FC<WrapperRouteProps> = ({
	titleId,
	auth,
	...props
}) => {
	if (titleId) {
		const { t } = useTranslation();
		document.title = t(titleId);
	}

	return (
		<Suspense fallback={<SuspendFallbackLoading message="正在加载中" />}>
			{props.element}
		</Suspense>
	);
};

export { WrapperRouteComponent, WrapperRouteWithOutLayoutComponent };
