/*
 * @Author: Mengke
 * @LastEditors: Mengke
 * @email: z9mk65@gmail.com
 * @Date: 2022-02-20 20:21:44
 * @LastEditTime: 2022-03-19 22:37:10
 * @Description: Modify here please
 */

const files = import.meta.globEager("../../assets/icons/*.svg");
// const modules: any = {};
const modules: any = [];

for (const key in files) {
    if (Object.prototype.hasOwnProperty.call(files, key)) {
        // modules[key.replace(/(\.\/|\.svg)/g, '')] = files[key].default;
        modules.push(files[key].default);
    }
}

export default modules;