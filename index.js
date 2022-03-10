let entry = '';
let log = '0';
let eqn = '';
let history = '0';

const historyOutput = document.querySelector('.prevous-output');
const eqnOutput = document.querySelector('.current-output');
const btns = document.querySelectorAll('button');

for (let btn of btns) {
  btn.addEventListener('click', (e) => {
    let entry = e.target.value;
    switch (entry) {
      case 'ac':
        log = '0';
        history = '0';
        eqn = '';
        break;
      case '.':
        log += '.';
        break;
      case 'c':
        if (log.length <= 1) {
          log = '0';
        } else {
          log.substring(0, log.length - 1);
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        eqn += log + entry;
        log = '0';
        break;
      case '=':
        eqn += log;
        history = eqn;
        log = String(eval(eqn));
        eqn = '';
        break;
      default:
        if (log === '0') {
          log = entry;
        } else {
          log += entry;
        }
        break;
    }
    eqnOutput.innerHTML = log;
    if (eqn === '') {
      historyOutput.innerHTML = history;
    } else {
      historyOutput.innerHTML = eqn;
    }
  });
}
