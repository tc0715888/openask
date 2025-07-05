# VPS 部署文档 (1Panel + OpenResty)

本文档将指导您如何将此 React + Vite 项目部署到使用 1Panel 面板和 OpenResty 的 VPS 服务器上。

## 1. 服务器环境准备

在开始部署之前，请确保您的 VPS (Virtual Private Server) 已经安装了以下软件：

- **Node.js**: 建议使用 `v18.x` 或更高版本。
- **pnpm**: 本项目使用 pnpm作为包管理器。

您可以通过 SSH 连接到您的服务器后，使用以下命令检查或安装：

```bash
# 检查 Node.js 版本
node -v

# 检查 npm 版本 (pnpm 通常通过 npm 安装)
npm -v

# 如果没有安装 pnpm，请通过 npm 全局安装
npm install -g pnpm

# 检查 pnpm 版本
pnpm -v
```

如果您的服务器尚未安装 Node.js，可以参考 [Node.js 官方文档](https://nodejs.org/en/download/package-manager/) 或使用 `nvm` (Node Version Manager) 进行安装。

## 2. 部署步骤

### 步骤 1: 获取项目代码

将本项目的最新代码上传到您的服务器，或者通过 `git` 从代码仓库克隆。

```bash
# 示例：通过 git 克隆
git clone <your-repository-url>
cd <project-directory> # 进入项目根目录
```

### 步骤 2: 安装项目依赖

在项目根目录下，使用 `pnpm` 安装所有依赖项。

```bash
pnpm install
```

### 步骤 3: 打包构建项目

安装完依赖后，运行构建命令来生成生产环境的静态文件。

```bash
pnpm build
```

该命令执行成功后，会在项目根目录下生成一个 `dist` 文件夹，其中包含了所有部署所需的静态文件（如 HTML, CSS, JavaScript）。

### 步骤 4: 在 1Panel 中创建网站并上传文件

1.  **登录 1Panel**: 打开浏览器，输入您的服务器 IP 地址和端口号，登录到 1Panel 管理面板。

2.  **创建网站**:
    *   在左侧菜单中，选择 “网站”。
    *   点击 “创建网站” 按钮。
    *   选择 “静态网站”。
    *   输入您的域名，并根据需要配置其他选项（如备注、SSL 证书等）。
    *   设置网站根目录。例如，可以设置为 `/www/wwwroot/your-domain.com`。
    *   点击 “确认” 创建网站。

3.  **上传文件**:
    *   创建网站后，在左侧菜单中选择 “文件”。
    *   导航到您刚刚为网站设置的根目录（例如 `/www/wwwroot/your-domain.com`）。
    *   将本地计算机上项目中的 `dist` 文件夹内的 **所有内容** 上传到这个目录中。**注意**：是 `dist` 文件夹里的所有文件和文件夹，而不是 `dist` 文件夹本身。
    *   确保 `index.html` 文件位于网站根目录。

## 3. OpenResty 配置 (SPA 路由处理)

由于本项目是一个单页面应用 (SPA)，当用户直接访问一个非根路径（例如 `https://your-domain.com/features`）时，Web 服务器需要将请求重定向到 `index.html`，由前端路由来处理。

在 1Panel 中，您可以通过以下方式为您的网站配置这个重写规则：

1.  **进入网站设置**: 在 “网站” 列表中，找到您刚刚创建的网站，点击右侧的 “设置”。
2.  **配置伪静态**:
    *   在网站设置页面中，找到 “伪静态” 或 “Rewrite” 相关的配置选项卡。
    *   在配置框中输入以下规则。这个规则会检查请求的文件或目录是否存在，如果不存在，则将请求转发到 `/index.html`。

    ```nginx
    try_files $uri $uri/ /index.html;
    ```
    *   保存配置。OpenResty (其核心是 Nginx) 将会自动加载新配置。

## 4. 完成部署

完成以上步骤后，您的网站应该已经成功部署。在浏览器中访问您的域名，检查网站是否正常运行。

---

**部署摘要**:
- **构建**: `pnpm build` -> `dist` 目录。
- **服务器**: 使用 1Panel 创建静态网站。
- **上传**: 将 `dist` 目录下的 **内容** 上传到网站根目录。
- **配置**: 添加 `try_files $uri $uri/ /index.html;` 到 OpenResty (伪静态) 配置中以支持 SPA 路由。

---

# Cloudflare Pages 部署文档

当然可以！本项目是一个标准的 Vite + React 项目，非常适合通过 **Cloudflare Pages** 进行部署。Cloudflare Pages 提供了全球 CDN 加速、自动构建和部署、免费 SSL 等强大功能。

以下是通过 Cloudflare Pages 部署的详细步骤：

## 1. 准备工作

- **Cloudflare 账户**: 确保您有一个 Cloudflare 账户。
- **代码仓库**: 将您的项目代码推送到一个 **GitHub** 或 **GitLab** 仓库。Cloudflare Pages 通过连接 Git 仓库来实现自动部署。

## 2. 部署步骤

1.  **登录 Cloudflare**:
    *   登录到您的 [Cloudflare 仪表盘](https://dash.cloudflare.com/)。

2.  **创建 Pages 项目**:
    *   在左侧导航栏中，选择 **Workers & Pages**。
    *   点击 **创建应用程序**，然后选择 **Pages** 选项卡。
    *   点击 **连接到 Git 提供程序**，授权 Cloudflare 访问您的 GitHub 或 GitLab 账户。
    *   选择您要部署的项目仓库。

3.  **配置构建和部署**:
    *   **项目名称**: 为您的 Pages 项目起一个名字。
    *   **生产分支**: 选择您希望用于生产部署的分支（通常是 `main` 或 `master`）。
    *   **框架预设**: Cloudflare 非常智能，它会自动检测到您的项目是基于 **Vite** 的。如果没有自动选择，请手动选择 `Vite`。
    *   **构建命令**: 自动填充为 `npm run build`。由于我们使用 `pnpm`，请将其修改为 `pnpm build`。
    *   **构建输出目录**: 自动填充为 `dist`。这是正确的，无需更改。
    *   **环境变量 (可选)**: 如果您的项目需要环境变量（本项目暂时不需要），可以在这里添加。

4.  **保存并部署**:
    *   点击 **保存并部署**。
    *   Cloudflare Pages 会立即开始第一次构建和部署。您可以在部署详情页面查看实时日志。
    *   部署成功后，Cloudflare 会为您提供一个唯一的 `.pages.dev` 子域名（例如 `your-project.pages.dev`），您可以通过这个地址访问您的网站。

## 3. 自定义域名

如果您想使用自己的域名，可以非常方便地进行设置：

1.  在您的 Pages 项目仪表盘中，选择 **自定义域** 选项卡。
2.  点击 **设置自定义域**，并按照屏幕上的说明输入您的域名。
3.  如果您的域名 DNS 也是由 Cloudflare 管理的，Cloudflare 会自动为您添加所需的 CNAME 记录。如果不是，您需要手动在您的域名注册商处添加 CNAME 记录。

## 4. SPA 路由支持

Cloudflare Pages **默认支持** 单页面应用 (SPA)。它会自动将所有未匹配到静态文件的请求重定向到根目录的 `index.html` 文件，所以您 **无需** 进行任何额外的路由配置。

---

**Cloudflare Pages 部署摘要**:
- **前提**: 代码在 GitHub/GitLab 仓库中。
- **连接**: 在 Cloudflare 中创建 Pages 项目并连接到 Git 仓库。
- **构建配置**:
  - **框架预设**: `Vite`
  - **构建命令**: `pnpm build`
  - **输出目录**: `dist`
- **部署**: 保存后自动部署，并通过 `.pages.dev` 域名访问。
- **自定义域名**: 可选，通过 CNAME 记录指向 Cloudflare。
- **SPA 支持**: 默认开启，无需额外配置。