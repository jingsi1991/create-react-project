#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改
console.log("creat-react-project working~");
import ora from "ora";

const message = "Loading message~";
// 初始化
const spinner = ora(message);
spinner.start();

setTimeout(() => {
  // 修改动画样式
  spinner.color = "red";
  spinner.text = "Loading message2";

  setTimeout(() => {
    spinner.stop(); // 停止
    spinner.succeed("loading succeed"); // 成功
    // spinner.fail(text?);  失败 ✖
    // spinner.warn(text?);  提示 ⚠
    // spinner.info(text?);  信息 ℹ
  }, 2000);
}, 2000);
