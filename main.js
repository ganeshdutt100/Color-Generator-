function normalcolor(){
        let randomNum = Math.floor(Math.random()*16777215);
    let randStr = "#"+randomNum.toString(16);
    console.log(randomNum , randStr);


    document.getElementById('color_gen').value= randStr;
  document.body.style.backgroundColor = randStr;

   
}

function Copy_Color_Code() {
    let colorCode = document.getElementById('color_gen').value;
    navigator.clipboard.writeText(colorCode);
    alert('Color code copied to clipboard: ' + colorCode);
}

normalcolor(); //load page with color





