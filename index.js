// index.js

// Function 1: introduction
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Function 2: introductionWithLanguage
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function 3: introductionWithLanguageOptional
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Export the functions
  module.exports = {
    introduction,
    introductionWithLanguage,
    introductionWithLanguageOptional,
  };