const PROYECTOS = document.querySelectorAll('.section__a--trabajos');
const innerCursores = document.querySelectorAll(".section__div--small");

let clientX = 0;
let clientY = 0;

let jobs = {
    1: "./img/Calculadora.png",
    2: "./img/Formulario.png",
    3: "./img/Funkopop.png",
    4: "./img/Portfolio.png"
}

document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;

    innerCursores.forEach(cursor => {
        cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });
});

PROYECTOS.forEach(proyecto => {
    proyecto.addEventListener('mouseover', (e) => {
        const enlace = e.target.closest('.section__a--trabajos');
        const idProyectoHover = enlace.id;

        if (enlace) {
            PROYECTOS.forEach(otroProyecto => {
                if (otroProyecto.id !== idProyectoHover) {
                    otroProyecto.classList.toggle('inactive');
                }
            });

            const innerImgDiv = e.target.closest('.section__a--trabajos').previousElementSibling;
            let dataSetImg = innerImgDiv.dataset.img;
            
            // if(innerImgDiv){
            //     if(dataSetImg === idProyectoHover){
            //         innerImg.setAttribute('src', jobs[idProyectoHover]);
            //     }
            // }

            innerCursores.forEach(cursor => {
                const dataSetImg = cursor.dataset.img;
                if (cursor){
                    if (Number(dataSetImg) != Number(idProyectoHover)){
                        cursor.style.backgroundImage = 'none'; 
                    } else{
                        cursor.style.backgroundImage = `url(${jobs[idProyectoHover]})`;
                        cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
                    }
                }
            });
        }
    });

    proyecto.addEventListener('mouseout', (e) => {
        PROYECTOS.forEach(otroProyecto => {
        otroProyecto.classList.remove('inactive');
        const innerImgDiv = e.target.closest('.section__a--trabajos').previousElementSibling;
        innerImgDiv.style.backgroundImage = 'none'; 
        });
    });
});

const MODONOCTURNO = document.querySelector('.header__div--dark');
const MODOCLARO = document.querySelector('.header__div--light');
const DOCUMENTO = document.getElementsByTagName('html')[0];
const SVG = document.querySelector('.header__svg');
// let cssRoot = document.querySelector(':root');

MODONOCTURNO.addEventListener('click', (e) => {
    let contenedorDark = e.target.closest('.header__div--dark');
    
    if(contenedorDark){
        MODONOCTURNO.style.display = 'none';
        MODOCLARO.style.display = 'flex';
        // DOCUMENTO.classList.add("dark");
        document.querySelector(":root").style.setProperty('--primary-color', '#111414');
        document.querySelector(":root").style.setProperty('--black-color', '#efefef');  
    }
});

MODOCLARO.addEventListener('click', (e) => {
    let contenedorLight = e.target.closest('.header__div--light')
    
    if(contenedorLight){
        MODONOCTURNO.style.display = 'flex';
        MODOCLARO.style.display = 'none';
        // DOCUMENTO.classList.remove("dark");
        document.querySelector(":root").style.setProperty('--primary-color', '#efefef');
        document.querySelector(":root").style.setProperty('--black-color', '#111414'); 
    }
});

// console.log(cssRoot);

const MODULO_PROCESO = document.querySelectorAll('.section__li--proceso');
const MODULO_BODY = document.querySelectorAll('.section__div--body');

MODULO_PROCESO.forEach((modulo) => {
    modulo.addEventListener('click', (e) => {
        let liTargetClass = e.target.closest('.section__li--proceso');
        let dataIdProceso = liTargetClass.dataset.id;
        
        MODULO_BODY.forEach((elemento) => {
            let dataTarget = elemento.dataset.target;
            if (dataTarget === dataIdProceso) {
                if (dataTarget === '2' || dataTarget === '3') {
                    elemento.classList.toggle('show1');
                } else {
                    elemento.classList.toggle('show');
                }
            } else {
                elemento.classList.remove('show');
                elemento.classList.remove('show1');
            }
        });
    });
});


// if (dataTarget === dataIdProceso) {
//     elemento.classList.toggle('show');
// } else {
//     elemento.classList.remove('show'); 
// }


