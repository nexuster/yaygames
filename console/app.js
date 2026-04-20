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
        b.id = game.name
        b.onclick = `game_onclick(${b.id})`
        gameContainer.appendChild(b);
    }
}

display_games();

function game_onclick(id) {
    document.location.href = `applications/${id}/index.html`
}

// https://nexuster.github.io/yaygames/