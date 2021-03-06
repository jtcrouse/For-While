num_hits=Number(prompt("You are fighting a dragon. How many times would you like to hit it up to 5?"));
if(num_hits<1||num_hits>5)
  {
    var condition=0;
  }
var player_damage_delt=0;
var dragon_damage_delt=0;
//Math.floor(Math.random() * 10); 10 is how high the random num goes

//below is player attacks and dragon attacks
for(var x=0; x<num_hits; x++)
  {
    var player_attack=Math.floor(Math.random() * num_hits)+1;
    if(player_attack>5)
      {
        player_attack=1;
      }
    player_damage_delt+=player_attack;
    
    var dragon_attack=Math.floor(Math.random()* 2)+1;
    dragon_damage_delt+=dragon_attack;
  }

//below i will determin who wins the fight
 var winner="a";
if(player_damage_delt>=10)
  {
    var winner="Player";
  }
else
  {
  var winner="Dragon";
  }
//below i will test out put the answers only if the user input an acceptable amount of hits
if(condition==0)
  {
    document.body.querySelector(".message").innerHTML="You input an incorect number of hits, do it again correctly.";
  }
else
{
document.body.querySelector(".message").innerHTML="Player damage delt, "+player_damage_delt+".";
document.body.querySelector(".message2").innerHTML="Dragon damage delt, "+dragon_damage_delt+".";
document.body.querySelector(".message3").innerHTML="The winner of the fight is the "+winner+".";
}