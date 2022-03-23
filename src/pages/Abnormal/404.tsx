/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-03-22 23:43:08
 * @LastEditTime: 2022-03-23 22:15:40
 * @Description: 404 page
 */

import React from "react";
import { Typography } from '@douyinfe/semi-ui';
import { IllustrationNotFound, IllustrationNotFoundDark } from '@douyinfe/semi-illustrations';
import useStore from "@/store/common/global";
import styles from './index.module.less';

export default () => {
    const { Title } = Typography;
    const darkMode = useStore(state => state.darkMode);
    return (
        <div className={styles.pageWarp} style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            {
                darkMode ? <IllustrationNotFoundDark /> : <IllustrationNotFound />
            }
            <div className={styles.pageTitle}>
                <Title>404</Title>
            </div>
        </div>
    )
}