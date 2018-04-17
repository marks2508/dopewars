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
  let startDebt = 750;
  let $space = $('.space');
  let startspace = 100;

  // ***********
  // drugs
  // ***********
  let $cost =  $('.cost');




  const $acidcost = $('.acidcost');
  let $cocainecost = $('.cocainecost');
  let $speedcost = $('.speedcost');
  let $ketaminecost = $('.ketaminecost');
  let $peyotecost = $('.peyotecost');
  let $mdmacost = $('.mdmacost');
  let $heroincost = $('.heroincost');
  let $weedcost = $('.weedcost');
  let $methcost = $('.methcost');
  let $mushroomscost = $('.mushroomscost');
  let $hashcost = $('.hashcost');
  let $crackcost = $('.crackcost');
  let $dmtcost = $('.dmtcost');

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

  const allDrugs = [$acidcost, $cocainecost, $speedcost, $ketaminecost, $peyotecost, $mdmacost, $heroincost, $weedcost, $methcost, $mushroomscost, $hashcost, $crackcost, $dmtcost];



  function randomPrice() {
    $acidcost.text(Math.floor(Math.random() * 100) + 1);
    $cocainecost.text(Math.floor(Math.random() * 100) + 1);
    $speedcost.text(Math.floor(Math.random() * 100) + 1);
    $ketaminecost.text(Math.floor(Math.random() * 100) + 1);
    $peyotecost.text(Math.floor(Math.random() * 100) + 1);
    $mdmacost.text(Math.floor(Math.random() * 100) + 1);
    $heroincost.text(Math.floor(Math.random() * 100) + 1);
    $weedcost.text(Math.floor(Math.random() * 100) + 1);
    $methcost.text(Math.floor(Math.random() * 100) + 1);
    $mushroomscost.text(Math.floor(Math.random() * 100) + 1);
    $hashcost.text(Math.floor(Math.random() * 100) + 1);
    $crackcost.text(Math.floor(Math.random() * 100) + 1);
    $dmtcost.text(Math.floor(Math.random() * 100) + 1);
  }

  $destination.on('click', (e) => {
    console.log('place selected');
    placeSelected = $(e.target).html();
    $place.text(placeSelected);
    $day.text(date++);
    randomPrice();
  });

  $space.text(startspace);
  $cashAvailable.text(startCash);
  $debt.text(startDebt);

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
  });
  $speedcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $speedcost.text());
    $speedamount.text($speedcost.text());
  });
  $ketaminecost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $ketaminecost.text());
    $ketamineamount.text($ketaminecost.text());
  });
  $peyotecost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $peyotecost.text());
    $peyoteamount.text($peyotecost.text());
  });
  $mdmacost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $mdmacost.text());
    $mdmaamount.text($mdmacost.text());
  });
  $heroincost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $heroincost.text());
    $heroinamount.text($heroincost.text());
  });
  $weedcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $weedcost.text());
    $weedamount.text($weedcost.text());
  });
  $methcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $methcost.text());
    $methamount.text($methcost.text());
  });
  $mushroomscost.on('click', () => {
    console.log('shrooms selected');
    $cashAvailable.text(3000 - $mushroomscost.text());
    $mushroomsamount.text($mushroomscost.text());
  });
  $hashcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $hashcost.text());
    $hashamount.text($hashcost.text());
  });
  $crackcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $crackcost.text());
    $crackamount.text($crackcost.text());
  });
  $dmtcost.on('click', () => {
    console.log('drug selected');
    $cashAvailable.text(3000 - $dmtcost.text());
    $dmtamount.text($dmtcost.text());
  });




});




// $horse.on('click', (e) => {
//     horseChoice = $(e.target).html();
//     $betting.text(horseChoice);
//     if (horseChoice === '1. Bullet-Proof: 3/1') {
//       $odds.text('3/1');
//     } else if (horseChoice === '2. Emerald Fire: 5/1') {
//       $odds.text('5/1');
//     } else if (horseChoice === '3. Jalapeno: 1/2') {
//       $odds.text('1/2');
