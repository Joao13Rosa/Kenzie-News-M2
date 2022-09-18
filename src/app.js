class App {

    static requisicao() {

        fetch("https://kenzie-news-api.herokuapp.com/api/news")
            .then((response) => response.json())
            .then((response) => {
                for (let i = 0; i < response.length; i++) {
                    if (i === 0) {
                        this.templatePrincipal(response[i])
                    } else {
                        this.template(response[i])
                    }
                } 
            })
            
    }

    static template(response) {
        const ul = document.querySelector('ul');

        const li = document.createElement('li');
        const divImg = document.createElement('div');
        const img = document.createElement('img');
        const divText = document.createElement('div');
        const pCategoria = document.createElement('p');
        const h2 = document.createElement('h2');
        const pDescricao = document.createElement('p');
        const pFonte = document.createElement('p');

        pCategoria.classList.add('pCategoria');
        pDescricao.classList.add('pDescricao');
        pFonte.classList.add('pFonte');
        img.classList.add('imgDoc');
        divText.classList.add('divText');
        divImg.classList.add('divImg');


        img.src = response.imagem;
        pCategoria.innerText = response.categoria;
        h2.innerText = response.titulo;
        pDescricao.innerText = response.resumo;
        pFonte.innerText = 'Fonte: ' + response.fonte;

        ul.append(li);
        li.append(divImg, divText);
        divImg.append(img);
        divText.append(pCategoria, h2, pDescricao, pFonte);
    }

    static templatePrincipal(response) {
        const divPrincipal = document.querySelector('.principal');

        const DivText = document.createElement('div');
        const pCategoria = document.createElement('p');
        const h1 = document.createElement('h1');
        const pDescricao = document.createElement('p');
        const pFonte = document.createElement('p');
        const divImg = document.createElement('div');
        const img = document.createElement('img');

        DivText.classList.add('infoPrincipal');
        pCategoria.classList.add('pCategoriaPrincipal');
        pDescricao.classList.add('pDescricaoPrincipal');
        pFonte.classList.add('pFontePrincipal');
        divImg.classList.add('imgPrincipal');
        img.classList.add('imgDocPrincipal');

        img.src = response.imagem;
        pCategoria.innerText = response.categoria;
        h1.innerText = response.titulo;
        pDescricao.innerText = response.resumo;
        pFonte.innerText = 'Fonte: ' + response.fonte;

        divPrincipal.append(DivText, divImg);
        divImg.append(img);
        DivText.append(pCategoria, h1, pDescricao, pFonte);
        
    }

    

}
const app = new App();
App.requisicao();