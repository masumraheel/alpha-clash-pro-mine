// function play(){
//     // hide the home section
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground section
//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
//     // console.log(playgroundSection.classList);
// }
function continueGame(){
    const alphabet= getARandomAlphabet();
    console.log(alphabet);

    const currentAlphabetElement=document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText= alphabet;

    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById("home-screen");
    showElementById("play-ground");
    continueGame()
  
}

