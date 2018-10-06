function AllowDrop (ev){
    ev.preventDefault();
};

function drag (ev){
ev.dataTransfer.setData("text",ev.target.id);
}; //Funcion tomar//

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
};