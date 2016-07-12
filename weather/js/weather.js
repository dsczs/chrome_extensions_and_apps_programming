function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showWeather(result){
    result = JSON.parse(result);
alert(result);
alert(result.errNum);
    var list = result.resData.list;
alert(list);
    var table = '<table><tr><th>province_cn</th><th>district_cn</th><th>name_cn</th><th>name_en</th><th>area_id</th></tr>';
    for(var i in list){
        table += '<tr>';
        table += '<td>'+list.province_cn+'</td>';
        table += '<td>'+list.province_cn+'</td>';
        table += '<td>'+list.province_cn+'</td>';
        table += '<td>'+list.province_cn+'</td>';
        table += '<td>'+list.province_cn+'</td>';
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('weather').innerHTML = table;
}

var city = localStorage.city;
city = city?city:'北京';
var url = 'http://test.dsczs.cn/weather.php?city='+city;    //会调用百度的天气API
httpRequest(url, showWeather);