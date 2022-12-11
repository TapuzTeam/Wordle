function scaleBoxes() {
    td.style.borderColor = 'black';
    td.style.transform = 'scale(140%)';
    
    setTimeout(function(){
        td.style.transform = 'scale(100%)';
    }, 15);
}

function moveTableRow() {
    tr.style.animation="wrongInput .3s 1";
        setTimeout(function(){
            tr.style.animation="";
        }, 300);
}