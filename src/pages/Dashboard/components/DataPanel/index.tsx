import React from 'react';
import {
	Avatar,
	Col,
	Divider,
	Row,
	Typography,
	Space,
} from '@douyinfe/semi-ui';
import { IconSmallTriangleTop } from '@douyinfe/semi-icons';
const { Text } = Typography;
import styles from './index.module.less';
export default () => {
	return (
		<div className={styles.panel}>
			<Row gutter={16}>
				<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={6} className={styles.col}>
					<Space>
						<Avatar size='medium' className={styles.avatar}>
							<img alt='avatar' src='//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image'/>
						</Avatar>
                        <div className={styles.colContent}>
                            <Text className={styles.title}>线上总内容</Text>
                            <div className={styles.value}>
                                <Text className={styles.num}>431.2</Text>
                                <Text className={styles.suffix}>W+ 个</Text>
                            </div>
                        </div>
					</Space>
				</Col>
				<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={6} className={styles.col}>
					<Space>
						<Avatar size='medium' className={styles.avatar}>
							<img alt='avatar' src='//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fdc66b07224cdf18843c6076c2587eb5.svg~tplv-49unhts6dw-image.image'/>
						</Avatar>
                        <div className={styles.colContent}>
                            <Text className={styles.title}>投放中内容</Text>
                            <div className={styles.value}>
                                <Text className={styles.num}>526</Text>
                                <Text className={styles.suffix}>个</Text>
                            </div>
                        </div>
					</Space>
				</Col>
				<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={6} className={styles.col}>
					<Space>
						<Avatar size='medium' className={styles.avatar}>
							<img alt='avatar' src='//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image'/>
						</Avatar>
                        <div className={styles.colContent}>
                            <Text className={styles.title}>日新增评论</Text>
                            <div className={styles.value}>
                                <Text className={styles.num}>6,271</Text>
                                <Text className={styles.suffix}>个</Text>
                            </div>
                        </div>
					</Space>
				</Col>
				<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={6} className={styles.col}>
					<Space>
						<Avatar size='medium' className={styles.avatar}>
							<img alt='avatar' src='//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image'/>
						</Avatar>
                        <div className={styles.colContent}>
                            <Text className={styles.title}>较昨日新增</Text>
                            <div className={styles.value}>
                                <Text className={styles.num}>9.6</Text>
                                <Text className={styles.suffix}>% <IconSmallTriangleTop style={{color: "rgba(var(--semi-red-5), 1)", verticalAlign: "middle"}} /></Text>
                            </div>
                        </div>
					</Space>
				</Col>
			</Row>
			<Divider margin='20px' />
		</div>
	);
};
