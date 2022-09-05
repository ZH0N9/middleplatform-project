import { defineAsyncComponent } from "vue";

export default {
  install(app) {
    // glob 批量动态导入指定的模块 返回一个对象{path：module} 这样就不用手动注册组件
    const components =import.meta.glob('./*/index.vue');
    // 遍历获取各模块对应path和组件 并注册到app
    for(const [key,value] of Object.entries(components)){
        const componentName = key.replace('./','').split('/')[0];
        // defineAsyncComponent可以在需要改组件时异步加载组件
        app.component(componentName,defineAsyncComponent(value));
    }
  },
};
