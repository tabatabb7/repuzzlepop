const products = [
  {
    name: 'Dr. J Basketball Game',
    origPrice: 40.55,
    resellPrice: 23.28,
    description: 'massa donec dapibus duis at velit',
    image: '/images/basketball-game.png',
    rating: 2.83,
    stock: 1
  },
  {
    name: 'Blink',
    origPrice: 31.13,
    resellPrice: 25.27,
    description:
      'metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque',
    image: '/images/blink.png',
    rating: 3.71,
    stock: 1
  },
  {
    name: 'Camelot',
    origPrice: 17.36,
    resellPrice: 11.7,
    description: 'morbi vel lectus',
    image: '/images/camelot.png',
    rating: 0.87,
    stock: 6
  },
  {
    name: 'Candy Land',
    origPrice: 29.92,
    resellPrice: 14.71,
    description: 'elit sodales scelerisque mauris sit amet',
    image: '/images/candy-land.png',
    rating: 2.34,
    stock: 1
  },
  {
    name: 'Cards Against Humanity',
    origPrice: 76.93,
    resellPrice: 34.89,
    description: 'at turpis donec posuere metus vitae ipsum aliquam non',
    image: '/images/cards-against-humanity.png',
    rating: 0.7,
    stock: 1
  },
  {
    name: 'Casino Cards',
    origPrice: 46.7,
    resellPrice: 31.19,
    description:
      'convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque',
    image: '/images/casino-cards.png',
    rating: 4.45,
    stock: 1
  },
  {
    name: 'Chute 5',
    origPrice: 34.87,
    resellPrice: 28.51,
    description: 'quam a odio',
    image: '/images/chute-5.png',
    rating: 3.3,
    stock: 2
  },
  {
    name: 'Civilization',
    origPrice: 32.27,
    resellPrice: 23,
    description: 'sit amet cursus id turpis',
    image: '/images/civilization.png',
    rating: 3.68,
    stock: 1
  },
  {
    name: 'Classic Games',
    origPrice: 34.8,
    resellPrice: 27.22,
    description:
      'non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla',
    image: '/images/classic-games.png',
    rating: 3.81,
    stock: 1
  },
  {
    name: 'Clue',
    origPrice: 23.29,
    resellPrice: 11.46,
    description: 'nibh ligula nec sem duis aliquam',
    image: '/images/clue.png',
    rating: 4.94,
    stock: 1
  },
  {
    name: 'Deck of Cards',
    origPrice: 14.27,
    resellPrice: 12.72,
    description:
      'consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam',
    image: '/images/deck-of-cards.png',
    rating: 2.13,
    stock: 1
  },
  {
    name: 'Dice',
    origPrice: 8.98,
    resellPrice: 3.74,
    description:
      'vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus',
    image: '/images/dice.png',
    rating: 3.94,
    stock: 4
  },
  {
    name: 'Dominos',
    origPrice: 13.99,
    resellPrice: 6.01,
    description:
      'ac leo pellentesque ultrices mattis odio donec vitae nisi nam',
    image: '/images/dominos.png',
    rating: 0.61,
    stock: 1
  },
  {
    name: 'Ebay Auction Game',
    origPrice: 17.15,
    resellPrice: 10.84,
    description:
      'potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non',
    image: '/images/ebay-auction.png',
    rating: 2.17,
    stock: 1
  },
  {
    name: 'Enchanted Forest',
    origPrice: 31.07,
    resellPrice: 23.42,
    description:
      'proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio',
    image: '/images/enchanted-forest.png',
    rating: 4.14,
    stock: 1
  },
  {
    name: 'Flinch',
    origPrice: 12.31,
    resellPrice: 3.06,
    description:
      'iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci',
    image: '/images/flinch.png',
    rating: 4.31,
    stock: 2
  },
  {
    name: 'Hotels',
    origPrice: 14.29,
    resellPrice: 12.16,
    description:
      'iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit',
    image: '/images/hotels.png',
    rating: 1.41,
    stock: 1
  },
  {
    name: 'King Oil',
    origPrice: 49.56,
    resellPrice: 15.75,
    description:
      'duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec',
    image: '/images/king-oil.png',
    rating: 3.99,
    stock: 1
  },
  {
    name: 'Mahjong',
    origPrice: 40.01,
    resellPrice: 20.72,
    description:
      'scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis',
    image: '/images/mahjong.png',
    rating: 2.46,
    stock: 1
  },
  {
    name: 'Monopoly',
    origPrice: 16.35,
    resellPrice: 14.56,
    description: 'libero nullam sit amet turpis elementum ligula',
    image: '/images/monopoly.png',
    rating: 2.78,
    stock: 1
  },
  {
    name: 'Never Have I Ever',
    origPrice: 10,
    resellPrice: 8,
    description:
      'dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien',
    image: '/images/never-have-i-ever.png',
    rating: 1.46,
    stock: 1
  },
  {
    name: 'Othello',
    origPrice: 22.29,
    resellPrice: 10.97,
    description:
      'id lobortis convallis tortor risus dapibus augue vel accumsan',
    image: '/images/othello.png',
    rating: 1.91,
    stock: 1
  },
  {
    name: 'Pirate and Traveler',
    origPrice: 31.49,
    resellPrice: 14.45,
    description:
      'risus auctor sed tristique in tempus sit amet sem fusce consequat nulla',
    image: '/images/pirate-and-traveler.png',
    rating: 3.9,
    stock: 1
  },
  {
    name: 'Cinderella Puzzle',
    origPrice: 36.07,
    resellPrice: 36.07,
    description: 'orci luctus et ultrices posuere cubilia curae nulla dapibus',
    image: '/images/puzzle-cinderella.png',
    rating: 1.85,
    stock: 1
  },
  {
    name: 'Disney Puzzle',
    origPrice: 38.3,
    resellPrice: 38.3,
    description:
      'pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla',
    image: '/images/puzzle-disney-birds.png',
    rating: 2.22,
    stock: 1
  },
  {
    name: 'Disney Fantasy Puzzle',
    origPrice: 49.59,
    resellPrice: 12.55,
    description:
      'dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut',
    image: '/images/puzzle-disney-fantasy.png',
    rating: 4.49,
    stock: 5
  },
  {
    name: 'Disneyland Puzzle',
    origPrice: 23.22,
    resellPrice: 17.19,
    description:
      'sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum',
    image: '/images/puzzle-disneyland.png',
    rating: 1.98,
    stock: 1
  },
  {
    name: 'Dragon Puzzle',
    origPrice: 41.77,
    resellPrice: 16.94,
    description:
      'purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu',
    image: '/images/puzzle-dragon.png',
    rating: 3.47,
    stock: 1
  },
  {
    name: 'Fairy Puzzle',
    origPrice: 15.67,
    resellPrice: 11.67,
    description: 'ante vestibulum ante ipsum primis in faucibus orci luctus',
    image: '/images/puzzle-fairy.png',
    rating: 3.67,
    stock: 1
  },
  {
    name: 'Fruits and Veggies Puzzle',
    origPrice: 31.18,
    resellPrice: 7.84,
    description:
      'rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo',
    image: '/images/puzzle-fruits-veg.png',
    rating: 1.03,
    stock: 1
  },
  {
    name: 'Game Puzzle',
    origPrice: 34.57,
    resellPrice: 34.57,
    description: 'non sodales sed tincidunt eu felis fusce posuere',
    image: '/images/puzzle-games.png',
    rating: 1.86,
    stock: 1
  },
  {
    name: 'Homage Puzzle',
    origPrice: 46.97,
    resellPrice: 44.05,
    description:
      'cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum',
    image: '/images/puzzle-homage.png',
    rating: 1.59,
    stock: 1
  },
  {
    name: 'Little Mermaid Puzzle',
    origPrice: 27.59,
    resellPrice: 6.37,
    description:
      'pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis',
    image: '/images/puzzle-little-mermaid.png',
    rating: 1.96,
    stock: 4
  },
  {
    name: 'Lollipop Puzzle',
    origPrice: 27.83,
    resellPrice: 27.83,
    description: 'habitasse platea dictumst maecenas ut massa quis augue',
    image: '/images/puzzle-lollipop.png',
    rating: 3.2,
    stock: 1
  },
  {
    name: 'Puzzle Lot',
    origPrice: 47.62,
    resellPrice: 44.95,
    description:
      'sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
    image: '/images/puzzle-lot.png',
    rating: 4.72,
    stock: 1
  },
  {
    name: 'Noragami Puzzle',
    origPrice: 24.69,
    resellPrice: 12.16,
    description: 'rutrum rutrum neque aenean auctor gravida',
    image: '/images/puzzle-noragami.png',
    rating: 4.01,
    stock: 1
  },
  {
    name: 'Pebble Beach Puzzle',
    origPrice: 30.84,
    resellPrice: 30.84,
    description:
      'vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum',
    image: '/images/puzzle-pebble-beach.png',
    rating: 4.43,
    stock: 2
  },
  {
    name: 'Pixar Puzzle',
    origPrice: 35.47,
    resellPrice: 35.47,
    description: 'dolor morbi vel lectus in quam fringilla',
    image: '/images/puzzle-pixar.png',
    rating: 3.83,
    stock: 1
  },
  {
    name: 'Pokemon Puzzle',
    origPrice: 21.5,
    resellPrice: 14.35,
    description:
      'pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras',
    image: '/images/puzzle-pokemon.png',
    rating: 3.97,
    stock: 10
  },
  {
    name: 'Settlers of Catan',
    origPrice: 44.29,
    resellPrice: 16.83,
    description:
      'cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis',
    image: '/images/settlers-of-catan.png',
    rating: 3.97,
    stock: 1
  },
  {
    name: 'SNES Game Lot',
    origPrice: 35.94,
    resellPrice: 35.94,
    description: 'diam erat fermentum justo nec condimentum neque sapien',
    image: '/images/snes-lot-2.png',
    rating: 4.04,
    stock: 1
  },
  {
    name: 'SNES Game Lot',
    origPrice: 36.06,
    resellPrice: 20.44,
    description:
      'in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor',
    image: '/images/snes-lot.png',
    rating: 1.76,
    stock: 1
  },
  {
    name: 'Solotaire',
    origPrice: 31.26,
    resellPrice: 31.26,
    description:
      'et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque',
    image: '/images/solotaire.png',
    rating: 1.61,
    stock: 5
  },
  {
    name: 'Steeplechase',
    origPrice: 18.1,
    resellPrice: 12.58,
    description: 'etiam pretium iaculis',
    image: '/images/steeplechase.png',
    rating: 0.17,
    stock: 1
  },
  {
    name: 'Stratego',
    origPrice: 37.42,
    resellPrice: 37.42,
    description: 'ut ultrices vel augue vestibulum ante',
    image: '/images/stratego.png',
    rating: 4.79,
    stock: 1
  },
  {
    name: 'Sudoku Board',
    origPrice: 46.86,
    resellPrice: 38.87,
    description: 'primis in faucibus orci',
    image: '/images/sudoko-board.png',
    rating: 3.76,
    stock: 6
  },
  {
    name: 'Texas Holdem',
    origPrice: 48.62,
    resellPrice: 40.14,
    description: 'semper sapien a libero nam dui proin leo odio',
    image: '/images/texas-holdem.png',
    rating: 4.66,
    stock: 1
  },
  {
    name: "That's So '90s",
    origPrice: 34.96,
    resellPrice: 9.88,
    description:
      'pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut',
    image: '/images/thats-so-90s.png',
    rating: 2.35,
    stock: 1
  },
  {
    name: 'Twister',
    origPrice: 15.37,
    resellPrice: 10.23,
    description:
      'in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque',
    image: '/images/twister.png',
    rating: 3.28,
    stock: 2
  },
  {
    name: 'Unknown Title',
    origPrice: 18.04,
    resellPrice: 18.04,
    description:
      'velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget',
    image: '/images/unknown-title.png',
    rating: 2.06,
    stock: 1
  },
  {
    name: 'Uno',
    origPrice: 43.72,
    resellPrice: 3.69,
    description:
      'curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a',
    image: '/images/uno.png',
    rating: 1.02,
    stock: 1
  },
  {
    name: 'Vikings Game',
    origPrice: 21.28,
    resellPrice: 2.22,
    description:
      'nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed',
    image: '/images/vikings-game.png',
    rating: 0.72,
    stock: 1
  },
  {
    name: 'Which Witch',
    origPrice: 39.04,
    resellPrice: 39.04,
    description:
      'libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac',
    image: '/images/which-witch.png',
    rating: 3.33,
    stock: 1
  },
  {
    name: 'Nulla Sed Vel',
    origPrice: 43.59,
    resellPrice: 43.59,
    description: 'scelerisque mauris sit amet eros suspendisse accumsan',
    image: '/images/default-image.png',
    rating: 4.25,
    stock: 1
  },
  {
    name: 'Duis Mattis Egestas Metus Aenean Fermentum',
    origPrice: 34.33,
    resellPrice: 7.45,
    description:
      'lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia',
    image: '/images/default-image.png',
    rating: 3.28,
    stock: 1
  },
  {
    name: 'Elementum Ligula Vehicula Consequat Morbi A',
    origPrice: 25.99,
    resellPrice: 9.92,
    description:
      'dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
    image: '/images/default-image.png',
    rating: 1,
    stock: 1
  },
  {
    name: 'Ornare Consequat Lectus In Est Risus',
    origPrice: 23.97,
    resellPrice: 6.34,
    description:
      'leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas',
    image: '/images/default-image.png',
    rating: 0.97,
    stock: 1
  },
  {
    name: 'Vestibulum Proin Eu Mi Nulla',
    origPrice: 48.15,
    resellPrice: 48.15,
    description: 'dapibus augue vel accumsan tellus nisi eu orci mauris',
    image: '/images/default-image.png',
    rating: 3.8,
    stock: 1
  },
  {
    name: 'Felis Sed Lacus',
    origPrice: 14.18,
    resellPrice: 12.97,
    description:
      'sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla',
    image: '/images/default-image.png',
    rating: 0.15,
    stock: 1
  },
  {
    name: 'Magnis Dis Parturient Montes Nascetur',
    origPrice: 14.6,
    resellPrice: 14.6,
    description: 'curabitur convallis duis',
    image: '/images/default-image.png',
    rating: 2.89,
    stock: 1
  },
  {
    name: 'Ultrices Enim',
    origPrice: 45.23,
    resellPrice: 45.23,
    description:
      'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor',
    image: '/images/default-image.png',
    rating: 4.87,
    stock: 1
  },
  {
    name: 'Aliquam Convallis Nunc',
    origPrice: 19.69,
    resellPrice: 19.69,
    description:
      'curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis',
    image: '/images/default-image.png',
    rating: 2.63,
    stock: 1
  },
  {
    name: 'Ac Lobortis Vel',
    origPrice: 27.28,
    resellPrice: 27.28,
    description: 'consequat dui nec nisi volutpat eleifend donec ut dolor',
    image: '/images/default-image.png',
    rating: 0.46,
    stock: 1
  },
  {
    name: 'Tristique Est Et',
    origPrice: 40.3,
    resellPrice: 40.3,
    description:
      'non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum',
    image: '/images/default-image.png',
    rating: 0.65,
    stock: 2
  },
  {
    name: 'Nulla Eget Eros Elementum Pellentesque',
    origPrice: 36.71,
    resellPrice: 36.71,
    description: 'sit amet nunc viverra dapibus nulla suscipit',
    image: '/images/default-image.png',
    rating: 1.78,
    stock: 1
  },
  {
    name: 'Montes Nascetur Ridiculus',
    origPrice: 39.22,
    resellPrice: 39.22,
    description:
      'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in',
    image: '/images/default-image.png',
    rating: 2.4,
    stock: 1
  },
  {
    name: 'Pulvinar Nulla Pede Ullamcorper Augue',
    origPrice: 35.57,
    resellPrice: 35.57,
    description:
      'luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at',
    image: '/images/default-image.png',
    rating: 0.95,
    stock: 3
  },
  {
    name: 'Posuere Cubilia',
    origPrice: 10.35,
    resellPrice: 2.97,
    description: 'facilisi cras non velit nec nisi',
    image: '/images/default-image.png',
    rating: 4,
    stock: 1
  },
  {
    name: 'Amet',
    origPrice: 45.39,
    resellPrice: 18.88,
    description: 'risus semper porta volutpat quam pede lobortis ligula',
    image: '/images/default-image.png',
    rating: 1.49,
    stock: 1
  },
  {
    name: 'Enim Blandit Mi In Porttitor Pede',
    origPrice: 6.87,
    resellPrice: 6.87,
    description:
      'amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci',
    image: '/images/default-image.png',
    rating: 4.98,
    stock: 10
  },
  {
    name: 'Pellentesque Quisque Porta',
    origPrice: 45.82,
    resellPrice: 45.82,
    description:
      'rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo',
    image: '/images/default-image.png',
    rating: 2.31,
    stock: 1
  },
  {
    name: 'Varius Ut',
    origPrice: 27.09,
    resellPrice: 27.09,
    description:
      'porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor',
    image: '/images/default-image.png',
    rating: 0.65,
    stock: 1
  },
  {
    name: 'Morbi',
    origPrice: 28.87,
    resellPrice: 22.24,
    description: 'integer aliquet massa id lobortis convallis tortor risus',
    image: '/images/default-image.png',
    rating: 1.94,
    stock: 1
  },
  {
    name: 'Magna',
    origPrice: 16.39,
    resellPrice: 2.57,
    description: 'duis ac nibh fusce lacus',
    image: '/images/default-image.png',
    rating: 2.22,
    stock: 2
  },
  {
    name: 'Massa',
    origPrice: 32.03,
    resellPrice: 25.75,
    description: 'rutrum ac lobortis vel dapibus',
    image: '/images/default-image.png',
    rating: 2.09,
    stock: 5
  },
  {
    name: 'Sollicitudin Ut Suscipit A Feugiat',
    origPrice: 47.94,
    resellPrice: 28.72,
    description:
      'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum',
    image: '/images/default-image.png',
    rating: 1.75,
    stock: 1
  },
  {
    name: 'Interdum',
    origPrice: 47.74,
    resellPrice: 6.86,
    description:
      'vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus',
    image: '/images/default-image.png',
    rating: 3.96,
    stock: 1
  },
  {
    name: 'Quam Sollicitudin',
    origPrice: 48.92,
    resellPrice: 43.07,
    description: 'ipsum praesent blandit',
    image: '/images/default-image.png',
    rating: 2.23,
    stock: 1
  },
  {
    name: 'Semper Est Quam Pharetra Magna',
    origPrice: 29.89,
    resellPrice: 29.89,
    description: 'dolor sit amet consectetuer adipiscing elit proin',
    image: '/images/default-image.png',
    rating: 2.2,
    stock: 5
  },
  {
    name: 'Iaculis Congue Vivamus Metus Arcu',
    origPrice: 22.41,
    resellPrice: 11.37,
    description:
      'condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque',
    image: '/images/default-image.png',
    rating: 1.19,
    stock: 1
  },
  {
    name: 'Semper Interdum',
    origPrice: 46.53,
    resellPrice: 18.23,
    description: 'enim blandit mi',
    image: '/images/default-image.png',
    rating: 2.05,
    stock: 1
  },
  {
    name: 'Donec Ut',
    origPrice: 5.9,
    resellPrice: 4.32,
    description:
      'consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices',
    image: '/images/default-image.png',
    rating: 1.16,
    stock: 1
  },
  {
    name: 'Sapien',
    origPrice: 39.97,
    resellPrice: 39.97,
    description:
      'sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi',
    image: '/images/default-image.png',
    rating: 0.21,
    stock: 1
  },
  {
    name: 'Est Donec',
    origPrice: 9.5,
    resellPrice: 5.51,
    description: 'eleifend quam a odio in hac',
    image: '/images/default-image.png',
    rating: 1.16,
    stock: 1
  },
  {
    name: 'Convallis Nunc',
    origPrice: 39.14,
    resellPrice: 39.14,
    description: 'tellus semper interdum',
    image: '/images/default-image.png',
    rating: 0.78,
    stock: 1
  },
  {
    name: 'Tempus',
    origPrice: 26.85,
    resellPrice: 22.39,
    description:
      'eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in',
    image: '/images/default-image.png',
    rating: 0.38,
    stock: 1
  },
  {
    name: 'Vestibulum Ante Ipsum Primis In',
    origPrice: 19.94,
    resellPrice: 19.94,
    description:
      'duis bibendum felis sed interdum venenatis turpis enim blandit mi in',
    image: '/images/default-image.png',
    rating: 4.56,
    stock: 1
  },
  {
    name: 'Nulla Sed',
    origPrice: 45.47,
    resellPrice: 45.47,
    description:
      'erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi',
    image: '/images/default-image.png',
    rating: 2.43,
    stock: 1
  },
  {
    name: 'Cras Pellentesque Volutpat Dui',
    origPrice: 33.83,
    resellPrice: 33.83,
    description: 'lorem ipsum dolor',
    image: '/images/default-image.png',
    rating: 1.28,
    stock: 1
  },
  {
    name: 'Magna Vulputate Luctus Cum Sociis',
    origPrice: 11.99,
    resellPrice: 11.99,
    description: 'porttitor pede justo eu massa donec dapibus duis at',
    image: '/images/default-image.png',
    rating: 2.07,
    stock: 1
  },
  {
    name: 'Amet Cursus',
    origPrice: 39.04,
    resellPrice: 39.04,
    description:
      'lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin',
    image: '/images/default-image.png',
    rating: 0.09,
    stock: 1
  },
  {
    name: 'Pretium Iaculis Diam Erat Fermentum Justo',
    origPrice: 23.77,
    resellPrice: 23.77,
    description:
      'in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea',
    image: '/images/default-image.png',
    rating: 0.35,
    stock: 6
  },
  {
    name: 'Ac Neque Duis Bibendum Morbi Non',
    origPrice: 3.37,
    resellPrice: 2.41,
    description: 'ac neque duis',
    image: '/images/default-image.png',
    rating: 1.51,
    stock: 1
  },
  {
    name: 'Libero Ut Massa Volutpat Convallis Morbi',
    origPrice: 45.66,
    resellPrice: 45.66,
    description:
      'odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel',
    image: '/images/default-image.png',
    rating: 1.02,
    stock: 1
  },
  {
    name: 'Nulla Pede Ullamcorper Augue A',
    origPrice: 43.27,
    resellPrice: 31.89,
    description:
      'lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed',
    image: '/images/default-image.png',
    rating: 3.65,
    stock: 1
  },
  {
    name: 'Aliquam Convallis',
    origPrice: 44.99,
    resellPrice: 44.99,
    description:
      'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien',
    image: '/images/default-image.png',
    rating: 1.5,
    stock: 7
  },
  {
    name: 'Donec Vitae',
    origPrice: 40.38,
    resellPrice: 40.38,
    description: 'ut odio cras mi pede',
    image: '/images/default-image.png',
    rating: 3.25,
    stock: 1
  },
  {
    name: 'Volutpat Eleifend Donec Ut Dolor',
    origPrice: 47.43,
    resellPrice: 47.43,
    description: 'ultrices posuere cubilia',
    image: '/images/default-image.png',
    rating: 1.98,
    stock: 1
  },
  {
    name: 'Semper Est',
    origPrice: 27.59,
    resellPrice: 27.59,
    description: 'etiam vel augue vestibulum rutrum rutrum neque',
    image: '/images/default-image.png',
    rating: 3.59,
    stock: 1
  },
  {
    name: 'Duis',
    origPrice: 46.43,
    resellPrice: 46.43,
    description:
      'nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum',
    image: '/images/default-image.png',
    rating: 0.42,
    stock: 1
  }
]

module.exports = products
