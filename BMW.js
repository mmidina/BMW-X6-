document.addEventListener('DOMContentLoaded', ( ) =>{
    const featureLinkElens = document.querySelectorAll('.feature__link');
    const featureSubElens = document.querySelectorAll('.feature-sub');


    featureLinkElens.forEach((btn,index) => {
        btn.addEventListener('click', () => {
            featureSubElens.forEach((featureSubElen) =>{
              featureSubElen.classList.add('hidden');  
            });

        featureLinkElens.forEach((featureLinkElens) => {
            featureLinkElens.classList.remove('feature__link_active');
        });
            featureSubElens[index].classList.remove('hidden');
            btn.classList.add('feature__link_active');
        }); 
    });
})
