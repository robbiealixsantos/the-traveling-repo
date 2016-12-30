function flappy(){
    // Create our 'main' state that will contain the game
	var mainState = {
	    preload: function() { 
	        game.load.image('rob', 'assets/rob.png'); 
	    },

	    create: function() { 
	        game.stage.backgroundColor = '#71c5cf';
	        game.physics.startSystem(Phaser.Physics.ARCADE);
	        this.rob = game.add.sprite(100, 245, 'rob');
	        game.physics.arcade.enable(this.rob);
	        this.rob.body.gravity.y = 1000;
	    },

	    update: function() {
	        // This function is called 60 times per second    
	        // It contains the game's logic   
	    },
	};

	// Initialize Phaser, and create a 400px by 490px game
	var game = new Phaser.Game(400, 490);

	// Add the 'mainState' and call it 'main'
	game.state.add('main', mainState); 

	// Start the state to actually start the game
	game.state.start('main');
}