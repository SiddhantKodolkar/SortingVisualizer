  async function bubble() {
    console.log('In bubble()');
    
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'yellow';
            ele[j+1].style.background = 'yellow';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'rgb(59, 193, 234)';
            ele[j+1].style.background = 'rgb(59, 193, 234)';
        }
        ele[ele.length-1-i].style.background = 'white';
        
    }
    ele[0].style.background = 'white';
    
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    var timer;
    var ele=document.getElementById('timer');
    (function(){
        var sec=1;
        timer=setInterval(()=>{
            ele.innerHTML= 'Timer(seconds) : ' +sec;
            sec++;
        
        },1000)
    })()
    
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    clearInterval(timer);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});