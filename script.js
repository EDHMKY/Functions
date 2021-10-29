
function spookyGhost(){
    console.log(`Boo!!!`);
  }
  spookyGhost(); 
  
  console.log("========");
  
  
  function candy(goal){
    console.log(goal);
    console.log(goal);
    console.log(goal);
    console.log(goal);
    
  }
  candy(`Get Candy`);
 
  
  console.log("=========");
  
  
  function werewolf(a, b){
    if (a === `Full` && b === `Moon`){
      console.log(`ARH-WOOO!`);
    }
  
    
    
  }
  werewolf(`Full`, `Moon`); 
  werewolf(`Crescent`, `Moon`); 
  
  console.log("==========");
  
  
  function halloween(){
    return `October 31st`;
  }
  halloween(); 
  console.log(halloween()); 
  
  console.log('==========');
  
  
  function isEnoughCandy(pieces){
    if (pieces >= 31){
      return true;
    } else {
      return false;
    }
  
    
  }
  console.log(isEnoughCandy(31)); // true
  console.log(isEnoughCandy(5)); // false
  
  console.log("=========");
  
  
  function candyCounter(nums){
    let total = 0;
    for(i = 0; i < nums.length; i++){
      total += nums[i];
    }
    return total;
  
    
    
  }
  console.log(candyCounter([1, 2, 3])); 
  console.log(candyCounter([1, 3])); 
  
  console.log("=========");
  
  
  const hauntedMansion = function(){
    console.log("Welcome, foolish mortals, to the Haunted Mansion!");
  }
  hauntedMansion(); 
  
  console.log("=========");
  
  
  ghostbusters = () => `Who You Gonna Call?`;
  
  
  
  
  console.log(ghostbusters()); 
  
  console.log("==========");
  
  
  const costumes = ["Ghost", "Princess", "Pirate"];
  
  
  const upperCostumes = costumes.map(i => i.toUpperCase());
  
  
  
  console.log(upperCostumes); 
  
  console.log("==========");
  
  
  const stephenKingMovies = [
    "The Shining",
    "Christine",
    "It",
    "The Mist",
    "Creepshow",
    "Pet Sematary"
  ];
  
  
  const twoMovies = stephenKingMovies.filter(i => i.length === 9);
  console.log(twoMovies); 
  
  console.log("=========");
  
  
  const halloweenSongs1 = ["Monster Mash", "Thriller"];
  
  
  const halloweenSongs2 = [
    "I Put A Spell On You",
    "This Is Halloween",
    "Ghostbusters"
  ];
  
  
  halloweenJukeBox = songs => {
    const random = Math.floor(Math.random() * songs.length);
    console.log(songs[random]);
  }
  
  
  halloweenJukeBox(halloweenSongs1);  
  halloweenJukeBox(halloweenSongs2); 
  
  console.log("=========");
  
  
  caps = string => {
    let newString = "";
    for (i = 0; i < string.length; i++){
      if (i % 2 === 0){
        newString = newString + string[i].toUpperCase();
      } else {
        newString = newString + string[i];
      }
    }
    return newString;
  }
  
  console.log(caps(`Hey`)); 
  console.log(caps(`Halloween`)); 
  
  
  
  
  console.log(caps(`Happy Halloween`));