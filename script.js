const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const color = e.currentTarget.classList;

        if(color.contains("color1")){
            theme.style.setProperty("--theme-color", "#3498db");
        }
        else if(color.contains("color2")){
            theme.style.setProperty("--theme-color", "#ff1756");
        }
        else if(color.contains("color3")){
            theme.style.setProperty("--theme-color", "#1cb65d");
        }
        else if(color.contains("color4")){
            theme.style.setProperty("--theme-color", "#8e44ad");
        }
        else{
            theme.style.setProperty("--theme-color", "#f4b932");
        }
    });
});