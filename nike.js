
// 헤더 네브 메뉴 호버로 열기 닫기 
$(function(){

  $(".menu_ li").hover(
    function(){
    $('ul:first',this).show();
  },

   function(){
    $('ul:first',this).hide();
  })
  
})

// desc->
// menu_ 라는 클래스를 가진 ul태그의 li가 호버가 되면 함수 실행->
// 함수 -> 이 태그의 첫번째 태그 요소인  u을 선택하고 fadeIn()함수를 써서 천천히 열려라
// 그리고 fadeOut() 함수를 써서 천천히 닫힌다.

// 문제점1.
// 타이틀 hover 시 하위 메뉴가 열리고 사라지는건 가능하나
// 마우스를 하위메뉴로 옮기면 position으로 위치를 이동해서 
// 타이틀과 하위메뉴 사이의 여백 때문에 hover가 풀리면서 하위메뉴가 사라짐. 

// 해결1. 
// 타이틀과 하위메뉴의 여백을 없에서 하위메뉴가 사라지지 않고 마우스가 올려짐. 

// 해결2. 
// 만약 여백이 있어야 하는 레이아웃 일때 추가 함수를 넣어야함 
// 이때 어느 함수를 써야하는가? 

 // --------------------------------------
// 검색메뉴 열리고 닫기 위에서 아래로

// 설계

// 검색메뉴 클릭
// html 상단 밖에서 안쪽으로 천천히 내려옴

// x버튼 클릭
// 위로 천천히 html 밖으로 나감

// ㅡ 마진을 사용

$(".open_serching").click(function(){
  $('.open_serch').css('margin-top','0%')
})


$(".close_serch").click(function(){
  $('.open_serch').css('margin-top','-100%')
})




// -------------------------------------------------------
// 햄버거 메뉴

// 설계

// 텍스트 클릭하면 margin 값이동으로 왼쪽 텍스트는 왼쪽으로 밀려서 숨겨지고
// 밀려있던 오른쪽에서 마진값으로 밀어서 브라우저에 노출. 

// 동시에 title 텍스트의 다음 요소를 서브 텍스트로 인식 시켜서 노출 시키고
// 나머지는 숨긴다

// 햄버거 메뉴 클릭 하면 열리기 or 닫기 
  // 열기
$('.hambuger i').click(function(){
  $('.open_hambuger').css('right','0%')
})

$(".close_hambuger i").click(function(){
  $('.open_hambuger').css('right','-100%')
})
// 닫기

// 타이틀 클릭하면 서브 메뉴 나오기 
$(".new_relases_title").click(function(){
  $(this).css('marginLeft','-100%')
  $(this).next().css('marginRight','0')
  $(".close_hambuger i").css('visibility','hidden')
})

// 서브메뉴에서 타이틀로 돌아가기 
$(".new_relases_contents_back i").click(function(){
  $(this).closest('.new_relases_contents').css('marginRight','-120%')
  $('.new_relases_title').css('marginLeft','0%')
  $(".close_hambuger i").css('visibility','visible')
})


// function handler(event) {
//   var $target = $(event.target);
//   if($target.is('.new_relases_title p')){
//     $target.next().css('display','block');
//   }
// }


// ----------------------------------------------------------
// 스와이퍼 모바일 

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 0,
  slidesPerGroup: 3,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});