const games = [
    { name: "html_test"},
    { name: "pico_consl_test"}
];

function display_games() {
    const gameContainer = document.getElementById("game_browser");
    
    for (let game of games) {
        var div = document.createElement("div");
        div.className = "app";
        div.style.backgroundImage = `url('applications/${game.name}/thumb.png')`;
        gameContainer.appendChild(div);
    }
}

display_games();