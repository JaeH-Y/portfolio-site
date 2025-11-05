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
    addCloseModalKeyEvent();
    
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

// ESC로 모달 닫기

function addCloseModalKeyEvent(){
  document.addEventListener('keydown', closeModal)
}

function closeModal(e){
  if(e.key === 'Escape'){
    imageModal.style.display = 'none';
    document.removeEventListener('keydown',closeModal)
  } 
  else return;
}

imageModal.addEventListener('click', function(e){
  console.log(e.target);  // 현재 이벤트가 발생한 대상 (사용자가 실제로 클릭한 요소)
  console.log(e.currentTarget);   // 이벤트가 바인딩 된 요소 (여기선 imageModal), this와 동일
  console.log(e.target.id === 'imageModal');
  console.log(e.target === e.currentTarget);

  e.stopPropagation()   // 버블링(이벤트 역류) 방지
  
  if(e.target === e.currentTarget){
    imageModal.style.display = 'none';
  }
})

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용

const yearT = document.querySelector('.this-year');
const year = new Date().getFullYear();
yearT.textContent = year;

// 페이지 최상단으로 이동
const totopEL = document.querySelector('#toTop');

// 페이지에 스크롤 이벤트 감지를 추가!
// 브라우저는 문서 전체의 스크롤을 window 기준으로 처리(스크롤 이벤트는 window에 부여하는게 안전(브라우저마다 다를 수 있어서))
/* window.addEventListener('scroll', function(){
  // console.log(window.scrollY);
  if(window.scrollY > 500){
    totopEL.setAttribute('class', 'show');
  }
  else{
    totopEL.removeAttribute('class','show');
  }
}) */

const aboutarea = document.querySelector('section#about');
console.log(aboutarea);

topBtn(aboutarea);
function topBtn(area) {
  // create a scene
  new ScrollMagic.Scene({
    triggerElement : area, // 감시할 장면 추가 및 옵션 지정
    triggerHook : 0.2   // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
    .setClassToggle(totopEL, 'show')  // 요소가 화면에 보이면 show 클래스 추가
    .addTo(controller); // 컨트롤러에 장면 할당(필수!!)
}

const viewarea = document.querySelector('section.visual');
const flashTextArr = document.querySelectorAll('.animate-flash');

window.addEventListener('scroll', function(){
  // console.log(viewarea.getBoundingClientRect(), window.innerHeight);
  const nowViewY = viewarea.getBoundingClientRect().y;
  // console.log(nowViewY + window.innerHeight);
  
  if(nowViewY + window.innerHeight < 200){
    flashTextArr.forEach(x => {
      x.classList.remove('animate-flash');
    })
  }
  else{
    flashTextArr.forEach(x => {
      x.classList.add('animate-flash');
    })
  }
  
})