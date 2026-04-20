const games = [
    { name: "html_test"},
    { name: "pico_consl_test"}
];

function display_games() {
    const gameContainer = document.getElementById("game_browser");
    for (const game of games) {
        var b = document.createElement("button");
        b.className = "app";
        b.style.backgroundImage = `url('applications/${game.name}/thumb.png')`;
        b.onclick = () => game_onclick(game.name)
        gameContainer.appendChild(b);
    }
}

display_games();

function game_onclick(gameName) {
    document.location.href = `applications/${gameName}/index.html`
}

// https://nexuster.github.io/yaygames/