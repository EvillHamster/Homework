(function () {

    document.addEventListener('click', burgerMenu) 
        
        function burgerMenu(event) {

            const burgerIcon = event.target.closest('.burger-icon')
            if(burgerIcon) {
                console.log(`сработал burger-icon`);
                
            }

            const burgerNavLink = event.target.closest('.nav__link')
            if(burgerNavLink) {
                console.log(`сработал burgerNavLink`);
                
            }

            if(!burgerIcon && !burgerNavLink) return
            if(document.documentElement.clientWidth > 900) return
            
            document.body.classList.toggle('body--opened-menu')
        }
    }
)();