document.getElementById('backup-data').addEventListener('click', function() {
  alert('Game data backed up!');
  console.log("Game data has been backed up.");
});

document.getElementById('start-game').addEventListener('click', function() {
  document.getElementById('game-world').innerHTML = '<p>The adventure begins...</p>';
  console.log("Game started.");
});

document.getElementById('spawn-mob').addEventListener('click', function() {
  let mob = document.createElement('div');
  mob.className = 'mob';
  
  mob.style.top = Math.random() * (document.getElementById('game-world').offsetHeight - 50) + 'px';
  mob.style.left = Math.random() * (document.getElementById('game-world').offsetWidth - 50) + 'px';
  
  document.getElementById('game-world').appendChild(mob);
  console.log("Mob spawned.");
});

// Add smooth scroll to game section when "Play the Game" button is clicked
document.getElementById('scroll-to-game').addEventListener('click', function() {
  document.getElementById('game-container').classList.remove('hidden'); // Reveal game container
  document.getElementById('game-container').scrollIntoView({ behavior: 'smooth' });
});
