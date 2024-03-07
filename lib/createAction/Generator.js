import ora from 'ora'
import inquirer from 'inquirer';
import Api from '../http.js'

const wrapLoading = async (fn,message,...args)=>{
  const spinner = ora(message)
  spinner.start();

  try {
    // 执行传入的方法 fn
    const result = await fn(...args)
    // 状态修改为成功
    spinner.succeed();
    return result
  } catch (error) {
    // 状态修改为失败
    spinner.fail('Request failed, refetch ...')
  }
}

class Generator {
  constructor(name, targetDir){
    // 目录名称
    this.name = name
    // 创建位置
    this.targetDir = targetDir
  }

  /**
   * 获取用户选择的模板
   *  1、从远程拉取模板数据
   *  2、用户选择自己想下载的模板名称
   *  3、return 用户选择的名称
   * */ 
  async getRepo(){
    const repoList = await wrapLoading(Api.getRepoList,'waiting fetch template')
    if(!repoList) return;
    const repos= repoList.map(item=>item.name)
    
    const { templateName } =await inquirer.prompt([
      {
        type: 'list',
        name: 'templateName',
        message: 'Please choose a template to create project',
        choices: [...repos]
      }
    ])

    return templateName
  }

  /**
   * 获取用户选择的模板对应的tag
   *  1、基于repo 拉取远程对应的tab列表
   *  2、用户选择自己需要下载的tag
   *  3、返回tag名称
   * @returns 
   */
  async getTag(repo){
    const tags = await wrapLoading(Api.getTagList,'waiting fetch tag',repo)
    if(!tags) return;

    const tagsLis= tags.map(item=>item.name)
    
    const { tagName } =await inquirer.prompt([
      {
        type: 'list',
        name: 'tagName',
        message: 'Please choose a tag to create project',
        choices: [...tagsLis]
      }
    ])

    return tagName
  }
  /**
   * 核心创建逻辑
   *  1、获取模板名称
   *  2、获取tag名称
   *  3、下载模板到目标目录
   */
  async create(){
    const repoName = await this.getRepo()

    const tagName = await this.getTag(repoName)

    console.log('用户选了，repo=',repoName, '，tag=', tagName)
  }
}

export default Generator