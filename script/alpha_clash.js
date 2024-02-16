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

function play(){
    hideElementById("home-screen")
    showElementById("")
}

function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(){
    const element= document.getElementById(elementId);
    element.classList.remove("hidden");
}