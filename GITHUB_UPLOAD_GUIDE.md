# 将项目上传到 GitHub 指南

本文档将指导您如何将本地项目上传到 GitHub 仓库。

## 准备工作

1.  **安装 Git**: 确保您的本地计算机已经安装了 Git。您已经通过了此项检查。
2.  **创建 GitHub 仓库**:
    *   访问 [https://github.com/new](https://github.com/new)。
    *   为您的仓库命名（例如，`my-awesome-project`）。
    *   根据需要选择公开 (Public) 或私有 (Private)。
    *   **重要**: 不要勾选初始化仓库的任何选项 (Add a README file, Add .gitignore, Choose a license)。
    *   点击 “Create repository”。
    *   创建后，复制页面上提供的仓库 URL，格式为 `https://github.com/<Your-Username>/<Your-Repository-Name>.git`。

## 上传步骤

请在您的项目根目录（`d:\TRAE\shadcn-ui`）中，按顺序执行以下命令。请将 `<Your-Repository-URL>` 替换为您刚刚复制的 GitHub 仓库 URL。

### 步骤 1: 初始化本地 Git 仓库

如果您的项目尚未初始化为 Git 仓库，请运行此命令。它只会在您的项目根目录中创建一个 `.git` 文件夹。

```bash
git init
```

### 步骤 2: 将所有文件添加到暂存区

此命令会将当前目录下的所有文件和文件夹添加到 Git 的暂存区，准备进行提交。

```bash
git add .
```

### 步骤 3: 提交文件到本地仓库

提交您暂存的文件，并附上一条提交信息。`"Initial commit"` 是一个常见的首次提交信息。

```bash
git commit -m "Initial commit"
```

### 步骤 4: 切换到 main 分支（推荐）

为了与 GitHub 的默认分支保持一致，建议将主分支命名为 `main`。

```bash
git branch -M main
```

### 步骤 5: 关联远程 GitHub 仓库

将您的本地仓库与您在 GitHub 上创建的远程仓库关联起来。 **请务必将下面的 URL 替换为您自己的仓库 URL**。

```bash
git remote add origin <Your-Repository-URL>
```

**如何验证是否关联成功？**

您可以运行 `git remote -v`，如果看到类似以下的输出，说明关联成功：
```
origin  https://github.com/<Your-Username>/<Your-Repository-Name>.git (fetch)
origin  https://github.com/<Your-Username>/<Your-Repository-Name>.git (push)
```

### 步骤 6: 推送代码到 GitHub

最后，将您本地的 `main` 分支推送到远程的 `origin` 仓库。

```bash
git push -u origin main
```

`-u` 参数会将本地 `main` 分支与远程 `main` 分支关联起来，这样未来您只需要运行 `git push` 即可推送更新。

---

完成以上所有步骤后，刷新您的 GitHub 仓库页面，您应该就能看到所有的项目文件了。