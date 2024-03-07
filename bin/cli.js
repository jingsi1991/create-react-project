#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改
console.log("creat-react-project working~");
import spawn from "cross-spawn";
import chalk from "chalk";

// 定义需要安装的依赖
const dependencies = ['react', 'react-dom', 'axios']

// 执行安装
const child = spawn('npm',['install','-D'].concat(dependencies),{
  stdio: 'inherit'
})

// 监听执行结果
child.on('close',(code)=>{
  if(code !== 0){
    // 执行失败
    console.log(chalk.red('Error occurred while installing dependencies'));
    process.exit(1)
  }else{
    // 执行成功
    console.log(chalk.cyan('Install finished'))
  }
})
