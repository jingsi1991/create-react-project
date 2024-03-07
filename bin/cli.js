#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改
console.log("creat-react-project working~");
import { program } from "commander";

program
  .version('0.1.0')
  .command('create <name>')
  .description('create a new project')
  .action(name=>{
    // 打印命令行输入的值
    console.log('project name is ' + name)
  })

program.parse()
