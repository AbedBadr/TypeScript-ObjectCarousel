import { ICar } from "./car";

let car1: ICar = {
    make: "Audi", model: "A4",
    pictureUrl: "https://s7d9.scene7.com/is/image/Audiusastaging/2018-Audi-A4-colorizer-Brilliant-Black",
    year: 2007, price: 120000
};

let car2: ICar = {
    make: "Audi", model: "A6",
    pictureUrl: "http://img2.sm360.ca/ir/w600h450/images/newcar/2018/audi/a6/technik/sedan/exteriorColors/11417_cc0640_001_t9.png",
    year: 2018, price: 600000
};

let car3: ICar = {
    make: "Skoda", model: "Fabia",
    pictureUrl: "https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesETC4DQTYXJJS6DG2UIJEV6QMQYpng/0x8D61A4D22BB28D9/900x450-Fill.png",
    year: 2018, price: 120000
};

let cars: ICar[] = [car1, car2, car3];

function showCar(car: ICar): void {
    let div1: HTMLDivElement = <HTMLDivElement>document.getElementById("div1");
    let div2: HTMLDivElement = <HTMLDivElement>document.getElementById("div2");
    let div3: HTMLDivElement = <HTMLDivElement>document.getElementById("div3");
    let div4: HTMLDivElement = <HTMLDivElement>document.getElementById("div4");
    let div5: HTMLDivElement = <HTMLDivElement>document.getElementById("div5");
    div1.innerHTML = "Make " + car.make;
    div2.innerHTML = "Model " + car.model;
    let pictureElement: string = "<img src=' " + car.pictureUrl + "' alt='car' height='50%' width='50%'/>";
    console.log(pictureElement);
    div3.innerHTML = pictureElement;
    div4.innerHTML = "Year " + car.year;
    div5.innerHTML = "Price " + car.price;
}

let index: number = 0;
showCar(cars[index]);

let leftButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("leftButton");
let rightButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rightButton");
leftButton.addEventListener("click", () => {
    index--;
    if (index < 0) { index = cars.length - 1; }
    showCar(cars[index]);
});

rightButton.addEventListener("click", () => {
    index++;
    if (index === cars.length) { index = 0; }
    showCar(cars[index]);
});