/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-03-23 22:16:27
 * @LastEditTime: 2022-03-23 22:19:05
 * @Description: 500 oage
 */

import React from "react";
import { Typography } from '@douyinfe/semi-ui';
import { IllustrationFailure, IllustrationFailureDark } from '@douyinfe/semi-illustrations';
import useStore from "@/store/common/global";
import styles from './index.module.less';

export default () => {
    const { Title } = Typography;
    const darkMode = useStore(state => state.darkMode);
    return (
        <div className={styles.pageWarp} style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            {
                darkMode ? <IllustrationFailureDark /> : <IllustrationFailure />
            }
            <div className={styles.pageTitle}>
                <Title>500</Title>
            </div>
        </div>
    )
}