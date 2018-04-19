$(() => {

  //************
  // destinations
  //************
  const $destination = $('.destination');
  const $place = $('.place');
  let placeSelected = null;
  //************
  // databank
  //************
  const $cashAvailable = $('.cashAvailable');
  const $debt = $('.debt');
  const $day = $('.day');
  let date = 1;
  let startCash = 3000;
  let $notifications = $('.notifications');
  // let startDebt = 750;
  let $space = $('.space');
  let startspace = 100;

  // ***********
  // drugs
  // ***********
  // costs
  let $cost =  $('.cost');
  const $acidcost = $('#acidcost');
  let $cocainecost = $('#cocainecost');
  let $speedcost = $('#speedcost');
  let $ketaminecost = $('#ketaminecost');
  let $peyotecost = $('#peyotecost');
  let $mdmacost = $('#mdmacost');
  let $heroincost = $('#heroincost');
  let $weedcost = $('#weedcost');
  let $methcost = $('#methcost');
  let $mushroomscost = $('#mushroomscost');
  let $hashcost = $('#hashcost');
  let $crackcost = $('#crackcost');
  let $dmtcost = $('#dmtcost');
  // amounts
  const $acidamount = $('.acidamount');
  let $cocaineamount = $('.cocaineamount');
  let $speedamount = $('.speedamount');
  let $ketamineamount = $('.ketamineamount');
  let $peyoteamount = $('.peyoteamount');
  let $mdmaamount = $('.mdmaamount');
  let $heroinamount = $('.heroinamount');
  let $weedamount = $('.weedamount');
  let $methamount = $('.methamount');
  let $mushroomsamount = $('.mushroomsamount');
  let $hashamount = $('.hashamount');
  let $crackamount = $('.crackamount');
  let $dmtamount = $('.dmtamount');

  // buy and sell
  let $buyAcid = $('#buyAcid');
  let $sellAcid = $('#sellAcid');
  let $buyCocaine = $('#buyCocaine');
  let $sellCocaine = $('#sellCocaine');
  let $buySpeed = $('#buySpeed');
  let $sellSpeed = $('#sellSpeed');
  let $buyKetamine = $('#buyKetamine');
  let $sellKetamine = $('#sellKetamine');
  let $buyPeyote = $('#buyPeyote');
  let $sellPeyote = $('#sellPeyote');
  let $buyMdma = $('#buyMdma');
  let $sellMdma = $('#sellMdma');
  let $buyHeroin = $('#buyHeroin');
  let $sellHeroin = $('#sellHeroin');
  let $buyWeed = $('#buyWeed');
  let $sellWeed = $('#sellWeed');
  let $buyMeth = $('#buyMeth');
  let $sellMeth = $('#sellMeth');
  let $buyMushrooms = $('#buyMushrooms');
  let $sellMushrooms = $('#sellMushrooms');
  let $buyHash = $('#buyHash');
  let $sellHash = $('#sellHash');
  let $buyCrack = $('#buyCrack');
  let $sellCrack = $('#sellCrack');
  let $buyDmt = $('#buyDmt');
  let $sellDmt = $('#sellDmt');


  const allDrugs = [$acidcost, $cocainecost, $speedcost, $ketaminecost, $peyotecost, $mdmacost, $heroincost, $weedcost, $methcost, $mushroomscost, $hashcost, $crackcost, $dmtcost];

  let cheapDrug = null;
  let $score = $('.score');

  const scoreBoard = [];

  ////////////////////////
  //**********************
  //******FUNCTIONS ******
  //**********************
  ////////////////////////


  function returnRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getDrugPrices() {
    $acidcost.text(returnRandomPrice(1000, 5000));
    $cocainecost.text(returnRandomPrice(11000, 95000));
    $speedcost.text(returnRandomPrice(100, 400));
    $ketaminecost.text(returnRandomPrice(500, 3500));
    $peyotecost.text(returnRandomPrice(125, 320));
    $mdmacost.text(returnRandomPrice(500, 4500));
    $heroincost.text(returnRandomPrice(2000, 7500));
    $weedcost.text(returnRandomPrice(250, 1000));
    $methcost.text(returnRandomPrice(160, 800));
    $mushroomscost.text(returnRandomPrice(90, 250));
    $hashcost.text(returnRandomPrice(250, 3000));
    $crackcost.text(returnRandomPrice(3000, 29000));
    $dmtcost.text(returnRandomPrice(1000, 10000));
  }

  function endOfGameCheck() {
    if (date === 3) {
      console.log('day 3');
      randomDrug(allDrugs);
      $notifications.text('Prices have bottomed out!!');
    } else if (date > 6) {
      prompt('Thanks for playing the game\nYour made a total of £' + $cashAvailable.text());
      const playerName = prompt('What is your name?');
      const finalCash = $cashAvailable.text();
      scoreBoard.push(playerName + ' ' + '£' + finalCash);
      console.log(scoreBoard);
      for (let i = 0; i < scoreBoard.length; i++) {
        $score.text(scoreBoard);
      }
      endOfGame();
    }
      
  }

  function endOfGame() {
    date = 1;
    $day.text(date);
    $place.text('');
    $cashAvailable.text(startCash);
    $space.text(startspace);
    $acidcost.text(0);
    $cocainecost.text(0);
    $speedcost.text(0);
    $ketaminecost.text(0);
    $peyotecost.text(0);
    $mdmacost.text(0);
    $heroincost.text(0);
    $weedcost.text(0);
    $methcost.text(0);
    $mushroomscost.text(0);
    $hashcost.text(0);
    $crackcost.text(0);
    $dmtcost.text(0);
  }

  function randomDrug(allDrugs) {
    const cheapDrug = allDrugs[Math.floor(Math.random()*allDrugs.length)];
    return cheapDrug.text(returnRandomPrice(10,20));
  }

  function bottomPriceOut() {

  }


  $destination.on('click', (e) => {
    console.log('place selected');
    placeSelected = $(e.target).html();
    $place.text(placeSelected);
    $day.text(date++);
    getDrugPrices();
    endOfGameCheck();
  });

  $space.text(startspace);
  $cashAvailable.text(startCash);
  // $debt.text(startDebt);

  // costings of the drugs
  $acidcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $acidcost.text());
    $acidamount.text($acidcost.text());
    $space.text(startspace - $acidamount.text());
  });
  $cocainecost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $cocainecost.text());
    $cocaineamount.text($cocainecost.text());
    $space.text(startspace - $cocaineamount.text());
  });
  $speedcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $speedcost.text());
    $speedamount.text($speedcost.text());
    $space.text(startspace - $speedamount.text());
  });
  $ketaminecost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $ketaminecost.text());
    $ketamineamount.text($ketaminecost.text());
    $space.text(startspace - $ketamineamount.text());
  });
  $peyotecost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $peyotecost.text());
    $peyoteamount.text($peyotecost.text());
    $space.text(startspace - $peyoteamount.text());
  });
  $mdmacost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $mdmacost.text());
    $mdmaamount.text($mdmacost.text());
    $space.text(startspace - $mdmaamount.text());
  });
  $heroincost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $heroincost.text());
    $heroinamount.text($heroincost.text());
    $space.text(startspace - $heroinamount.text());
  });
  $weedcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $weedcost.text());
    $weedamount.text($weedcost.text());
    $space.text(startspace - $weedamount.text());
  });
  $methcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $methcost.text());
    $methamount.text($methcost.text());
    $space.text(startspace - $heroinamount.text());
  });
  $mushroomscost.on('click', () => {
    console.log('shrooms selected');
    $cashAvailable.text(3000 - $mushroomscost.text());
    $mushroomsamount.text($mushroomscost.text());
    $space.text(startspace - $mushroomsamount.text());
  });
  $hashcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $hashcost.text());
    $hashamount.text($hashcost.text());
    $space.text(startspace - $hashamount.text());
  });
  $crackcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $crackcost.text());
    $crackamount.text($crackcost.text());
    $space.text(startspace - $crackamount.text());
  });
  $dmtcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $dmtcost.text());
    $dmtamount.text($dmtcost.text());
    $space.text(startspace - $dmtamount.text());
  });

  // buy and sell drugs
  $buyAcid.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($acidcost.text())) + ' units' + '\nHow much do you want to buy?');
    const amountAsNumber = parseInt(amount);
    const maxAvailable = Math.floor($cashAvailable.text() / ($acidcost.text()));
    if (amountAsNumber < maxAvailable) {
      $acidamount.text(amountAsNumber);
    } else {
      prompt('You can afford ' + Math.floor($cashAvailable.text() / ($acidcost.text())) + ' units' + '\nHow much do you want to buy?' );
    }
    $cashAvailable.text($cashAvailable.text() - ($acidcost.text() * amount));
    $space.text(startspace - amount);


  });
  $sellAcid.on('click', () => {
    const amount = prompt('You have ' + $acidamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $acidcost.text()));
      $acidamount.text($acidamount.text() - amount);
    }
  });

  $buyCocaine.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($cocainecost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $cocaineamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($cocainecost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellCocaine.on('click', () => {
    const amount = prompt('You have ' + $cocaineamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $cocainecost.text()));
      $cocaineamount.text($cocaineamount.text() - amount);
    }
  });

  $buySpeed.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($speedcost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $speedamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($speedcost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellSpeed.on('click', () => {
    const amount = prompt('You have ' + $speedamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $speedcost.text()));
      $speedamount.text($speedamount.text() - amount);
    }
  });

  $buyKetamine.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($ketaminecost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $ketamineamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($ketaminecost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellKetamine.on('click', () => {
    const amount = prompt('You have ' + $ketamineamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $ketaminecost.text()));
      $ketamineamount.text($ketamineamount.text() - amount);
    }
  });

  $buyPeyote.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($peyotecost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $peyoteamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($peyotecost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellPeyote.on('click', () => {
    const amount = prompt('You have ' + $peyoteamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $peyotecost.text()));
      $peyoteamount.text($peyoteamount.text() - amount);
    }
  });

  $buyMdma.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($mdmacost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $mdmaamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($mdmacost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellMdma.on('click', () => {
    const amount = prompt('You have ' + $mdmaamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $mdmacost.text()));
      $mdmaamount.text($mdmaamount.text() - amount);
    }
  });

  $buyHeroin.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($heroincost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $heroinamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($heroincost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellHeroin.on('click', () => {
    const amount = prompt('You have ' + $heroinamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $heroincost.text()));
      $heroinamount.text($heroinamount.text() - amount);
    }
  });

  $buyWeed.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($weedcost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $weedamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($weedcost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellWeed.on('click', () => {
    const amount = prompt('You have ' + $weedamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $weedcost.text()));
      $weedamount.text($weedamount.text() - amount);
    }
  });

  $buyMeth.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($methcost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $methamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($methcost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellMeth.on('click', () => {
    const amount = prompt('You have ' + $methamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $methcost.text()));
      $methamount.text($methamount.text() - amount);
    }
  });

  $buyMushrooms.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($mushroomscost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $mushroomsamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($mushroomscost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellMushrooms.on('click', () => {
    const amount = prompt('You have ' + $mushroomsamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $mushroomscost.text()));
      $mushroomsamount.text($mushroomsamount.text() - amount);
    }
  });

  $buyHash.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($hashcost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $hashamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($hashcost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellHash.on('click', () => {
    const amount = prompt('You have ' + $hashamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $hashcost.text()));
      $hashamount.text($hashamount.text() - amount);
    }
  });
  $buyCrack.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($crackcost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $crackamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($crackcost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellCrack.on('click', () => {
    const amount = prompt('You have ' + $crackamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $crackcost.text()));
      $crackamount.text($crackamount.text() - amount);
    }
  });

  $buyDmt.on('click', () => {
    const amount = prompt('You can afford ' + Math.floor($cashAvailable.text() / ($dmtcost.text())) + ' units' + '\nHow much do you want to buy?');
    if (amount > 0) {
      $dmtamount.text(amount);
    }
    $cashAvailable.text($cashAvailable.text() - ($dmtcost.text() * amount));
    $space.text(startspace - amount);
  });
  $sellDmt.on('click', () => {
    const amount = prompt('You have ' + $dmtamount.text() + ' units to sell.\nHow many do you want to sell?');
    if (amount > 0) {
      $cashAvailable.text(parseInt($cashAvailable.text()) + (amount * $dmtcost.text()));
      $dmtamount.text($dmtamount.text() - amount);
    }
  });




});
