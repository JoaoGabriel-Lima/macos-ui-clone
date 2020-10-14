
// document.getElementById("configapp").addEventListener("click", openApp("config"))
function openApp(app) {
    var choose = app
    document.body.style.cursor='wait';
    apps = document.getElementsByClassName('icons')
    for(var i = 0; i<apps.length; i++) {
        apps[i].style.cursor='wait';
        // console.log(`Pressed Icon ${i}`)
    }
    // console.log("Pressed!")

    setTimeout(function(choose){
        // console.log(choose)
        switch (app) {
            case 'store':
                document.getElementById("apps-container").innerHTML += '<div class="drag-app" id="store" onclick="focus()"><img src="source/applestore/applestore.jpg" class="drag-app" id="storeimg"></div>'
                break;
            case 'config':
                document.getElementById("apps-container").innerHTML += '<div class="drag-app" id="config" onclick="focus()"><img src="source/config/systempreferences.png" id="configimg"></div>'
                break
        }
        
        
        for(var i = 0; i<apps.length; i++) {
            apps[i].style.cursor='default';
            // console.log(`Pressed Icon ${i}`)
        }
        document.body.style.cursor='default';
        $(".drag-app").draggable({
            delay: 20,
            containment: "#apps-container"
        })
    },100)
}

