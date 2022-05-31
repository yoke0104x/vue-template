module.exports = {
    types: [
        { value: "💥 feat", name: "💥 feat: 添加了个很棒的功能" },
        { value: "🐛 fix", name: "🐛 fix: 修复了一些 bug" },
        { value: "📝 docs", name: "📝 docs: 更新了一下文档" },
        { value: "🌷 UI", name: "🌷 UI: 修改了一下样式" },
        { value: "🏰 chore", name: "🏰 chore: 对脚手架做了些更改" },
        { value: "🌐 locale", name: "🌐 locale: 为国际化做了微小的贡献" },
    ],
    // scopes: [
    //     { name: 'leetcode' },
    //     { name: 'javascript' },
    //     { name: 'typescript' },
    //     { name: 'Vue' },
    //     { name: 'node' }
    // ],
    messages: {
        type: '请选择提交类型:',
        scope: '请输入修改的范围（可选）',
        // customScope: '请输入您修改的范围(必填):',
        subject: '请简要描述提交 message (必填):',
        body: '请输入详细描述(可选，待优化去除，跳过即可):',
        footer: '请输入要关闭的issue(待优化去除，跳过即可):',
        confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['特性', '修复'],
    skipQuestions: ['body', 'footer'],
    subjectLimit: 72,
}; 
