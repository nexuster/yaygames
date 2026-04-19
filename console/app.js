const games = [
    { name: "html_test", thumb: "console/applications/html_test/thumb.png"},
    { name: "pico_consl_test", thumb: "console/applications/pico_consl_test/thumb.png"}
];

function display_games() {
    const gameContainer = document.getElementById("game_browser");
    for (const game of games) {
        var div = document.createElement("div");
        div.className = "app";
        div.style.backgroundImage = `url('${game.thumb}');`
        var p = document.createElement("p");
        p.textContent = "test"
        div.appendChild(p)
        gameContainer.appendChild(div);
    }
}

display_games();