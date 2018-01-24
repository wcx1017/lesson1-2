class Dialog {
    // 构造函数
    constructor(tit = '标题党', content = 'this is good day') {
        // 实例属性
        this.tit = tit;
        this.content = content;
        this.init();
    }

    // 实例方法
    init() {
        this.createWrap();
    }

    // 点击事件
    event() {
        let span = document.querySelector('.close');
        let login = document.querySelector('.login');
        let btn = document.querySelector('.ok');
        let clo = document.querySelector('.no');
        login.addEventListener('click', () => {
            this.show();
        })
        span.addEventListener('click', () => {
            console.log('1')
            this.hide();
        })
        btn.addEventListener('click', () => {
            this.hide();
            this.createBox();
        })
        clo.addEventListener('click', () => {
            this.hide();
        })
    }
    show() {
        let div = document.querySelector('.dialog');
        let login = document.querySelector('.login');
        login.style.display = 'none';
        div.style.display = 'block';
    }

    // 弹框隐藏
    hide() {
        let div = document.querySelector('.dialog');
        let login = document.querySelector('.login');
        login.style.display = 'block';
        div.style.display = 'none';
    }

    // 创建按钮
    createBtn(txt, name) {
        let btn = document.createElement('button');
        btn.innerHTML = txt;
        btn.className = name;
        return btn;
    }

    // 创建标题
    createTit() {
        let tit = document.createElement('h3');
        let span = document.createElement('span');

        span.className = 'close';
        span.innerHTML = '&times;'

        tit.className = 'dialog-tit';
        tit.innerHTML = this.tit;

        tit.append(span);
        return tit;
    }

    // 创建内容
    createContent() {
        let ul = document.createElement('ul');
        let btns = this.createBtn('确定', 'ok');
        let btnss = this.createBtn('取消', 'no');

        ul.className = 'dialog-content';
        ul.innerHTML = this.content;

        ul.append(btns);
        ul.append(btnss);
        return ul;
    }

    // 创建盒子
    createWrap() {
        let div = document.createElement('div');
        let tit = this.createTit();
        let content = this.createContent();

        div.append(tit);
        div.append(content);
        div.className = 'dialog';

        document.body.append(div);
        this.event();
    }

    createBox() {
        let div = document.createElement('div');
        div.className = 'box';


        let main = document.createElement('div');
        main.className = 'main';

        let tit = this.createTit();
        main.append(tit);
        div.append(main);

        document.body.append(div);
    }

}

let dialog = new Dialog();