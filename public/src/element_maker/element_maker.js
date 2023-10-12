export default class ElementMaker {
    
    //Makes a button
    getButton = function(className, showingId, text) {
        const button = document.createElement('button');
        className != null? button.className = className : null;
        button.innerText = text;
        button.addEventListener('click', function() {
            if (showingId !== -1) {
                window.location.href = "./html/reserveSeats.html?showingId=" + showingId;
            }
        });
        return button;
    }

    //Makes a p-tag
    getP = function(className, text) {
        const p = document.createElement('p');
        className != null? p.className = className : null;
        p.innerText = text;
        return p;
    }

    //makes a div with a potential class name
    getDiv = function(className) {
        const div = document.createElement('div');
        className != null? div.className = className : null;
        return div;
    }

}