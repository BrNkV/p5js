//lesson https://youtu.be/Lmbh5V_mBvc

let len = 3;
let size = 60;
let colors = ['#7fb7be', '#0d4b2b', '#5710da'];

//размер области
function setup() {
    createCanvas(windowWidth, windowHeight);
}


//рисует холст
function draw() {

    let angle = cos(frameCount / 10);

    //добавился след для кругов //2ой параметр меняет длинну следа
    background(0, 5);

    //для задачи скорости вращения (10 быстро)
    let frame = frameCount / 20;

    //передвинуло расположение в центр
    translate(width / 2, height / 2);
    noStroke();

    for (let i = 0; i < len; i++) {
        push();

        //вращает конструкцию массива
        rotate(i + frame)

        //назначили цвета из массива colors
        fill(colors[i]);

        //рисует круг // 
        ellipse(i * size + size, 0, size);

        pop();
    }
}