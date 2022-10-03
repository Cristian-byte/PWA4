/**if ( 'serviceWorker' in navigator ) {
    console.log('Podemos usarlo!');
}*/

/**if (navigator.serviceWorker){
    console.log('Podemos usar SW')
}*/

//confirmar si podemos usar SW
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}