const botao = document.getElementById("menu-btn")
const menu = document.getElementById("menu")

botao.addEventListener("click", () => 
    { 
    menu.classList.toggle("ativo") 
    });

function fazerPedido()
{
    
}



const sections = document.querySelectorAll('section')

window.addEventListener("scroll", () => 
    {
        const header = document.querySelector('header')
        const scrollPos = window.scrollY - header.offsetHeight

        let sectionIndex = 0
        
        if(scrollPos <= 0)
        {
            header.style.boxShadow = "none"
        }
           
        else
        {
             header.style.boxShadow = "0 1px 5px rgba(0,0,0,0.1)"
        }
    })

ScrollReveal().reveal('.texto', 
    {
        duration: 2000,
        origin: 'left',
        distance: '10%'
    });
ScrollReveal().reveal('.img', 
    {
        duration: 2000,
        origin: 'right',
        distance: '10%'
    });
ScrollReveal().reveal('.title', 
    {
        duration: 2000,
        origin: 'bottom',
        distance: '10%'
    });
