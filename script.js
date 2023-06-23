const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//your code hereasync function showMessage() {
            const textInput = document.getElementById('text');
            const delayInput = document.getElementById('delay');
            const outputDiv = document.getElementById('output');

            const message = textInput.value;
            const delay = parseInt(delayInput.value);

            outputDiv.innerText = 'Loading...';

            await delayFunction(delay);
            outputDiv.innerText = message;
        }

        function delayFunction(delay) {
            return new Promise(resolve => {
                setTimeout(resolve, delay);
            });
        }

        const button = document.getElementById('btn');
        button.addEventListener('click', showMessage);
async function showMessage() {
  const message = text.value;
  const delayVal = delay.value;
  await new Promise((resolve) => setTimeout(resolve, delayVal));
  output.innerText = message;
}

btn.addEventListener("click", showMessage);
