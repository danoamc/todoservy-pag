(function(){
    const sliders =[...document.querySelectorAll('.negociosimg_body')];
    const butttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    butttonNext.addEventListener('click',()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentEjer_negocios = document.querySelector('.negociosimg_body-show').dataset.id;
        value = Number(currentEjer_negocios);
        value += add;

        sliders[Number(currentEjer_negocios)-1].classList.remove('negociosimg_body-show');
        if (value === sliders.length + 1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('negociosimg_body-show');
    }    


})();