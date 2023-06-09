const kickBox = document.getElementById("kickBox")
const kickSound = document.getElementById("kickSound")

const hihatBox = document.getElementById("hihatBox")
const hihatSound = document.getElementById("hihatSound")

const clapBox = document.getElementById("clapBox")
const clapSound = document.getElementById("clapSound")

const openhatBox = document.getElementById("openhatBox")
const openhatSound = document.getElementById("openhatSound")

const rideBox = document.getElementById("rideBox")
const rideSound = document.getElementById("rideSound")


const snareBox = document.getElementById("snareBox")
const snareSound = document.getElementById("snareSound")

const tinkBox = document.getElementById("tinkBox")
const tinkSound = document.getElementById("tinkSound")

const tomBox = document.getElementById("tomBox")
const tomSound = document.getElementById("tomSound")

const boomBox = document.getElementById("boomBox")
const boomSound = document.getElementById("boomSound")



document.addEventListener("keydown", (event) => {
    if (event.code === "Digit1") {
      kickSound.play();
      kickBox.style.backgroundColor = "#EB5E28";
      kickBox.classList.add("popout");
      setTimeout(() => {
        kickBox.classList.remove("popout");
        kickBox.style.backgroundColor = "#CCC5B9";
      }, 100);

    } else if (event.code === "Digit2") {
      hihatSound.play();
      hihatBox.style.backgroundColor = "#EB5E28";
      hihatBox.classList.add("popout");
      setTimeout(() => {
        hihatBox.classList.remove("popout");
        hihatBox.style.backgroundColor = "#CCC5B9";
      }, 100);
    } else if (event.code === "Digit3") {
      clapSound.play();
      clapBox.style.backgroundColor = "#EB5E28";
      clapBox.classList.add("popout");
      setTimeout(() => {
        clapBox.classList.remove("popout");
        clapBox.style.backgroundColor = "#CCC5B9";
      }, 100);
    } else if (event.code === "Digit4") {
      openhatSound.play();
      openhatBox.style.backgroundColor = "#EB5E28";
      openhatBox.classList.add("popout");
      setTimeout(() => {
        openhatBox.classList.remove("popout");
        openhatBox.style.backgroundColor = "#CCC5B9";
      }, 100);
    } else if (event.code === "Digit5") {
      rideSound.play();
      rideBox.style.backgroundColor = "#EB5E28";
      rideBox.classList.add("popout");
      setTimeout(() => {
        rideBox.classList.remove("popout");
        rideBox.style.backgroundColor = "#CCC5B9";
      }, 100);
    } else if (event.code === "Digit6") {
      snareSound.play();
      snareBox.style.backgroundColor = "#EB5E28";
      snareBox.classList.add("popout");
      setTimeout(() => {
        snareBox.classList.remove("popout");
        snareBox.style.backgroundColor = "#CCC5B9";
      }, 100);
    } else if (event.code === "Digit7") {
      tinkSound.play();
      tinkBox.style.backgroundColor = "#EB5E28";
      tinkBox.classList.add("popout");
      setTimeout(() => {
        tinkBox.classList.remove("popout");
        tinkBox.style.backgroundColor = "#CCC5B9";
      }, 100);
    } else if (event.code === "Digit8") {
      tomSound.play();
      tomBox.style.backgroundColor = "#EB5E28";
      tomBox.classList.add("popout");
      setTimeout(() => {
        tomBox.classList.remove("popout");
        tomBox.style.backgroundColor = "#CCC5B9";
      }, 100);
    } else if (event.code === "Digit9") {
      boomSound.play();
      boomBox.style.backgroundColor = "#EB5E28";
      boomBox.classList.add("popout");
      setTimeout(() => {
        boomBox.classList.remove("popout");
        boomBox.style.backgroundColor = "#CCC5B9";
      }, 100);
    }
  });
  
  
  document.addEventListener("keyup", (event) => {
    if (event.code === "Digit1") {
      kickBox.style.backgroundColor = "#CCC5B9";
    } else if (event.code === "Digit2") {
      hihatBox.style.backgroundColor = "#CCC5B9";
    } else if (event.code === "Digit3") {
      clapBox.style.backgroundColor = "#CCC5B9";
    } else if (event.code === "Digit4") {
      openhatBox.style.backgroundColor = "#CCC5B9";
    } else if (event.code === "Digit5") {
      rideBox.style.backgroundColor = "#CCC5B9";
    } else if (event.code === "Digit6") {
      snareBox.style.backgroundColor = "#CCC5B9";
    } else if (event.code === "Digit7") {
      tinkBox.style.backgroundColor = "#CCC5B9";
    } else if (event.code === "Digit8") {
      tomBox.style.backgroundColor = "#CCC5B9";
    } else if (event.code === "Digit9") {
      boomBox.style.backgroundColor = "#CCC5B9";
    }
  });

  

 