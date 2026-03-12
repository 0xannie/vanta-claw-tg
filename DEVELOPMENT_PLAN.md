# Vanta DEX 详细开发计划

## 基础信息
- 项目基础：https://github.com/0xannie/vanta (OrderlyOne模板)
- Orderly SDK版本：2.10.1
- 框架：React + Vite + Tailwind CSS
- 设计来源：Figma + Axure

## 阶段一：需求分析与设计映射（1天）
### 1.1 功能清单对比
| 功能模块 | OrderlyOne已有 | Vanta需求 | 状态 |
|---------|--------------|----------|------|
| 合约交易 | ✅ | ✅ | 复用 |
| 现货交易 | ✅ | ✅ | 复用 |
| 行情页面 | ✅ | ✅ | 复用 |
| 投资组合 | ✅ | ✅ | 复用 |
| 资产页面 | ✅ | ✅ | 复用 |
| 排行榜 | ✅ | ✅ | 复用 |
| 代理系统 | ❌ | ✅ | 需开发 |
| 创世积分 | ❌ | ✅ | 需开发 |
| Starchild AI | ❌ | ✅ | 需开发 |

### 1.2 页面映射
| Vanta页面 | OrderlyOne对应 | 定制内容 |
|----------|---------------|---------|
| 合约交易 | perp/ | Dark Mode主题 |
| 现货 | swap/ | Dark Mode主题 |
| 行情 | markets/ | Dark Mode主题 |
| 投资组合 | portfolio/ | Dark Mode主题 |
| 资产 | vaults/ | Dark Mode主题 |
| 排行榜 | leaderboard/ | Dark Mode主题 |
| 代理系统 | 新建 | 完整开发 |
| 创世积分 | points/扩展 | 定制开发 |

## 阶段二：UI主题定制（2-3天）
### 2.1 Design System提取
- 从Figma提取颜色变量
- 从Figma提取字体样式
- 从Figma提取组件样式

### 2.2 Dark Mode实现
- Tailwind配置定制
- CSS变量定义
- Orderly UI组件主题覆盖

### 2.3 品牌定制
- Logo替换
- Favicon替换
- 页面标题和meta信息

## 阶段三：特殊功能开发（3-4天）
### 3.1 代理系统
- 推荐码生成
- 代理数据展示
- 佣金统计

### 3.2 创世积分
- 积分展示
- 积分规则说明
- 积分历史

### 3.3 Starchild AI集成
- Chatbot界面
- API对接
- 上下文传递（brokerId）

## 阶段四：配置与测试（1-2天）
### 4.1 配置
- brokerId配置
- 网络配置（Testnet/Mainnet）
- 钱包连接配置

### 4.2 测试
- Testnet完整流程测试
- 功能验证
- UI兼容性检查

## 阶段五：部署（1天）
- 生产构建
- 部署准备
- 上线验证

## 总工期估计
- 基础UI定制：2-3天
- 特殊功能开发：3-4天
- 测试配置：1-2天
- 总计：7-9天（不含等待时间）

## 前置依赖
- ✅ 设计资料（Figma + Axure）
- ⏳ brokerId
- ⏳ Starchild AI集成文档
- ⏳ 代理系统详细需求
- ⏳ 创世积分详细需求

## 风险与备注
1. 代理系统和创世积分需求待明确，可能影响工期
2. Starchild AI集成方式待确认
3. 先只实现Dark Mode，Light Mode等Orderly SDK更新
