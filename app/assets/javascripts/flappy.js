// function flappy(){
    // Create our 'main' state that will contain the game




	var mainState = {
	    preload: function() { 
	        game.load.image('rob', 'images/flappy/rob.png'); 
	        game.load.image('pipe', 'images/flappy/pipe.png');
	    },

	    create: function() { 
	        game.stage.backgroundColor = '#71c5cf';
	        game.physics.startSystem(Phaser.Physics.ARCADE);
	        this.rob = game.add.sprite(100, 245, 'rob');
	        game.physics.arcade.enable(this.rob);
	        this.rob.body.gravity.y = 1000;
	        var spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.SPACEBAR);
            spaceKey.onDown.add(this.jump, this);    
	    },

	    update: function() {
	        if (this.rob.y < 0 || this.rob.y > 490)
               this.restartGame();
           },
           
           jump: function() {
             this.rob.body.velocity.y = -350;
           },
           
           restartGame: function() {
               game.state.start('main');
	       }
	       
	    
	};

	// Initialize Phaser, and create a 400px by 490px game
	var game = new Phaser.Game(400, 490);

	// Add the 'mainState' and call it 'main'
	game.state.add('main', mainState); 

	// Start the state to actually start the game
	game.state.start('main');
// }