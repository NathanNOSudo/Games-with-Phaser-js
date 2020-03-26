// Create a create() function here:
function create() {
  this.add.text(150, 200, "Slime Time!");
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
  scene: {
    create
  },

	backgroundColor: "#00c200",
}

const game = new Phaser.Game(config)

