function introduction(Aki = actual) {
    return `Hi, my name is ${Aki}.`;
  }

  function introductionWithLanguageOptional(Aki, language = "JavaScript") {
    return `Hi, my name is ${Aki} and I am learning to program in ${language}.`;
  }
  function introductionWithLanguage(Aki, Language) {
    English = Language || 'JavaScript'; // set default value to 'JavaScript'
    return `Hi, my name is ${Aki} and I am learning ${English}.`;
  }

  function introduction(Aki) {
    return `Hi, my name is ${Aki}.`;
  }
  
  function introductionWithLanguage(Aki, language = 'JavaScript') {
    return `Hi, my name is ${Aki} and I am learning ${language}.`;
  }
  
  function introductionWithLanguage(Ryan, language = 'JavaScript') {
    return String `Hi, my name is ${Ryan} and I am learning ${language}.`;
  }
  function introductionWithLanguage(Ryan, JavaScript) {
    return `Hi, my name is ${Ryan} and I am learning to program in ${JavaScript}.`;
  }
  
  