import babel from 'rollup-plugin-babel'
export default {
    input:'./src/index.js',
    output:{
        format:'umd',
        name:'Vue',//打包出的模块名字，并会将打包出的模块，挂载到vue上
        file:'dist/vue.js',
        sourcemap:true,//es6-es5源码映射
    },
    plugins:[
        babel({
            exclude:'node_modules/**',

        })
    ]

}
