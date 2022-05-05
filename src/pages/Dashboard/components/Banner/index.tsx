import React from "react";
import { Col, Divider, Row, Typography } from '@douyinfe/semi-ui';
const { Title } = Typography;
import styles from './index.module.less';
export default () => { 
    return (
        <div className={styles.banner}>
            <Row>
                <Col span={8}>
                    <div>
                        <Title heading={5}>Hello zmk </Title>
                    </div>
                </Col>
            </Row>
            <Divider style={{ marginTop: '20px' }} />
        </div>
    )
}