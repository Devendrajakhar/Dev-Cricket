// const matchlist = document.querySelector('.match_list');
// const cricketcon = document.querySelector('.cric_container');

// const fetchmatchlist = async (value) => {
//     const data = await fetch(`https://api.cricapi.com/v1/matches?apikey=0a55bb27-b949-47f5-b778-75dd29ddfbd0&offset=1`)
//     const response = await data.json();
//     cricketcon.textContent = "";
//     response.data.forEach(data => {
//         const nextmatchDiv = document.createElement('div');
//         nextmatchDiv.classList.add('nextmatchscore');
//         try {
//             nextmatchDiv.innerHTML = `
//       <h2>${data.name}</h2>
//       <h3><span>${data.matchType}</span> ${data.dateTimeGMT}</h3>
//       <p>${data.teams['0']} </p>
//       <p>${data.teams['1']} </p> 
//       <div class="status">${data.status}</div>
//       `
//         } catch (error) {
//             console.log('jai ho')
//         }
//         cricketcon.appendChild(nextmatchDiv);
//     })
// }

// matchlist.onclick = (e) => {
//     e.preventDefault();
//     for (let i = 0; i < 1; i++) {
//         fetchmatchlist(i);
//     }

// }
const matchlist = document.querySelector('.match_list');
const cricketcon = document.querySelector('.cric_container');

const fetchmatchlist = async () => {
    try {
        const data = await fetch(`https://api.cricapi.com/v1/matches?apikey=0a55bb27-b949-47f5-b778-75dd29ddfbd0&offset=1`);
        const response = await data.json();
        
        if (!response.data) {
            throw new Error("No match data available.");
        }
        
        cricketcon.textContent = "";
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

            cricketcon.appendChild(nextmatchDiv);
        });

    } catch (error) {
        console.error("Error fetching matches:", error);
        cricketcon.innerHTML = "<p>Failed to load matches. Please try again later.</p>";
    }
};

matchlist.onclick = (e) => {
    e.preventDefault();
    fetchmatchlist();
};
