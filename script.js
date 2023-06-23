 async function showMessage() {
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