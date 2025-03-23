const serieslist = document.querySelector('.series_list');
const CricketContainer = document.querySelector('.cric_container');

const fetchserieslist = async () => {
    try {
        const data = await fetch(`https://api.cricapi.com/v1/series?apikey=0a55bb27-b949-47f5-b778-75dd29ddfbd0&offset=0`);
        const response = await data.json();

        if (!response.data) {
            throw new Error("No series data available.");
        }

        CricketContainer.textContent = "";
        response.data.forEach(series => {
            const seriesDiv = document.createElement('div');
            seriesDiv.classList.add('nextmatchscore');

            seriesDiv.innerHTML = `
                <h2>${series.name}</h2>
                <h3><span>${series.startDate}</span> To <span>${series.endDate}</span></h3>
                <p>ODI = ${series.odi || 0}</p>
                <p>T20 = ${series.t20 || 0}</p>
                <p>TEST = ${series.test || 0}</p>
                <div class="status">Total matches = ${series.matches || 0}</div>
            `;

            CricketContainer.appendChild(seriesDiv);
        });

    } catch (error) {
        console.error("Error fetching series:", error);
        CricketContainer.innerHTML = "<p>Failed to load series list. Please try again later.</p>";
    }
};

serieslist.onclick = (e) => {
    e.preventDefault();
    fetchserieslist();
};

  