new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function(_event, special = false) {
      console.log(special);
      const damage = this.calculateDamage(special ? 6 : 3, special ? 20 : 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster for ${damage}`
      });
      if (this.checkWin()) {
        return;
      }
      setTimeout(() => {
        this.monsterAttack();
      }, 300);
    },
    monsterAttack: function() {
      const damage = this.calculateDamage(5, 15);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits Player for ${damage}`
      });
      this.checkWin();
    },
    specialAttack: function() {
      this.attack(true);
    },
    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: `Player heals`
      });
      this.monsterAttack();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    calculateDamage: function(minDamage, maxDamage) {
      return Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
