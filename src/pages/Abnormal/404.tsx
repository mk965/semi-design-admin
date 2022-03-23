/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-03-22 23:43:08
 * @LastEditTime: 2022-03-22 23:44:20
 * @Description: 404 page
 */

import React from "react";
import { Typography } from '@douyinfe/semi-ui';
import { IllustrationNotFound, IllustrationNoAccessDark } from '@douyinfe/semi-illustrations';
import styles from './index.module.less';

export default () => {
    const { Title } = Typography;
    return (
        <div className={styles.pageWarp} style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            <IllustrationNotFound />
            <IllustrationNoAccessDark/>
            <div className={styles.pageTitle}>
                <Title>404</Title>
            </div>
        </div>
    )
}