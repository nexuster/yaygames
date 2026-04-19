var gcollection = document.getElementById("game_browser");
display_games();

function display_games() {
    var apps = fetch("console/applications");
    var files = apps.files;
    for (let i = 0; i < files.length; i++) {
        const folder = files[index];
        var app = document.createElement("div")
        app.className = "app"
        app.style.backgroundImage = folder[0]
    }
}