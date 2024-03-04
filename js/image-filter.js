function sliderchange(valuedata, inputid, unittypt) {
    if(valuedata != 'checkbox'){
        document.getElementById(inputid).innerText = `${valuedata}${unittypt}`;
    }
    var grayscale = '',blurscl = '',brightness = '',contrast = '',huerotate = '',invert = '',saturate = '',sepia = '';
    if (document.getElementById('greyscalecheck').checked) {
        grayscale = `grayscale(${document.getElementById('greyscalerng').value}%)`;
    }
    if (document.getElementById('blurcheck').checked) {
        blurscl = `blur(${document.getElementById('blurrng').value}px)`;
    }
    if (document.getElementById('brigcheckbox').checked) {
        brightness = `brightness(${document.getElementById('brigrng').value}%)`;
    }
    if (document.getElementById('contrcheck').checked) {
        contrast = `contrast(${document.getElementById('contrrng').value}%)`;
    }
    if (document.getElementById('huerotcheck').checked) {
        huerotate = `hue-rotate(${document.getElementById('huerotrng').value}deg)`;
    }
    if (document.getElementById('invertcheck').checked) {
        invert = `invert(${document.getElementById('invertrng').value}%)`;
    }
    if (document.getElementById('saturatecheck').checked) {
        saturate = `saturate(${document.getElementById('saturaterng').value}%)`;
    }
    if (document.getElementById('sepiacheck').checked) {
        sepia = `sepia(${document.getElementById('sepiarng').value}%)`;
    }
    const element = document.getElementById("sampleimg");
    element.style.filter = `${grayscale} ${blurscl} ${brightness} ${contrast} ${huerotate} ${invert} ${saturate} ${sepia}`;
    element.style.webkitFilter = `${grayscale} ${blurscl} ${brightness} ${contrast} ${huerotate} ${invert} ${saturate} ${sepia}`;
    document.getElementById('finalcode').innerHTML = `<span class="cssproperty">filter:</span> ${grayscale} ${blurscl} ${brightness} ${contrast} ${huerotate} ${invert} ${saturate} ${sepia};<br>
    <span class="cssproperty">-webkit-filter:</span> ${grayscale} ${blurscl} ${brightness} ${contrast} ${huerotate} ${invert} ${saturate} ${sepia};`;
}