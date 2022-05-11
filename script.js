console.log("working")
const imgSrc = ["./images/cat.jfif", "./images/dog.jfif", "./images/giraf.jfif", "./images/lion.jfif", "./images/monkey.jfif", "./images/tiger.jfif", "./images/zebra.jfif", "./images/raccon.jfif"]
let count = 0
let clock;
const item = document.querySelectorAll(".image")

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function myTimer() {
    count++;
    document.getElementById("time").innerHTML = count
}



function map() {
    if (count == 0) {
        clock = setInterval(myTimer, 1000)
    }

    totalImg = imgSrc.concat(imgSrc)
    shuffleArray(totalImg)

    totalImg.forEach((element, id) => {
        item[id].setAttribute("src", element)
    });

    setTimeout(hideImage, 3000);
    game()
}
const hideImage = () => {
    images = document.querySelectorAll(".image")
    images.forEach((image) => {
        image.setAttribute("style", "opacity:0")

    })
}
function reset() {
    setTimeout(function () {
        location.reload()
    }, 100)
}

function game() {
    let counter = 0;
    let choice = ""
    let lives = 20
    let listOfChoices = []
    let imgID = 0


    const cards = document.querySelectorAll(".image")
    cards.forEach((image, id) => {
        image.addEventListener("click", function () {
            // console.log(image.src);

            if (choice == "") {
                choice = image.src
                imgID = id
                listOfChoices.push(image)
                image.setAttribute("style", "opacity:100")


            }


            else if (choice == image.src && imgID != id) {
                listOfChoices.push(image)
                counter++;
                choice = "";
                listOfChoices.forEach(element => { element.setAttribute("style", "opacity:100") })
                console.log(counter)
                listOfChoices = []

            }

            else if (choice != image.src) {
                image.setAttribute("style", "opacity:100")
                setTimeout(() => { image.setAttribute("style", "opacity:0") }, 500)
                listOfChoices[0].setAttribute("style", "opacity:0")
                listOfChoices = []
                console.log("noo")
                choice = 0;
                lives--;
                l = document.getElementById("life").innerHTML = lives


            }
            if (counter >= 8) {
                alert("You won the Game")
            }
            if (lives == 0) {
                confirm("Game Over!!! Restart")
                reset()
            }

        });

    })
}




