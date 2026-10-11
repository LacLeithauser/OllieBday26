let x = 0;

const graves = document.querySelectorAll(".clickAnim");

graves.forEach((clickAnim) => {    
    clickAnim.addEventListener("click", resize)
})

function resize() {
    const isGrown = this.classList.toggle("grow");
    this.classList.toggle("shrink", !isGrown);
    console.log(isGrown ? "beep" : "boop");
}
