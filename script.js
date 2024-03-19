const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const convertedNumInput = parseInt(numberInput);
const outputEl = document.getElementById("output");

const codes = [
    {
        1: "I"
    },
    {
        4: "IV"
    },
    {
        5: "V"
    },
    {
        9: "IX",
    },
    {
        10: "X",
    },
    {
        40: "XL"
    },
    {
        50: "L"
    },
    {
        90: "XC"
    },
    {
        100: "C"
    },
    {
        400: "CD"
    },
    {
        500: "D"
    },
    {
        900: "CM"
    },
    {
        1000: "M"
    },
];

let roman = "";

const codeValues = Object.values(codes);
const baseValues = codeValues.slice().reverse();

const romanConverter = (num) => {

    while (num > 0) {
        baseValues.map((code) => {
            let divider =
                parseInt(Object.keys(code)[0]);

            if (num >= divider) {
                if (num === divider) {
                    roman += Object.values(code)[0];
                    num = 0;
                }
                else {
                    let q = parseInt(num / divider);
                    num = num % divider;
                    for (let i = q; i > 0; i--) {
                        roman += Object.values(code)[0];
                    }
                }
            }
        });
    }
    return roman;
}

const setOutputElement = (msg) => {
    outputEl.style.display = "block";
    outputEl.classList.add("error-message");
    outputEl.textContent = msg;
}

convertBtn.addEventListener("click", (e) => {
    outputEl.classList.remove("error-message");
    e.preventDefault();
    const number = numberInput.value;
    let num = number;
    let err = false;

    if (!numberInput.value) {
        setOutputElement("Please enter a valid number");
    }
    else if (number <= 0) {
        setOutputElement("Please enter a number greater than or equal to 1");

    }
    else if (number > 3999) {
        setOutputElement("Please enter a number less than or equal to 3999");
    }
    else {
        roman = "";
        const romanNumeral = romanConverter(num);
        outputEl.style.display = "block";
        outputEl.textContent = romanNumeral;
    }
});