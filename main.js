window.onload = function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("title").innerHTML = myObj.title;
                var img = new Image();
                    img.src = myObj.hdurl;
                    img.style.height = "34em";
                    img.style.width = "42em";
            document.getElementById("image").appendChild(img);
            document.getElementById("description").innerHTML = myObj.explanation;
            document.getElementById("date").innerHTML = myObj.date;
            document.getElementById("copyright").innerHTML = myObj.copyright;    
        }
    };
    xmlhttp.open("GET","https://api.nasa.gov/planetary/apod?api_key=pn3mLYsxd3wPNvChD1zeLHzC5hUq7sA1xICB4eCp",true);
    xmlhttp.send();
};