document.getElementById('finalcode').innerHTML = `<span class="cssproperty">text-shadow:</span> 15px 13px 29px rgba(117, 132, 174, 1);<br>
   <span class="cssproperty">color:</span> rgb(181, 6, 251);;`;

function sliderchange(valuedata, inputid, unittypt) {
    if(inputid != 'textcolor'){
        document.getElementById(inputid).innerText = `${valuedata}${unittypt}`;
    }
    const element = document.getElementById("textprev");
    element.innerText = document.getElementById('textele').value;
    element.style.textShadow = `${document.getElementById('hoshlerng').value}px ${document.getElementById('veshlerng').value}px ${document.getElementById('blrradrng').value}px ${document.getElementById('shadcolor').value}`;
    element.style.color = `${document.getElementById('txtcolor').value}`;
    

   document.getElementById('finalcode').innerHTML = `<span class="cssproperty">text-shadow:</span> ${document.getElementById('hoshlerng').value}px ${document.getElementById('veshlerng').value}px ${document.getElementById('blrradrng').value}px ${document.getElementById('shadcolor').value};<br>
   <span class="cssproperty">color:</span> ${document.getElementById('txtcolor').value};`;
}