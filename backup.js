function startGame() {
    document.getElementById('gameContainer').style.display = 'block';
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Simple representation of a player
    const player = {
        x: 20,
        y: 150,
        width: 20,
        height: 20,
        color: 'gold',
        speed: 5
    };

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    // Control player with arrow keys
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowUp':
                if (player.y > 0) player.y -= player.speed;
                break;
            case 'ArrowDown':
                if (player.y < canvas.height - player.height) player.y += player.speed;
                break;
            case 'ArrowLeft':
                if (player.x > 0) player.x -= player.speed;
                break;
            case 'ArrowRight':
                if (player.x < canvas.width - player.width) player.x += player.speed;
                break;
        }
        draw();
    });

    draw(); // Initial draw
}
