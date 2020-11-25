$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width: true,indicators: false});
    $('.parallax').parallax();
    $('.myreviews').carousel({
        padding: 55,
        shit: 55,
        numVisible: 7
    });
    $('.scrollspy').scrollSpy();
    $('.materialbox').materialbox();
})

function toogleModal(){
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open()
}



document.getElementById('contact-form').addEventListener('submit',submitform);

function submitform(e){
    e.preventDefault();

    var name = getInputValue('name')
    var email = getInputValue('email')
    var phone = getInputValue('phone')
    var message = getInputValue('message')

    console.log(name)
}

function getInputValue(id){
    return document.getElementById(id).value;
}