const cricContainer = document.querySelector('.cric_container');
const currentmatch = document.querySelector('.current_match');
const matchdeatails = document.querySelector('.match_details');
const matchdetailscontent = document.querySelector('.match_details_content');


const fectchcurrentscore = async (value) => {
  const data = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=0a55bb27-b949-47f5-b778-75dd29ddfbd0&offset=0`);
  const response = await data.json();
  cricContainer.textContent = "";
  response.data.forEach(data => {
    const matchDiv = document.createElement('div');
    matchDiv.classList.add('matchscore');
    try {
      matchDiv.innerHTML = `
        <h2>${data.name}</h2>
        <h3><span>${data.matchType}</span> ${data.dateTimeGMT}</h3>
        <h4>${data.teams['0']} </h4>
        <p>Run = ${data.score['0']['r']} </p>
        <p> Wicket = ${data.score['0']['w']} </p>
        <p> Over = ${data.score['0']['o']} </p>
        <h4>${data.teams['1']} </h4> 
        <p>Run = ${data.score['1']['r']} </p>
        <p>Wicket = ${data.score['1']['w']} </p>
        <p> Over = ${data.score['1']['o']} </p>
        <div class="status">${data.status}</div>
        `
    } catch (error) {
      console.log('jai ho')
    }
    cricContainer.appendChild(matchDiv);
  })
  console.log(response);
}

currentmatch.onclick = (e) => {
  e.preventDefault()
  for (let i = 0; i < 1; i++) {
    fectchcurrentscore(i)
    // console.log(i)
  }
}
