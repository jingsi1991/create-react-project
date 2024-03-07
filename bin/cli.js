#! /usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import { createRequire } from "module";
import createAction from "../lib/create.js";
const require = createRequire(import.meta.url);
const pkgJson = require("../package.json");

// create 命令
program
  .command("create <app-name>")
  .description("create a new project")
  .option("-f, --force", "overwrite target directory if it exist")
  .action((name, options) => {
    console.log("name:", name, " options:", options);
    // 在create.js中执行穿甲任务
    createAction(name, options);
  });

// config 命令
program
  .command("config [value]")
  .description("inspect and modify the config")
  .option("-g, --get <path>", "get value from option")
  .option("-s, --set <path> <value>")
  .option("-d, --delete <path>", "delete option from config")
  .action((value, options) => {
    console.log(value, options);
  });

// ui 命令
program
  .command("ui")
  .description("start add open roc-cli ui")
  .option("-p, --port <port>", "Port used for the UI Server")
  .action((option) => {
    console.log(option);
  });

program.version(`v${pkgJson.version}`).usage("<command> [option]");

program.on('--help',()=>{
  console.log(`\r\nRun ${chalk.cyan(`create-react-project <command> --help`)} for detailed usage of given command\r\n`)
})

// 解析用户执行命令时传入的参数
program.parse(process.argv);
