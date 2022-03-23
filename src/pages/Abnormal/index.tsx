/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-03-22 23:14:54
 * @LastEditTime: 2022-03-22 23:21:15
 * @Description: 异常页
 */

import React from "react";
import { IllustrationNoAccess, IllustrationConstruction, IllustrationFailure } from '@douyinfe/semi-illustrations'

export default () => {
    return <>
        <IllustrationNoAccess />
        <IllustrationConstruction />
        <IllustrationFailure/>
    </>
}