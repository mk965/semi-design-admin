/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-03 21:43:12
 * @LastEditTime: 2022-02-06 11:57:15
 * @Description: Modify here please
 */
// import React from 'react'
// import { Empty } from '@douyinfe/semi-ui'
// import { IllustrationNoAccess, IllustrationNoAccessDark } from '@douyinfe/semi-illustrations'

// const Index: React.FC = () => {
// 	return (
// 		<Empty
// 			title={'403'}
// 			image={<IllustrationNoAccess style={{ width: 400, height: 400 }} />}
// 			darkModeImage={<IllustrationNoAccessDark style={{ width: 400, height: 400 }} />}
// 			description="403 无权限访问"
// 		></Empty>
// 	)
// }

// export default Index



import { Button } from '@douyinfe/semi-ui';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();


  return <>
    <h1>{t('Welcome to React')}</h1>
    {t('zh_CN')}
    <br/>
    {t('methods.renderProps')}
    <br/>
    <Button onClick={() => i18n.changeLanguage('zh_CN')}>{t('切换到中文')}</Button>
    <Button onClick={() => i18n.changeLanguage('en_GB')}>{t('切换到英语')}</Button>
    <Button onClick={() => i18n.changeLanguage('ja')}>{t('切换到日语')}</Button>
  </>
}

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}