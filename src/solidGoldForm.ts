export class SolidGoldForm {

    public static onSolidGold: Function = function onSolidGold(){
        let solidGoldForm: HTMLFormElement = <HTMLFormElement>document.getElementById('solidGoldForm');

        solidGoldForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let solidGoldPost: XMLHttpRequest = new XMLHttpRequest();
            solidGoldPost.onreadystatechange = () => {
                if (solidGoldPost.readyState == XMLHttpRequest.DONE) {
                    console.log('solid gold sent');
                }
            };
            solidGoldPost.open('POST', '/solidGoldButton', true);
            solidGoldPost.send(null);

        }, false);

    }
}

