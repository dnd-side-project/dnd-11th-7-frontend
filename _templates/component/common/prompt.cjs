const toPascalCase = (str) => {
  return (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-([a-z])/g, (match, letter) => {
    return letter.toUpperCase();
  });
};

module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: 'input',
        name: 'component',
        message: '공통 컴포넌트 이름을 kebab-case로 입력해 주세요. (ex. button)',
      })
      .then(({ component }) => {
        if (!component) {
          throw new Error('컴포넌트 이름을 입력해 주세요.');
        }
        if (!RegExp(/^[a-zA-Z,-]*$/).test(component)) {
          throw new Error('영어로 입력해 주세요.');
        }

        return prompter
          .select({
            type: 'input',
            message: `<${toPascalCase(component)}/> 컴포넌트가 맞나요?`,
            choices: ['네', '아니요'],
          })
          .then((choices) => {
            if (choices === '아니요') {
              throw new Error('hygen component common으로 다시 시작해 주세요.');
            }

            return {
              component,
              args,
            };
          });
      }),
};
