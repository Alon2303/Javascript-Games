document.addEventListener('DOMContentLoaded', () =>{
  const cardArray = [
      {
          name: 'batman',
          image:"./images/batman.png"
      },
      {
          name: 'ironman',
          image:"./images/ironman.png"
      },
      {
          name: 'minion',
          image:"./images/minion.png"
      },
      {
          name: 'monster',
          image:"./images/monster.png"
      },
      {
          name: 'smiley',
          image:"./images/smiley.png"
      },
      {
          name: 'superman',
          image:"./images/superman.png"
      },
      {
          name: 'batman',
          image:"./images/batman.png"
      },
      {
          name: 'ironman',
          image:"./images/ironman.png"
      },
      {
          name: 'minion',
          image:"./images/minion.png"
      },
      {
          name: 'monster',
          image:"./images/monster.png"
      },
      {
          name: 'smiley',
          image:"./images/smiley.png"
      },
      {
          name: 'superman',
          image:"./images/superman.png"
      }
  ];
  cardArray.sort(() => 0.5 - Math.random());
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  const grid = document.querySelector('.grid');
  const result = document.querySelector('#result');

  function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', './images/empty.png');
            card.setAttribute('data-id', `${i}`);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

  function checkForMatch() {
      let cards = document.querySelectorAll('img');
      const optionOneId = cardsChosen[0];
      const optionTwoId = cardsChosen[1];
      if(optionOneId === optionTwoId) {
          alert('You found a match!!');
          cardsWon.push(cardsChosen);
      }else {
          cards[cardsChosenId[0]].setAttribute('src', 'images/empty.png');
          cards[cardsChosenId[1]].setAttribute('src', 'images/empty.png');
      }
      cardsChosen = [];
      cardsChosenId = [];
      result.textContent = cardsWon.length;
      if(cardsWon.length === cardArray.length/2) {
          result.textContent = 'You Won!!'
      }
  };

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].image);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

  createBoard();

});