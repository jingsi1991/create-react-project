#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改
console.log("creat-react-project working~");
import { program } from "commander";
import chalk from "chalk";

program
  .version('0.1.0')
  .command('create <name>')
  .description('create a new project')
  .action(name=>{
    // 打印命令行输入的值
    console.log('project name is ' + name)
    
    // 文本样式
    console.log('project name is ' + chalk.bold(name))

    // 颜色
    console.log('project name is ' + chalk.cyan(name))
    console.log('project name is ' + chalk.green(name))

    // 背景色
    console.log('project name is ' + chalk.bgRed(name))

    // 组合使用
    console.log('project name is ' + chalk.rgb(4, 156, 219).underline(name))
  })

program.parse()
