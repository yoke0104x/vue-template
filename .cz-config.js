module.exports = {
    types: [
        { value: "ð¥ feat", name: "ð¥ feat: æ·»å äºä¸ªå¾æ£çåè½" },
        { value: "ð fix", name: "ð fix: ä¿®å¤äºä¸äº bug" },
        { value: "ð docs", name: "ð docs: æ´æ°äºä¸ä¸ææ¡£" },
        { value: "ð· UI", name: "ð· UI: ä¿®æ¹äºä¸ä¸æ ·å¼" },
        { value: "ð° chore", name: "ð° chore: å¯¹èææ¶åäºäºæ´æ¹" },
        { value: "ð locale", name: "ð locale: ä¸ºå½éååäºå¾®å°çè´¡ç®" },
    ],
    // scopes: [
    //     { name: 'leetcode' },
    //     { name: 'javascript' },
    //     { name: 'typescript' },
    //     { name: 'Vue' },
    //     { name: 'node' }
    // ],
    messages: {
        type: 'è¯·éæ©æäº¤ç±»å:',
        // scope: 'ä¿®æ¹çæ¨¡ååç§°(å¯é):',
        customScope: 'ä¿®æ¹çæ¨¡ååç§°(å¯é):',
        subject: 'è¯·ç®è¦æè¿°æäº¤ message (å¿å¡«):',
        body: 'è¯·è¾å¥è¯¦ç»æè¿°(å¯éï¼å¾ä¼åå»é¤ï¼è·³è¿å³å¯):',
        footer: 'è¯·è¾å¥è¦å³é­çissue(å¾ä¼åå»é¤ï¼è·³è¿å³å¯):',
        confirmCommit: 'ç¡®è®¤ä½¿ç¨ä»¥ä¸ä¿¡æ¯æäº¤ï¼(y/n/e/h)',
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['ç¹æ§', 'ä¿®å¤'],
    skipQuestions: ['body', 'footer'],
    subjectLimit: 72,
}; 
