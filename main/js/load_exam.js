function load_exam(callback) {
    var exam_div = document.getElementById('exam_div');
    var xobj = new XMLHttpRequest();
    var contant;
    var radio_button1 = document.createElement('input');
    var text2 = document.createTextNode('');
    var br2 = document.createElement('br');
    alert(exam_div);
    xobj.overrideMimeType("application/json");
    xobj.open('POST', '../examresult/main/json/data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
            contant = JSON.parse(xobj.responseText);
            alert(contant);
            for (var key in contant) {
                text2 = document.createTextNode(contant[key].q);
                exam_div.appendChild(text2);
                exam_div.appendChild(br2);
                for (var key2 in contant[key].c) {
                    radio_button1 = document.createElement('input');
                    var aa = contant[key]['c'][key2];
                    text2 = document.createTextNode(aa);
                    radio_button1.setAttribute('type', 'radio');
                    radio_button1.setAttribute('name', key);
                    radio_button1.setAttribute('value', aa);
                    exam_div.appendChild(radio_button1);
                    exam_div.appendChild(text2);
                }
            }
        }
    };
    xobj.send(null);
}