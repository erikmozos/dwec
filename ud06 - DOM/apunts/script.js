let enlace = document.body.getElementsByTagName('a')[0];

let parrafo = document.getElementsByTagName('p');

let creap = document.getElementById('creap');

let imatge = document.getElementsByTagName("p")[document.getElementsByTagName("p").length - 1].getElementsByTagName("img")[0];


// document.insertBefore(parrafo[0], parrafo[1]);


creap.addEventListener('click', function() {
    
    if(imatge.alt){
        console.log(imatge.alt);
    }

    imatge.setAttribute('width', '100px');
});


function contador(s){
    return document.querySelectorAll(s).length;
}

console.log(contador('.uno'));



// console.log(enlace);

// console.log(parrafo);
