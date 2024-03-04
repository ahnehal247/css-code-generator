function showhide(eventcliked) {
    var divid = eventcliked.nextElementSibling;
    var secondSpan = eventcliked.getElementsByTagName('span')[1];
    if (divid.style.maxHeight == "0px") {
        divid.style.maxHeight = '400px';
        secondSpan.style.transform = "rotate(0deg)";
    } else {
        divid.style.maxHeight = `0px`;
        secondSpan.style.transform = "rotate(-90deg)";
    }
}
var noofshadow = 1;
function sliderchange(valuedata, inputid, unittypt) {
    if (inputid.includes('clrpicktxt')) {
        var prevrgb = document.getElementById(inputid).innerText.split(',');
        var hex = valuedata;
        var r = parseInt(hex.substring(1, 3), 16);
        var g = parseInt(hex.substring(3, 5), 16);
        var b = parseInt(hex.substring(5, 7), 16);
        document.getElementById(inputid).innerText = `rgba(${r}, ${g}, ${b},${prevrgb[prevrgb.length - 1]}`;
    } else if (inputid.includes('alpnum')) {
        var alpid = inputid;
        var prevrgb = document.getElementById(`clrpicktxt${alpid.replace('alpnum', '')}`).innerText.split(',');
        prevrgb[prevrgb.length - 1] = `${valuedata})`;
        document.getElementById(`clrpicktxt${alpid.replace('alpnum', '')}`).innerText = prevrgb.join(',');
        document.getElementById(inputid).innerText = valuedata;

    } else {
        if (valuedata != 'checkbox') {
            document.getElementById(inputid).innerText = `${valuedata}${unittypt}`;
        }
    }
    var shadowcss = '';
    for (let index = 1; index <= noofshadow; index++) {
        var activecheck = document.getElementById(`active${index}`);
        var insetcheck = document.getElementById(`inset${index}`);
        if (index > 1) {
            if (activecheck.checked) {
                if (insetcheck.checked) {
                    if (shadowcss != 'none') {
                        shadowcss += `, inset ${document.getElementById(`clrpicktxt${index}`).innerText} ${document.getElementById(`horoffrng${index}`).value}px ${document.getElementById(`veroffrng${index}`).value}px ${document.getElementById(`blradrng${index}`).value}px ${document.getElementById(`spradrng${index}`).value}px`;
                    } else {
                        shadowcss = '';
                        shadowcss += `inset ${document.getElementById(`clrpicktxt${index}`).innerText} ${document.getElementById(`horoffrng${index}`).value}px ${document.getElementById(`veroffrng${index}`).value}px ${document.getElementById(`blradrng${index}`).value}px ${document.getElementById(`spradrng${index}`).value}px`;
                    }
                } else {
                    if (shadowcss != 'none') {
                        shadowcss += `, ${document.getElementById(`clrpicktxt${index}`).innerText} ${document.getElementById(`horoffrng${index}`).value}px ${document.getElementById(`veroffrng${index}`).value}px ${document.getElementById(`blradrng${index}`).value}px ${document.getElementById(`spradrng${index}`).value}px`;
                    } else {
                        shadowcss = '';
                        shadowcss += `${document.getElementById(`clrpicktxt${index}`).innerText} ${document.getElementById(`horoffrng${index}`).value}px ${document.getElementById(`veroffrng${index}`).value}px ${document.getElementById(`blradrng${index}`).value}px ${document.getElementById(`spradrng${index}`).value}px`;
                    }
                }
            }
        } else {
            if (activecheck.checked) {
                if (insetcheck.checked) {
                    shadowcss += `inset ${document.getElementById(`clrpicktxt${index}`).innerText} ${document.getElementById(`horoffrng${index}`).value}px ${document.getElementById(`veroffrng${index}`).value}px ${document.getElementById(`blradrng${index}`).value}px ${document.getElementById(`spradrng${index}`).value}px`;
                } else {
                    shadowcss += `${document.getElementById(`clrpicktxt${index}`).innerText} ${document.getElementById(`horoffrng${index}`).value}px ${document.getElementById(`veroffrng${index}`).value}px ${document.getElementById(`blradrng${index}`).value}px ${document.getElementById(`spradrng${index}`).value}px`;
                }
            } else {
                shadowcss = 'none';
            }
        }
    }
    document.getElementById('samplebox').style.boxShadow = `${shadowcss}`;

    document.getElementById('preview').style.backgroundColor = document.getElementById('canvacolrrng').value;
    document.getElementById('samplebox').style.backgroundColor = document.getElementById('baccolrrng').value;
    document.getElementById('samplebox').style.borderRadius = `${document.getElementById('bordradrng').value}rem`;
    document.getElementById('samplebox').style.borderWidth = `${document.getElementById('bordwdthrng').value}px`;
    document.getElementById('samplebox').style.height = `${document.getElementById('heightrng').value}rem`;
    document.getElementById('samplebox').style.width = `${document.getElementById('widthrng').value}rem`;
    var bordtrascheck = document.getElementById('bordtras');
    if (bordtrascheck.checked) {
        document.getElementById('samplebox').style.borderColor = 'transparent';
        var finalcsscode = `<span class="cssproperty">box-shadow:</span> ${shadowcss};<br>
        <span class="cssproperty">background-color:</span> ${document.getElementById('baccolrrng').value};<br>
        <span class="cssproperty">border-color:</span> transparent;<br>
        <span class="cssproperty">border-radius:</span> ${document.getElementById('bordradrng').value}rem;<br>
        <span class="cssproperty">border-width:</span> ${document.getElementById('bordwdthrng').value}px;<br>
        <span class="cssproperty">height:</span> ${document.getElementById('heightrng').value}rem;<br>
        <span class="cssproperty">width:</span> ${document.getElementById('widthrng').value}rem;`;
        setcsscode(finalcsscode);
    } else {
        document.getElementById('samplebox').style.borderColor = document.getElementById('bordcolrrng').value;
        var finalcsscode = `<span class="cssproperty">box-shadow:</span> ${shadowcss};<br>
    <span class="cssproperty">background-color:</span> ${document.getElementById('baccolrrng').value};<br>
    <span class="cssproperty">border-color:</span> ${document.getElementById('bordcolrrng').value};<br>
    <span class="cssproperty">border-radius:</span> ${document.getElementById('bordradrng').value}rem;<br>
    <span class="cssproperty">border-width:</span> ${document.getElementById('bordwdthrng').value}px;<br>
    <span class="cssproperty">height:</span> ${document.getElementById('heightrng').value}rem;<br>
    <span class="cssproperty">width:</span> ${document.getElementById('widthrng').value}rem;`;
        setcsscode(finalcsscode);
    }
}


function addshadow() {
    noofshadow++;
    var fsparentdiv = document.createElement('div');
    fsparentdiv.className = 'fsparent';
    fsparentdiv.id = `fsparent${noofshadow}`;

    var varhtml = `<button onclick="showhide(this)"><span class="shd">Shadow ${noofshadow}</span><span>︾</span></button>
    <div class="childfirst" style="max-height: 700px;">
        <br>
        <div class="checlboxdiv">
                <label><input type="checkbox" class="activec" id="active${noofshadow}" onchange="sliderchange('checkbox','checked')" checked> Active</label>
                <label><input type="checkbox" class="inset" id="inset${noofshadow}" onchange="sliderchange('checkbox','checked')"> Inset</label>
            <button class="button" style="background-color: rgb(237, 5, 5);margin-left: auto;" onclick="removeshadow(this)">Remove</button>
        </div>
        <div class="mainchild">
            <div class="ch1">
                <label>Horizontal offset</label>
                <p class="horoffnum" id="horoffnum${noofshadow}">0px</p>
            </div>
            <div class="ch2">
                <input type="range" class="horoffrng" id="horoffrng${noofshadow}" max="100" min="-100" value="0" oninput="sliderchange(this.value,'horoffnum${noofshadow}','px')">
            </div>
        </div>
        <div class="mainchild">
            <div class="ch1">
                <label>Vertical offset</label>
                <p class="veroffnum" id="veroffnum${noofshadow}">10px</p>
            </div>
            <div class="ch2">
                <input type="range" class="veroffrng" id="veroffrng${noofshadow}" max="100" min="-100" value="10" oninput="sliderchange(this.value,'veroffnum${noofshadow}','px')">
            </div>
        </div>
        <div class="mainchild">
            <div class="ch1">
                <label>Blur radius</label>
                <p class="blradnum" id="blradnum${noofshadow}">15px</p>
            </div>
            <div class="ch2">
                <input type="range" class="blradrng" id="blradrng${noofshadow}" max="100" min="0" value="15" oninput="sliderchange(this.value,'blradnum${noofshadow}','px')">
            </div>
        </div>
        <div class="mainchild">
            <div class="ch1">
                <label>Spread radius</label>
                <p class="spradnum" id="spradnum${noofshadow}">-3px</p>
            </div>
            <div class="ch2">
                <input type="range" class="spradrng" id="spradrng${noofshadow}" max="100" min="-100" value="-3" oninput="sliderchange(this.value,'spradnum${noofshadow}','px')">
            </div>
        </div>
        <div class="mainchild">
            <div class="ch1">
                <label>Shadow Color</label>
                <p class="clrpicktxt" id="clrpicktxt${noofshadow}">rgba(0,0,0,0.1)</p>
            </div>
            <div class="ch2">
                <input type="color" class="clrpickrng" id="clrpickrng${noofshadow}" value="#000000" oninput="sliderchange(this.value,'clrpicktxt${noofshadow}','')">
            </div>
        </div>
        <div class="mainchild">
            <div class="ch1">
                <label>Alpha</label>
                <p class="alpnum" id="alpnum${noofshadow}">0.1</p>
            </div>
            <div class="ch2">
                <input type="range" class="alprng" id="alprng${noofshadow}" max="1" min="0" step="0.01" value="0.1" oninput="sliderchange(this.value,'alpnum${noofshadow}','')">
            </div>
        </div>
    </div>`;

    fsparentdiv.innerHTML = varhtml;
    document.getElementById('firstscroll').append(fsparentdiv);
    sliderchange('checkbox', 'checked');
}
function removeshadow(clickeditems) {
    if (noofshadow > 1) {
        var childElement = clickeditems.parentElement.parentElement;
        document.getElementById('firstscroll').removeChild(childElement.parentElement);
        noofshadow--;

        var fsparent = document.querySelectorAll('.fsparent');
        for (let i = 1; i <= noofshadow; i++) {
            if (fsparent[i - 1].id != `fsparent${i}`) {
                document.getElementById(fsparent[i - 1].id).id = `fsparent${i}`;
                document.getElementById(fsparent[i - 1].id).id = `shd1${i}`;
                document.querySelectorAll('.shd')[i - 1].innerHTML = `Shadow ${i}`;
                document.querySelectorAll('.activec')[i - 1].id = `active${i}`;
                document.querySelectorAll('.inset')[i - 1].id = `inset${i}`;

                document.querySelectorAll('.horoffnum')[i - 1].id = `horoffnum${i}`;
                document.querySelectorAll('.horoffrng')[i - 1].id = `horoffrng${i}`;
                document.querySelectorAll('.horoffrng')[i - 1].setAttribute('oninput', `sliderchange(this.value,'horoffnum${i}','px')`);

                document.querySelectorAll('.veroffnum')[i - 1].id = `veroffnum${i}`;
                document.querySelectorAll('.veroffrng')[i - 1].id = `veroffrng${i}`;
                document.querySelectorAll('.veroffrng')[i - 1].setAttribute('oninput', `sliderchange(this.value,'veroffnum${i}','px')`);

                document.querySelectorAll('.blradnum')[i - 1].id = `blradnum${i}`;
                document.querySelectorAll('.blradrng')[i - 1].id = `blradrng${i}`;
                document.querySelectorAll('.blradrng')[i - 1].setAttribute('oninput', `sliderchange(this.value,'blradnum${i}','px')`);

                document.querySelectorAll('.spradnum')[i - 1].id = `spradnum${i}`;
                document.querySelectorAll('.spradrng')[i - 1].id = `spradrng${i}`;
                document.querySelectorAll('.spradrng')[i - 1].setAttribute('oninput', `sliderchange(this.value,'spradnum${i}','px')`);

                document.querySelectorAll('.clrpicktxt')[i - 1].id = `clrpicktxt${i}`;
                document.querySelectorAll('.clrpickrng')[i - 1].id = `clrpickrng${i}`;
                document.querySelectorAll('.clrpickrng')[i - 1].setAttribute('oninput', `sliderchange(this.value,'clrpicktxt${i}','')`);

                document.querySelectorAll('.alpnum')[i - 1].id = `alpnum${i}`;
                document.querySelectorAll('.alprng')[i - 1].id = `alprng${i}`;
                document.querySelectorAll('.alprng')[i - 1].setAttribute('oninput', `sliderchange(this.value,'alpnum${i}','')`);
            }
        }
    } else {
        var childElement = clickeditems.parentElement.parentElement;
        document.getElementById('firstscroll').removeChild(childElement.parentElement);
        noofshadow--;
    }
    sliderchange('checkbox', 'checked');
}

var initialcsscode = `<span class="cssproperty">box-shadow:</span> ;<br>
    <span class="cssproperty">background-color:</span> ${document.getElementById('baccolrrng').value};<br>
    <span class="cssproperty">border-color:</span> transparent;<br>
    <span class="cssproperty">border-radius:</span> ${document.getElementById('bordradrng').value}rem;<br>
    <span class="cssproperty">border-width:</span> ${document.getElementById('bordwdthrng').value}px;<br>
    <span class="cssproperty">height:</span> ${document.getElementById('heightrng').value}rem;<br>
    <span class="cssproperty">width:</span> ${document.getElementById('widthrng').value}rem;`;
setcsscode(initialcsscode);
function setcsscode(finalcsscode) {
    console.log(noofshadow)
    if (noofshadow < 1) {
        document.getElementById('finalcode').innerHTML = 'Select atleast 1 Shadow';
        document.getElementById('finalcode').style.color = 'red';
    } else {
        document.getElementById('finalcode').innerHTML = finalcsscode;
    }
}