#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改
console.log("creat-react-project working~");
import path from "path";
import fs from "fs";
import ejs from "ejs";
import inquirer from "inquirer";
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Your name", //  提示信息
      default: "create-react-project-cli", // 默认值
    },
  ])
  .then((answers) => {
    // 打印互动输入结果
    console.log(answers);
    // 模板文件目录
    const tempUrl = path.join(__dirname, "templates");
    // 生成文件目录
    // process.cwd(); 对应控制台所在目录
    const cwdUrl = process.cwd();

    // 从模板目录中读取文件
    fs.readdir(tempUrl, (err, files) => {
      if (err) throw err;
      console.log(files, "files");

      files.forEach((file) => {
        // 使用ejs渲染对应的模板文件
        // readerFile(模板文件地址，传入渲染数据)
        ejs.renderFile(path.join(tempUrl, file), answers).then((data) => {
          fs.writeFileSync(path.join(cwdUrl, file), data);
        });
      });
    });
  });
