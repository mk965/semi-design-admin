/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-03 21:43:12
 * @LastEditTime: 2022-05-05 22:24:12
 * @Description: 仪表盘工作台
 */

import { Card } from '@douyinfe/semi-ui';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.less';
import Banner from './components/Banner';
import DataPanel from './components/DataPanel';

// function MyComponent() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.leftSide}></div>
//       <div className={styles.rightSide}></div>
//     </div>
//   )
// }

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default () => {
  return (
    <Suspense fallback="loading">
      {/* <MyComponent /> */}
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.panel}>
            <Banner />
            <DataPanel />
            {/* <ContentChart />? */}
          </div>
        </div>
        <div className={styles.rightSide}>2</div>
      </div>
    </Suspense>
  );
}