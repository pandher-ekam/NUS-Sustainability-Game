const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
var score = 100;
var money = 10;
function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'NEW GAME.',
    options: [
      {
        text: 'Start Game',
        nextText: 500000
      } 
    ]
  },
  {
    id: 500000,
    text:"DAY 1",
    options: [
      {
        text: "start your day",
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'It’s Monday and you are trying to start the week right with some good breakfast in the coffee shop near your block. ',
    options: [
      {
        text: 'Kaya butter toast with tea',
        nextText: 3
      },
      {
        text: 'Bread with nutella and a glass of milk',
        nextText: 3
      },
      {
        text: 'Eggs with coffee',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'In between your lecture and your tutorial, you stop by YIH for lunch. What do you pick for your mid-day meal?',
    options: [
      {
        text: 'Thai food- bbq beef rice set',
        nextText: 4
      },
      {
        text: 'Hot plate - pork rib noodles',
        nextText: 4
      },
      {
        text: 'Chicken rice',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'It’s Mala Monday! You and your friends decide to get over the Monday blues with a mala feast. What ingredients do you choose?(choose 3 ingredients).',
    options: [
      {
        text: 'Pork Slices',
        nextText: 5
      },
      {
        text: 'Beef Slices',
        nextText: 5,
        score: score-10
      },
      {
        text: 'Chicken Slices',
        nextText: 5
      },
      {
        text: 'Lotus Root',
        nextText: 5
      },
      {
        text: 'Cabbage',
        nextText: 5 
      },
      {
        text: 'Beef Ball',
        nextText: 5
      },
      {
        text: 'Enoki Mushrooms',
        nextText: 5
      },
      {
        text: 'Black fungus',
        nextText: 5
      },
      {
        text: 'Tofu Skin',
        nextText: 5
      },
      {
        text: 'Maggie Mee',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'It’s Mala Monday! You and your friends decide to get over the Monday blues with a mala feast. What ingredients do you choose?(choose at least 2 more ingredients).',
    options: [
      {
        text: 'Pork Slices',
        nextText: 6
      },
      {
        text: 'Beef Slices',
        nextText: 6
      },
      {
        text: 'Chicken Slices',
        nextText: 6
      },
      {
        text: 'Lotus Root',
        nextText: 6
      },
      {
        text: 'Cabbage',
        nextText: 6 
      },
      {
        text: 'Beef Ball',
        nextText: 6
      },
      {
        text: 'Enoki Mushrooms',
        nextText: 6
      },
      {
        text: 'Black fungus',
        nextText: 6
      },
      {
        text: 'Tofu Skin',
        nextText: 6
      },
      {
        text: 'Maggie Mee',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: 'It’s Mala Monday! You and your friends decide to get over the Monday blues with a mala feast. What ingredients do you choose?(choose one more ingredient).',
    options: [
      {
        text: 'Pork Slices',
        nextText: 7
      },
      {
        text: 'Beef Slices',
        nextText: 7
      },
      {
        text: 'Chicken Slices',
        nextText: 7
      },
      {
        text: 'Lotus Root',
        nextText: 7
      },
      {
        text: 'Cabbage',
        nextText: 7 
      },
      {
        text: 'Beef Ball',
        nextText: 7
      },
      {
        text: 'Enoki Mushrooms',
        nextText: 7
      },
      {
        text: 'Black fungus',
        nextText: 7
      },
      {
        text: 'Tofu Skin',
        nextText: 7
      },
      {
        text: 'Maggie Mee',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Day Ends',
    options: [
      {
        text: 'Next day',
        nextText: 8
      },
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: 'For breakfast you decided to just have a drink. Which of the following would you choose?',
    options: [
      {
        text: 'Muji Milk',
        nextText: 9
      },
      {
        text: 'Almond Milk',
        nextText: 9
      },
      {
        text: 'Soy Milk',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'You happened to visit your friends in science and y’all decided to eat at the Frontier and your Friend recommended a few places for you to choose from',
    options: [
      {
        text: 'Ayam Penyat set',
        nextText: 10
      },
      {
        text: 'Avocado salad set from platypus bar',
        nextText: 10
      },
      {
        text: 'Korean food- beef and fish rice set',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: 'You are queuing up at Jaz by Astons @ UTown, having just finished your midterms. You want to reward yourself with a hearty meal, what do you choose?',
    options: [
      {
        text: 'A nice juicy beef steak',
        nextText: 11
      },
      {
        text: 'Grilled chickenMac and cheese and fries',
        nextText: 11
      },
      {
        text: 'Mac and cheese and fries',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: 'Day Ends',
    options: [
      {
        text: 'Next day',
        nextText: 8
      },
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()