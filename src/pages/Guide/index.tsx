/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-12 14:46:56
 * @LastEditTime: 2022-02-12 20:05:05
 * @Description: Modify here please
 */

import React, { useEffect } from 'react';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css'; // import driver.js css
import step from './step';
import { Button } from '@douyinfe/semi-ui';

// export default React.memo(
// 	() => {
//         console.log('effetc');
// 		useEffect(() => {
//             driver.defineSteps(step);
// 			guide();
// 		}, []);
// 		const guide = () => {
// 			if (driver) {
//                 driver.start();
// 			}
// 		};
// 		return (
// 			<>
// 				<div id="step1">这是第1步</div>
// 				<div id="step2">这是第2步</div>
// 				<div>这是第2步</div>
// 				<div>这是第2步</div>
// 				<div>这是第2步</div>
// 				<div className="app-container">
// 					<aside>
// 						The guide page is useful for some people who entered the project for
// 						the first time. You can briefly introduce the features of the
// 						project. Demo is based on
// 						<a
// 							href="https://github.com/kamranahmedse/driver.js"
// 							target="_blank"
// 						>
// 							driver.js.
// 						</a>
// 					</aside>
// 				</div>
// 				<Button onClick={guide}>Show Guide</Button>
// 				<button onClick={guide}>asd</button>
// 			</>
// 		);
// 	},
// 	(prevProps, nextProps) => {
// 		console.log(prevProps, nextProps);
// 		return false;
// 	}
// );


class App extends React.PureComponent {
    state = {driver: null};
    constructor(props) {
        super(props);
        this.state = {
            driver: new Driver()
        }
    }
    componentDidMount(): void { }
    guide = () => {
        this.state.driver.defineSteps(step);
        this.state.driver.start();
    }
	render(): React.ReactNode {
		return (
			<>
				<div id="step1">这是第1步</div>
				<div id="step2">这是第2步</div>
				<div className="app-container">
					<aside>
						The guide page is useful for some people who entered the project for
						the first time. You can briefly introduce the features of the
						project. Demo is based on
						<a
							href="https://github.com/kamranahmedse/driver.js"
							target="_blank"
						>
							driver.js.
						</a>
					</aside>
				</div>
				<Button onClick={this.guide}>Show Guide</Button>
				<button onClick={this.guide}>asd</button>
			</>
		);
	}
}

export default App
