let count = 0; // set initial count

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// add event listener to all buttons
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        // get value of button
        const styles = e.currentTarget.classList; 
        if(styles.contains('decrease')){
            count--; // decrease count
        } else if(styles.contains('increase')){
            count++; // increase count
        } else {
            count = 0; // reset count
        }
        if(count > 0) {
            value.style.color = 'green';
        } else if(count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        value.textContent = count; // update value
    });
}); 
