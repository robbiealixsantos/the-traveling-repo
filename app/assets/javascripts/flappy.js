function flappy(){
    // Create our 'main' state that will contain the game
	var mainState = {
	    preload: function() {
	        game.load.image('rob', 'images/flappy/rob.png');
	        game.load.image('pipe', 'images/flappy/pipe.png');
	        game.load.audio('jump', 'images/flappy/jump.wav');
	        game.load.audio('boing', 'images/flappy/cartoon008.wav');
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
             this.pipes = game.add.group()

           this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
	       this.score = 0;
           this.labelScore = game.add.text(20, 20, "0",
              { font: "30px Arial", fill: "#ffffff" });
           this.rob.anchor.setTo(-0.2, 0.5);
           this.jumpSound = game.add.audio('jump');
           this.collisonSound = game.add.audio("boing")

	      },

	       addOnePipe: function(x, y) {
		    var pipe = game.add.sprite(x, y, 'pipe');

		    // Add the pipe to our previously created group
		    this.pipes.add(pipe);

		    // Enable physics on the pipe
		    game.physics.arcade.enable(pipe);

		    // Add velocity to the pipe to make it move left
		    pipe.body.velocity.x = -200;

		    // Automatically kill the pipe when it's no longer visible
		    pipe.checkWorldBounds = true;
		    pipe.outOfBoundsKill = true;

		   },

		    addRowOfPipes: function() {
		       this.score += 1;
			   this.labelScore.text = this.score;
		    // Randomly pick a number between 1 and 5
		    // This will be the hole position
		    var hole = Math.floor(Math.random() * 5) + 1;

		    // Add the 6 pipes
		    // With one big hole at position 'hole' and 'hole + 1'
		    for (var i = 0; i < 8; i++)
		    	if (i != hole && i != hole + 1)
		    		this.addOnePipe(400, i * 60 + 10);
		    },


	    update: function() {
	        if (this.rob.y < 0 || this.rob.y > 490)
               this.restartGame();
             game.physics.arcade.overlap(
    		this.rob, this.pipes, this.hitPipe, null, this);
             if (this.rob.angle < 20)
              this.rob.angle += 1;
           },

           jump: function() {
           	  if (this.rob.alive == false)
                return;
                this.jumpSound.play();
             this.rob.body.velocity.y = -300;
             game.add.tween(this.rob).to({angle: -20}, 100).start();
           },

           restartGame: function() {
               game.state.start('main');
	       },

	       hitPipe: function() {
    		if (this.rob.alive == false)
        	return;
             this.collisonSound.play();

    		 this.rob.alive = false;

    		 game.time.events.remove(this.timer);

       		 this.pipes.forEach(function(p){
        	 p.body.velocity.x = 0;
    		 }, this);
		   },

	};

	// Initialize Phaser, and create a 400px by 490px game
  // var game = new Phaser.Game(window.innerWidth, 490, Phaser.auto, "flappy");
  var game = new Phaser.Game(400, 490);

	// Add the 'mainState' and call it 'main'
	game.state.add('main', mainState);

	// Start the state to actually start the game
	game.state.start('main');
};