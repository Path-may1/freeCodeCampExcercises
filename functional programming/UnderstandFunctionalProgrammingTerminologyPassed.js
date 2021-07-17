//Understand Functional Programming TerminologyPassed

//Function that is a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

//Function that is a string representing a cup of Black tea
const prepareBlackTea = () => 'BlackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  for(let  i = 0; i<= numOfCups; i++){
    const teaCup =  prepareTea();
    teaCups.push(teaCup)
  }
    return teaCups;
};   

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log (tea4GreenTeamFCC, tea4BlackTeamFCC);
//console.log(tea4BlackTeamFCC);
