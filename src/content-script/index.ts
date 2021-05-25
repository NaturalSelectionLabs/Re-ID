console.log('content-script');
window.onload = function(){
    console.log(document.querySelectorAll('[data-testid=toolBar]')[0].children[0].children);
}