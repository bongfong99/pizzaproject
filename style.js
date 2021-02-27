
        var header = document.createElement("header");
        var img = document.createElement("img");
        img.setAttribute("src","/images/logo.png");
        img.setAttribute("alt","logo image");
        img.setAttribute("width", "100px");
        img.setAttribute("heigth","100px");
        header.appendChild(img);
        var content = document.createTextNode("Pizza Family Project");
        header.appendChild(content);
        document.body.append(header);
