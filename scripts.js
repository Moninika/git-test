window.addEventListener ("load", function(){

    let dataURL = "http://api.open-notify.org/astros.json";
    fetch(dataURL)
    .then(response => response.json())
    .then (data => {
        console.log(data);

    })
});
