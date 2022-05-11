console.log("working")
const imgSrc = ["./images/cat.jfif", "./images/dog.jfif", "./images/giraf.jfif", "./images/lion.jfif", "./images/monkey.jfif", "./images/tiger.jfif", "./images/zebra.jfif", "./images/raccon.jfif"]



const item = document.querySelectorAll(".image")

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function map() {
    totalImg = imgSrc.concat(imgSrc)
    shuffleArray(totalImg)
    totalImg.forEach((element, id) => {
        item[id].setAttribute("src", element)

    });
}


show()
map()

