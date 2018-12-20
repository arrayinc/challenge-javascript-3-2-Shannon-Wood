"use strict";


function thisOldMan() {
  let rhyme = '';

  for (let i = 1; i <=10; i++){
    switch (i) {
      case 1: rhyme = 'thumb';break;
      case 2: rhyme = 'shoe';break;
      case 3: rhyme = 'knee';break;
      case 4: rhyme = 'door';break;
      case 5: rhyme = 'hive';break;
      case 6: rhyme = 'sticks';break;
      case 7: rhyme = 'heaven';break;
      case 8: rhyme = 'plate';break;
      case 9: rhyme = 'spine';break;
      case 10: rhyme = 'shin';break;
      default: console.log('I see there is an error in the switch stmt.');
      break;
    }
    console.log(`This old man, he played ${i}.  He played knick-knack on my ${rhyme}.  With a knick-knack, paddy-whack, give your dog a bone.  This old man came rolling home.`);
  }
}
