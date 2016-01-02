function scoreThrows(array){
var score = 0;
var bonus = true;

if(array === null || array.length === 0){
  return 'your score is 0';
}
//if radius is less than 5, award 10 points
//else if radius is between 5(inclusive) and 11, award 5 points
//else if radius is above 10, award 0 points
// else if theres an empty array award 0 points

//if all indexs are below 5, award 100 points
else{
  for(var i = 0 ; i < array.length ; i++){
    if (array[i]<5){
      score += 10 ;
    }

    else if (array[i]<11 && array[i]>=5){
      score +=5;
    }

    else {
      score +=0;
    }
  }


  for(var j = 0; j < array.length ; j++){
    if(array[j]>5){
      bonus = false;
    }
  }

  if(bonus === true){
    score+=100;
  }

  return score;
}//else


}

var scores = [1,2,3,4];
console.log(scoreThrows(scores));