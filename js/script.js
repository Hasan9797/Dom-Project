document.addEventListener('DOMContentLoaded', () => {
    // Loader...

    const loader = document.querySelector('.Loader');
    setTimeout(function (){
        loader.style.opacity = '0';
        setTimeout(function (){
            loader.style.display = 'none'
        },1500)
    }, 2000)

    //Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabcontent = document.querySelectorAll('.tabcontent'),
          tabItems = document.querySelector('.tabheader__items');

    function hideTabContent (){
        tabcontent.forEach(item => {
            item.classList.add('none')
            item.classList.remove('show')
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent (i= 0){
        tabcontent[i].classList.add('show')
        tabcontent[i].classList.remove('none')

        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent()

    tabItems.addEventListener("click", (ev) => {
        if (ev.target && ev.target.classList.contains('tabheader__item')){
          tabs.forEach((item, i) => {
              if (ev.target === item){
                   item.addEventListener("click", () => {
                     hideTabContent()
                    showTabContent(i)
                 })
              }
        })
    }
})


    // MODAL

    const allModal = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          close_Modal = document.querySelector('.modal__close');

    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('none');
        document.body.style.overflow = 'hidden';
    }


    function closeModal(){
        modal.classList.add('none');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    allModal.forEach(btn => {
       btn.addEventListener('click', openModal)
    })

    close_Modal.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target === modal){
            closeModal()
        }
    })

    function showMyModalByScroll(){
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal()
            window.removeEventListener('scroll', showMyModalByScroll)
        }
    }

    window.addEventListener('scroll', showMyModalByScroll);



})