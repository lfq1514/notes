// 获取 gulp
const { series,parallel } = require('gulp')
var gulp = require('gulp')

// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify')

//=======处理css样式模块======
//
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const rename = require("gulp-rename");
const less = require('gulp-less');

//======压缩图片模块=======
const tinypng_nokey = require('gulp-tinypng-nokey')

//=====合并文件=======
const concat =require('gulp-concat')

const htmlmin=require('gulp-htmlmin')

const connectServer=require('gulp-connect')


// ======压缩 js 文件=======
function miniJs(){
    return gulp.src('js/*.js')
    // 2. 压缩文件
        .pipe(uglify())
    // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
}

//task写法（已不推荐使用）
// gulp.task('miniJs',()=>{
//     return gulp.src('js/*.js')
//     // 2. 压缩文件
//         .pipe(uglify())
//     // 3. 另存压缩后的文件
//         .pipe(gulp.dest('dist/js'))
// })

//=====编译，压缩，重命名css=======
function miniCss(){
    return gulp.src(['less/*.less'])
    .pipe(less()) // 通过sass插件将sass编译为css，如果需要编译less，则改用less插件
    .pipe(autoprefixer({//自动补全css3前缀
    cascade: false
    }))
    .pipe(gulp.dest('./dist/css'))//先输出未压缩的css
    .pipe(cleancss()) //压缩css
    .pipe(rename({ //重命名
    suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css'));//输出最后经压缩，重命名的css
}

//=====压缩图片======

function miniImage(){
   return  gulp.src('image/*.{png,jpg,jpeg,gif,ico}')
        .pipe(tinypng_nokey())
        .pipe(gulp.dest('./dist/image'));
}

//=====复制文件======

//1. async await写法
async  function copyFile(){
    await gulp.src('./static/**')
    .pipe(gulp.dest('./dist/static'))
}

// 2. 返回流
  function copyFile(){
    return  gulp.src('./static/**')
    .pipe(gulp.dest('./dist/static'))
}

//=====合并文件-=====
function mergeFile(){
   return  gulp.src("./utils/*.js")
        .pipe(concat("main.js"))//合并
        .pipe(uglify())//压缩
        .pipe(rename("main.min.js"))//重命名
        .pipe(gulp.dest("./dist"))

}

//html压缩
function miniHtml(){
    const options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        babel:true,
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src('./*.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('./dist/html'))
    

}

//===启动服务======
function server(){
    series(miniHtml,miniJs,miniCss,miniImage,copyFile,mergeFile)()
    connectServer.server({
        root:'dist/html',
        port:8080,
        livereload:true
    })
}

//监听js文件的更改，自动压缩代码
function auto(){
    return  gulp.watch('js/*.js',{}, miniJs)
    .pipe()
     
 }


exports.miniHtml=miniHtml

exports.miniJs=miniJs

exports.miniCss=miniCss

exports.miniImage=miniImage

exports.copyFile=copyFile

exports.mergeFile=mergeFile


exports.auto=auto

exports.server=server

exports.default=series(miniJs,miniCss,miniImage,copyFile,mergeFile)


// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 script 任务和 auto 任务
// exports.build=series(script,auto)
