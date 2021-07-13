const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'BlackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/

const getTea = function (prepareTea, numOfCups) {
  let teamCups = [];
  for (let i = 0; i < numOfCups; i++) {
    const teaCup = prepareTea();
    teamCups.push(teaCup)
  }
  return teamCups;
}

const teamCupsGreenFcc = getTea(prepareGreenTea, 4);
const teamCupsBlackFcc = getTea(prepareBlackTea, 2);

console.log(teamCupsGreenFcc, teamCupsBlackFcc);















