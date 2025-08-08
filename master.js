const cells = document.querySelectorAll(".cell")
const _try = document.getElementById('try')

let flag = 1
let x1 = null
let x2 = null
let isLocked = false;
let tries = 0
correct = 0

cells.forEach((val, i) => {
    val.addEventListener('click', (e) => {
        if (isLocked || val.classList.contains('rotate')) return;

        if (flag % 2) {
            x1 = val
            x1Data = val.dataset.front
            x1.classList.add('rotate')
            flag++

        } else {
            x2 = val
            x2Data = val.dataset.front
            x2.classList.add('rotate')

            isLocked = true

            if (x1Data == x2Data) {
                isLocked = false
                correct++
            } else {
                setTimeout(() => {
                    x1.classList.remove('rotate');
                    x2.classList.remove('rotate');
                    isLocked = false
                }, 500);
            }
            if (correct == 8) document.getElementById('popup').style.display = 'flex'

            flag++
            tries++

            _try.innerHTML = 'try: ' + tries

        }
    })
})

// random
values = []
nValues = []
for (let i = 1; i <= 8; i++) {
    values.push(i, i);
}

for (let i = values.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    nValues.push(values[j])
    values.splice(j, 1);
}

cells.forEach((i, val) => {
    i.setAttribute('data-front', nValues[val])
})

function reastartGame() {
    document.getElementById('popup').style.display = 'none'
    location.reload();
}
