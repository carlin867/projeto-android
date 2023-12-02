
    function menuShow() {
        var itens = document.querySelector('.itens');
        var click = document.querySelector('.click');
        var itenscheio = document.querySelector('.itens-cheio');
        if (itens.style.display == 'block') {
          itenscheio.style.display = 'none';
          itens.style.display = 'none';
          click.style.background = 'green';
          document.querySelector('.click img').src = "open.svg";
          document.querySelector('.click:hover').src = "rgb(114, 168, 32)";
        } else {
          itenscheio.style.display = 'none';
          itens.style.display = 'block';
          click.style.background = 'red';
          document.querySelector('.click img').src = "close.svg";
          
        }
      }
   
        
