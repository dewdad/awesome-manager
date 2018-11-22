module.exports = {
  prompt: ({
    inquirer
  }) => {
    // defining questions in arrays ensures all questions are asked before next prompt is executed
    const questions = [
      {
        type: "input",
        name: "packages",
        message: 'packages names? (separate by comma: "vue,vuex,vue-router")',
      },
    ];

    return inquirer.prompt(questions).then(answers => {
      console.log(answers);
      return answers;
    });
  },
};