var start  = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear(){
    let top = Math.random() * 400;
    let left  = Math.random() *400;
    // let height = Math.random() * 400;
    // let background = Math.floor(Math.random() * 3000);
    let width = (Math.random() * 200) + 100;
    if(Math.random()< 0.5) {
        document.getElementById('shape').style.borderRadius = "50%";
    } else{
        document.getElementById('shape').style.borderRadius = "0%";
    }



    console.log(getRandomColor());
    document.getElementById('shape').style.top = top + "px";
    document.getElementById('shape').style.left = left + "px";
    document.getElementById('shape').style.height = width + "px";
    document.getElementById('shape').style.background = getRandomColor();

    document.getElementById('shape').style.display = 'block';
    start = new Date().getTime();
}

function appearAfterDealy() {
    setTimeout(makeShapeAppear, Math.random()*2000);
    
}

appearAfterDealy();

document.getElementById('shape').onclick = function() {
    document.getElementById('shape').style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start)/1000;
    // console.log(end - start);
     document.getElementById("timeTaken").innerHTML = timeTaken;
     appearAfterDealy();
}

