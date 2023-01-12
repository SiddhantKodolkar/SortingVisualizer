async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'white';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'blue';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            const temp = ele[j].innerHTML
            ele[j].innerHTML = ele[j+1].innerHTML
            ele[j+1].innerHTML = temp
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'white';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'white';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
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
    await insertion();
    clearInterval(timer);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});