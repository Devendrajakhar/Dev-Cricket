const playerlist = document.querySelector('.player_list');
const CricketConTainer = document.querySelector('.cric_container');

const fetchplayerlist = async () => {
    try {
        const data = await fetch(`https://api.cricapi.com/v1/players?apikey=0a55bb27-b949-47f5-b778-75dd29ddfbd0&offset=0`);
        const response = await data.json();

        if (!response.data) {
            throw new Error("No player data available.");
        }

        CricketConTainer.textContent = "";
        response.data.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('nextmatchscore');

            playerDiv.innerHTML = `
                <h3>${player.name}</h3>
                <p><span>${player.country || "Unknown"}</span></p>
            `;

            CricketConTainer.appendChild(playerDiv);
        });

    } catch (error) {
        console.error("Error fetching players:", error);
        CricketConTainer.innerHTML = "<p>Failed to load players. Please try again later.</p>";
    }
};

playerlist.onclick = (e) => {
    e.preventDefault();
    fetchplayerlist();
};
