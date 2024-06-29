document.addEventListener('DOMContentLoaded', function() {
   
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const message = document.querySelector('#message').value;

        if (name && email && phone && message) {
            
            fetch ('http://localhost:3000/api//contacts', {
                method:"POST", 
                headers:{
                    "Content-Type": "application/json"
                }, 
                body:JSON.stringify({
                    name, email, phone, message
                })
            }).then(()=>{

                alert('Mensagem enviada com sucesso!');
            })
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
    
    document.querySelector('#newsletter form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.querySelector('#newsletter-email').value;

        if (email) {
            fetch ('http://localhost:3000/api/subscribers', {
                method:"POST", 
                headers:{
                    "Content-Type": "application/json"
                }, 
                body:JSON.stringify({
                    email
                })
            }).then(()=>{

                alert('Inscrição realizada com sucesso!');
            });
        } else {
            alert('Por favor, insira seu email.');
        }
    });
});
