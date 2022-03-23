/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-03-22 23:26:40
 * @LastEditTime: 2022-03-23 22:13:14
 * @Description: 403 page
 */

import React from "react";
import { Typography } from '@douyinfe/semi-ui';
import { IllustrationNoAccess, IllustrationNoAccessDark } from '@douyinfe/semi-illustrations';
import useStore from "@/store/common/global";
import styles from './index.module.less';

export default () => {
    const { Title } = Typography;
    const darkMode = useStore(state => state.darkMode);
    return (
        <div className={styles.pageWarp} style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            {
                darkMode ? <IllustrationNoAccessDark /> : <IllustrationNoAccess />
            }
            <div className={styles.pageTitle}>
                <Title>403</Title>
            </div>
        </div>
    )
}