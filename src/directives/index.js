
export default {
  async install(app) {
    // glob批量动态导入指定的文件 返回一个对象{path：module} 这样就不用手动注册组件 但是是懒加载的（异步）
    // globEager === glob('',{eager:true}) 并非懒加载 导入该文件下所有export的模块
    //  glob('',{eager:true，import:'default'}) 导入该文件下export default的模块
    const directives =import.meta.globEager('./modules/*.js');
    // 遍历获取各模块对应path和组件 并注册到app
    for(const [key,value] of Object.entries(directives)){
        // ./module/lazy.js
        const directiveName = key.split('/')[2].split('.')[0];
        console.log(directiveName,value.default);
        app.directive(directiveName,value.default);
    }
  },
};
