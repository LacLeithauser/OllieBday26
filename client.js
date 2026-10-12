let x = 0;
let locked = false;

const graves = document.querySelectorAll(".clickAnim");
const blurs = document.getElementById("blur");


graves.forEach((clickAnim) => {    
    clickAnim.addEventListener("click", () => {
        graves.disabled = true;
        if (locked) return;    
        locked = true;
        resize.call(clickAnim);
        setTimeout(() => {   
            graves.disabled = false;
            locked = false;
        }, 1500);
    })
})

function resize() {
        const isBlurred = blurs.classList.toggle("blur");
        const isGrown = this.classList.toggle("grow");
        this.classList.toggle("shrink", !isGrown);
        blurs.classList.toggle("unblur", !isBlurred);
        console.log(isGrown ? "beep" : "boop"); 
}