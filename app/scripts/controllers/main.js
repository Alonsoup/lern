'use strict';

/**
 * @ngdoc function
 * @name lernApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lernApp
 */
angular.module('lernApp')
  .controller('MainCtrl', function () {
    this.data = {
    title: "Conditional Statements",
    description: "You will learn how you can modify the flow of your program depending on certain conditions.",
    video_url: "https://www.youtube.com/embed/1Osb_iGDdjk",
    important_points: ["Booleans are a data type with a value of either true or false",
                      "An operator is a way of taking one or more values to produce a single result.",
                      "The code that is executed as a result of a conditional statement is called a block."],
    recommended_reads: [{title: "CrashCourse: Boolean Logic & Logic Gates.",
                        link: "https://www.youtube.com/watch?v=gI-qXk7XojA"},
                        {title: "JavaScript: The Good Parts (Book)",
                        link: "https://www.amazon.com.mx/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"}
                      ],
    quiz: [{question: "An if statement is the only way to change the flow of a program.",
            options: ["true", "false"],
            answer: "false",
            follow_up: "That's right. Loops and functions also alter the flow of a program."
          },
          {question: "The following expression evaluates to true: !5<3 .",
            options: ["true", "false"],
            answer: "true",
            follow_up: "That's right. It's false that 5 is less than 3, but the ! operator reverses the false into true."
          }],
    };
    this.showQuiz = false;
    this.counter = 0;

    this.goToQuiz = function() {
      this.showQuiz = true;
    };

    this.backToVid = function() {
      this.showQuiz = false;
    };

    this.checkAnswer = function(option) {
      if (option == this.data.quiz[this.counter].answer) {
        this.counter ++;
        if (this.counter == this.data.quiz.length) {
          console.log('You passed the quiz.');
        }
      } else {
        console.log('Dumbass!');
      }
    };
  });
