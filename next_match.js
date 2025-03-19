// const nextmatch = document.querySelector('.next_match');
// const CricContainer = document.querySelector('.cric_container');

// const fetchnextmatch = async (value) => {
//     const data = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=0a55bb27-b949-47f5-b778-75dd29ddfbd0&offset=0`);
//     const response = await data.json();
//     CricContainer.textContent = "";
//     response.data.forEach(data => {
//       const nextmatchDiv = document.createElement('div');
//       nextmatchDiv.classList.add('nextmatchscore');
//       try {
//         nextmatchDiv.innerHTML = `
//           <h2>${data.name}</h2>
//           <h3><span>${data.matchType}</span> ${data.dateTimeGMT}</h3>
//           <p>${data.teams['0']} </p>
//           <p>${data.teams['1']} </p> 
//           <div class="status">${data.status}</div>
//           `
//       } catch (error) {
//         console.log('jai ho')
//       }
//       CricContainer.appendChild(nextmatchDiv);
//     })
  
//   }
  
//   nextmatch.onclick = (e) => {
//     e.preventDefault();
//     for (let i = 0; i < 1; i++) {
//       fetchnextmatch(i);
//     }
//   }
  
const nextmatch = document.querySelector('.next_match');
const CricContainer = document.querySelector('.cric_container');

const fetchnextmatch = async () => {
    try {
        const data = await fetch(`https://api.cricapi.com/v1/matches?apikey=0a55bb27-b949-47f5-b778-75dd29ddfbd0&offset=0`);
        const response = await data.json();

        if (!response.data) {
            throw new Error("No upcoming match data available.");
        }

        CricContainer.textContent = "";
        response.data.forEach(match => {
            const nextmatchDiv = document.createElement('div');
            nextmatchDiv.classList.add('nextmatchscore');

            nextmatchDiv.innerHTML = `
                <h2>${match.name}</h2>
                <h3><span>${match.matchType}</span> ${match.dateTimeGMT}</h3>
                <p>${match.teams[0]}</p>
                <p>${match.teams[1]}</p> 
                <div class="status">${match.status}</div>
            `;

            CricContainer.appendChild(nextmatchDiv);
        });

    } catch (error) {
        console.error("Error fetching next matches:", error);
        CricContainer.innerHTML = "<p>Failed to load upcoming matches. Please try again later.</p>";
    }
};

nextmatch.onclick = (e) => {
    e.preventDefault();
    fetchnextmatch();
};
