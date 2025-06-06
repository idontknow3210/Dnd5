function сountingСharacteristics() {
    let i = 27;
    let x = [8, 8, 8, 8, 8, 8];

    for (let index = 0; index < document.querySelectorAll(".plus").length; index++) {
        document.querySelectorAll(".plus")[index].addEventListener("click", () => {
            if (i > 0 && document.querySelectorAll(".number")[index].innerHTML < 15) {
                if (x[index] >= 13) {
                    i = i - 2;
                } else {
                    i--;
                }
                x[index]++;
                document.querySelector(".result").innerHTML = i;
                document.querySelectorAll(".number")[index].innerHTML = x[index];
            } else {
                alert("Количество очков на прокачку персонажа даётся не более 27 очков, а также максимальная характеристика, без учета бонуса расы, не больше <<15>>");
            }
        });
        document.querySelectorAll(".minus")[index].addEventListener("click", () => {
            if (i < 27 && document.querySelectorAll(".number")[index].innerHTML > 8) {
                if (x[index] >= 14) {
                    i = i + 2;
                } else {
                    i++;
                }
                x[index]--;
                document.querySelector(".result").innerHTML = i;
                document.querySelectorAll(".number")[index].innerHTML = x[index];
            } else {
                alert("Ниже 8 характеристика быть не может..");
            }
        });
    }
}
сountingСharacteristics();

document.querySelector(".dropdown").addEventListener("click", () => {
    document.querySelectorAll(".glow-on-hover").forEach((el) => {
        if (el.style.display === "block") {
            el.style.display = "none";
        } else {
            el.style.display = "block";
        }

    });
});
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.querySelector(".countDice").addEventListener("click", (e) => {
    e.preventDefault();
    const getDice = [];
    document.querySelectorAll(".getDice").forEach((el) => {
        el.value !== "" ? getDice.push(+(el.value)) : getDice.push(0);
    });
    let sumDice = 0;
    getDice.forEach((el, id) => {
        if (el !== 0) {
            for (let i = 0; i < el; i++) {
                switch (id) {
                    case 0:
                        sumDice += getRandomInRange(1, 4);
                        break;
                    case 1:
                        sumDice += getRandomInRange(1, 6);
                        break;
                    case 2:
                        sumDice += getRandomInRange(1, 8);
                        break;
                    case 3:
                        sumDice += getRandomInRange(1, 10);
                        break;
                    case 4:
                        sumDice += getRandomInRange(1, 12);
                        break;
                }
            }
        }
    });
    document.querySelector(".resultDice").textContent = "Получилось: " + sumDice;
});

document.querySelector(".btnRaR").addEventListener("click", () => {
    let result = 0;
    let gold = document.querySelector(".gold");
    function getBox(RaR) {
        gold.children[0].className = RaR;
        gold.style.display = "flex";
    }
    switch (+document.querySelector("#category").value) {
        case 1:
            console.log(1);
            result = getRandomInRange(1, 100);
            console.log(result);
            if (result >= 1 && result <= 75) {
                getBox("common");
            } else if (result >= 76 && result <= 95) {
                getBox("uncommon");
            } else {
                getBox("rare");
            }
            break;
        case 2:
            console.log(2);
            result = getRandomInRange(1, 100);
            console.log(result);
            if (result >= 1 && result <= 60) {
                getBox("common");
            } else if (result >= 61 && result <= 80) {
                getBox("uncommon");
            } else if (result >= 81 && result <= 95) {
                getBox("rare");
            } else {
                getBox("veryRare");
            }
            break;
        case 3:
            console.log(3);
            result = getRandomInRange(1, 100);
            console.log(result);
            if (result >= 1 && result <= 40) {
                getBox("common");
            } else if (result >= 41 && result <= 65) {
                getBox("uncommon");
            } else if (result >= 66 && result <= 85) {
                getBox("rare");
            } else if (result >= 86 && result <= 95) {
                getBox("veryRare");
            } else {
                getBox("legendary");
            }
            break;
        case 4:
            console.log(4);
            result = getRandomInRange(1, 100);
            console.log(result);
            if (result >= 1 && result <= 30) {
                getBox("common");
            } else if (result >= 31 && result <= 50) {
                getBox("uncommon");
            } else if (result >= 51 && result <= 75) {
                getBox("rare");
            } else if (result >= 76 && result <= 90) {
                getBox("veryRare");
            } else {
                getBox("legendary");
            }
            break;
        case 5:
            console.log(5);
            result = getRandomInRange(1, 5);
            console.log(result);
            switch (result) {
                case 1:
                    getBox("common");
                    break;
                case 2:
                    getBox("uncommon");
                    break;
                case 3:
                    getBox("rare");
                    break;
                case 4:
                    getBox("veryRare");
                    break;
                case 5:
                    getBox("legendary");
                    break;


            }


    }
});
