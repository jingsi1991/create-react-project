import path from "path";
import fs from "fs-extra";

export default async function (name, options) {
  // 验证是否正常取到值
  console.log(">>> create.js", name, options);

  const cwd = process.cwd();
  // 需要创建的目标目录
  const targetDir = path.join(cwd, name);
  // 目标目录是否已经存在
  if (fs.existsSync(targetDir)) {
    // 是否强制创建
    if (options.force) {
      await fs.remove(targetDir);
    } else {
      // TODO：询问用户是否确定覆盖
      console.log('询问用户是否确定覆盖')
    }
  }else{
    console.log('目标目录不存在')
  }
}
