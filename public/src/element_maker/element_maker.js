export default class ElementMaker {
    
    //Makes a button
    getButton = function(className, id, text) {
        const button = document.createElement('button');
        className != null? button.className = className : null;
        id != null? div.id = id : null;
        button.innerText = text;
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