#! /usr/bin/env node

import { program } from 'commander'
import { createRequire } from "module";
import createAction from '../lib/create.js'
const require = createRequire(import.meta.url);
const pkgJson = require('../package.json')

program
  .command('create <app-name>')
  .description('create a new project')
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options)=>{
    console.log('name:',name,' options:',options)
    // 在create.js中执行穿甲任务
    createAction(name,options)
  })

program
  .version(`v${pkgJson.version}`)
  .usage('<command> [option]')

  // 解析用户执行命令时传入的参数
program.parse(process.argv)