class Tab {
    constructor() {
        this.init();
    }
    init() {
        this.createWrap();
    }
    event() {
        let span = document.querySelector('.main').getElementsByTagName('span');
        let con = document.querySelector('.content').getElementsByTagName('span');
        [...span].forEach((v, i) => {
            v.addEventListener('click', () => {
                for (var j = 0; j < span.length; j++) {
                    span[j].className = ' ';
                    con[j].style.display = 'none';
                }
                span[i].className += 'on';
                con[i].style.display = 'block';
            })
        })
    }
    createSpan() {
        let main = document.createElement('div');
        for (let i = 0; i < 3; i++) {
            let span = document.createElement('span');
            span.innerHTML = i + 1;
            if (i == 0) {
                span.className += 'on';
            }
            main.appendChild(span);
        }
        main.className = 'main';
        return main;
    }
    createContent() {
        let content = document.createElement('div');
        for (let i = 0; i < 3; i++) {
            let span = document.createElement('span');
            span.innerHTML = i + 1;
            if (i == 0) {
                span.style.display = 'block'
            }
            content.appendChild(span);
        }
        content.className = 'content';
        return content;
    }
    createWrap() {
        let div = document.createElement('div');
        let main = this.createSpan();
        let content = this.createContent();
        div.appendChild(main)
        div.appendChild(content)
        div.className = 'wrap';
        document.body.appendChild(div);

        this.event();
    }
}

let tab = new Tab();