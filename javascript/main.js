// ScrollMagic 사용법
// init controller
const controller = new ScrollMagic.Controller();

const spyEls = document.querySelectorAll('section.scroll-spy');
// console.log(spyEls)

spyEls.forEach(function(x){
  // console.log(x, index);
  
  // create a scene
  new ScrollMagic.Scene({
    triggerElement : x, // 감시할 장면 추가 및 옵션 지정
    triggerHook : 0.5   // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
    .setClassToggle(x, 'show')  // 요소가 화면에 보이면 show 클래스 추가
    .addTo(controller); // 컨트롤러에 장면 할당(필수!!)
});


const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  direction: 'horizontal',  // 수평 슬라이드(기본값)
  loop: true,               // 반복재생 여부
  /* autoplay : {              // 자동재생 여부
    delay : 5000
  }, */

  // If we need pagination
  pagination: {
    el: '.project .swiper-pagination',
    clickable: true /* 사용자의 페이지네이션 요소 제어 가능 여부 */
  },

  // Navigation arrows
  navigation: {
    /* 이전, 다음 슬라이드 버튼 옵션 */
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// 모달창 띄우기

const imageModal = document.querySelector("#imageModal");
const btns = document.querySelectorAll('.btn-modal-img');
const closeBtn = document.querySelector('#imageModal .btn-close');
const viewImg = document.querySelector('.modal-body img');

closeBtn.addEventListener('click', () => {
  imageModal.style.display = 'none';
})

btns.forEach((x, index) => {
  // addEventListener 에서 function()과 () => 의 차이
  /* this를 호출할 때 function은 이벤트를 사용하는 객체가 호출됨
  () => 는 Window가 호출됨*/
  x.addEventListener('click', function() {
    imageModal.style.display = 'flex';
    
    // this.dataset;
    console.log(this.dataset.imgSrc);
    
    viewImg.src = this.dataset.imgSrc;
    // viewImg.src = `images/work_${index * 2 + 1}.jpg`
    /* if(index == 0){
      viewImg.src = 'images/work_1.jpg'
    }
    else{
      viewImg.src = 'images/work_3.jpg'
    } */
  })
})
