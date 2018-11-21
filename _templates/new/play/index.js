module.exports = {
  prompt: ({
    inquirer
  }) => {
    // defining questions in arrays ensures all questions are asked before next prompt is executed
    const questions = [{
        type: "input",
        name: "model",
        message: "Name of model? (ex: Test)",
        validate(value) {
          if (!value.length) {
            return "Vuex ORM models must have a name, better capitalized.";
          }
          if (value.indexOf("-") !== -1) {
            return "Component names should contain one word, better capitalized.";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "fieldName",
        message: "Default Field Name:(i.e. title)",
        validate(value) {
          if (!value.length) {
            return "Field muest have a name, better lowercase";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "fieldType",
        message: "Default Field type:(i.e. string, number, boolean, attr)",
        validate(value) {
          if (!value.length) {
            return "Field muest have a name, better lowercase";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "fieldValue",
        message: "Default Field Value:(i.e. coder)",
        validate(value) {
          if (!value.length) {
            return "Field muest have a name, better lowercase";
          }
          return true;
        },
      },
      {
        type: "confirm",
        name: "toInputMoreFields",
        message: "Do you need to input more fields",
      },
      {
        type: "input",
        name: "fieldNames",
        message: 'Field names? (separate by comma: "field1, field2,field3")',
      },
    ];

    return inquirer.prompt(questions).then(answers => {
      const {
        fieldNames
      } = answers;
      const questions = [];

      // these values can be retrieved in the template with: eval(field + '-type')
      fieldNames.split(",").forEach(field => {
        // add more questiongs
        questions.push(
          // NOTE 
          // add fieldNames from string format to object format to answers
          {
            type: "input",
            name: field + "Type",
            message: `${field} type is required`,
          }, {
            type: "input",
            name: field + "Value",
            message: `${field} value is required`,
          });
      });

      // both set of answers must be returned as a merged object, else the previous set of answers won't be available to the templates
      // fieldNames = "field1, field2, field3"
      // nextAnswers = { "field2-type": "string", "field2-value": "xxx" }
      // answers = { "field2-name": "title", "field2-type": "string", "field2-value": "xxx" }

      return inquirer
        .prompt(questions)
        .then(nextAnswers => Object.assign({}, answers, nextAnswers));
    });
  },
};