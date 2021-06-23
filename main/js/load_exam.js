function load_exam(callback) {
    var exam_div = document.getElementById('exam_div');
    var xobj = new XMLHttpRequest();
    var contant;
    var radio_button1 = document.createElement('input');
    var text2 = document.createTextNode('');
    var br2 = document.createElement('br');
    var newimg = document.createElement('img');
    var newdiv = document.createElement('div');
    alert(exam_div);
    xobj.overrideMimeType("application/json");
    xobj.open('POST', '../examresult/main/json/data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
            contant = JSON.parse(xobj.responseText);
            alert(contant);
            for (var key in contant) {
                newdiv = document.createElement('div');
                text2 = document.createTextNode(key + "번." + contant[key].q);
                newdiv.setAttribute('id', "hi" + key);
                newdiv.appendChild(text2);
                exam_div.appendChild(newdiv);
                br2 = document.createElement('br');
                exam_div.appendChild(br2);
                br2 = document.createElement('br');
                if ("pic" in contant[key]) {
                    newimg = document.createElement('img');
                    newimg.setAttribute('src', "http://seohanbook.co.kr/examresult/main/pic/" + contant[key].pic);
                    exam_div.appendChild(newimg);
                }
                exam_div.appendChild(br2);
                for (var key2 in contant[key].c) {
                    radio_button1 = document.createElement('input');
                    var aa = contant[key]['c'][key2];
                    if (key2 == 0) {
                        text2 = document.createTextNode('가.  '+aa);
                    }
                    if (key2 == 1) {
                        text2 = document.createTextNode('나.  ' + aa);
                    }
                    if (key2 == 2) {
                        text2 = document.createTextNode('다.  ' + aa);
                    }
                    if (key2 == 3) {
                        text2 = document.createTextNode('라.  ' + aa);
                    }
                    
                    radio_button1.setAttribute('type', 'radio');
                    radio_button1.setAttribute('name', key);
                    radio_button1.setAttribute('value', key2+1);
                    exam_div.appendChild(radio_button1);
                    exam_div.appendChild(text2);
                    br2 = document.createElement('br');
                    exam_div.appendChild(br2);
                }
                br2 = document.createElement('br');
                exam_div.appendChild(br2);
                br2 = document.createElement('br');
                exam_div.appendChild(br2);
                br2 = document.createElement('br');
                exam_div.appendChild(br2);
                br2 = document.createElement('br');
                exam_div.appendChild(br2);
                br2 = document.createElement('br');
                exam_div.appendChild(br2);
                br2 = document.createElement('br');
                exam_div.appendChild(br2);
            }
        }
    };
    xobj.send(null);
}
function check() {

    var answer = ['3', '4', '3', '3', '1', '2', '3', '3', '1', '4', '4']
    var a = 0;
    var aaa = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 11; i++) {
        for (var aa = 0; aa < 4; aa++) {
            if (document.getElementsByName(i + 1)[aa].checked == true) {
                if (document.getElementsByName(i + 1)[aa].value == answer[i]) {
                    a = a + 1;
                } else {
                    console.log(document.getElementById('hi' + (i + 1)).innerText);
                    document.getElementById('hi' + (i + 1)).innerText = "X" + "  " + document.getElementById('hi' + (i + 1)).innerText;
                }
            } else {
                document.getElementById('hi' + (i + 1)).innerText = "X" +"  " + document.getElementById('hi' + (i + 1)).innerText;
                break;
            }
        }
        console.log(answer[i]);
    }
    if (a == 11) {
        document.getElementById('result').innerText = "합격입니다";
    } else {
        document.getElementById('result').innerText = (11 - a) + "문제 틀렸습니다";
    }
}
load_exam(function (json) { console.log(json); });