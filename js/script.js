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

    // DATA

    const deadline = '2022-6-1'

    function getTime(endTime){
        const total = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(total / (1000 * 60 * 60 * 24)),
            hours = Math.floor(total / (1000 * 60 * 60) % 24),
            minutes = Math.floor((total / 1000 * 60) % 60),
            seconds = Math.floor((total / 1000) % 60);
        return {
            total: total,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }

    function zero(num){
        if (num < 10){
            return `0${num}`
        }else {
            return num
        }
    }

    function setClock(selector, endTime){
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            const time = getTime(endTime)
            days.innerHTML = zero(time.days)
            hours.innerHTML = zero(time.hours)
            minutes.innerHTML = zero(time.minutes)
            seconds.innerHTML = zero(time.seconds)

            if (time.total <= 0){
                clearInterval(timeInterval)
            }
        }
    }

    setClock('.timer', deadline);
})