var gcollection = document.getElementById("game_browser");
display_games();

function display_games() {
    fetch("console/applications")
        .then(response => response.json())
        .then(data => {
            const files = data.files;
            for (let i = 0; i < files.length; i++) {
                const folder = files[i];
                var app = document.createElement("div");
                app.className = "app";
                
                const thumbPath = `console/applications/${folder}/thumb.png`;
                app.style.backgroundImage = `url('${thumbPath}')`;
                
                gcollection.appendChild(app);
            }
        })
        .catch(error => console.error("Error fetching applications:", error));
}