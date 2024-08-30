const nikeList = document.querySelector('#nike_list');  // 1번
const items = [['./img/img_04.png', '나이키 인빈서블', '209,000 원'], //2번 데이터
                ['./img/img_05.png', '나이키 인빈서블', '129,000 원'],
                ['./img/img_06.png', '나이키 p-6000', '169,000 원'],
                ['./img/img_07.png', '나이키 p-5400', '129,000 원'],
                ['./img/img_08.png', '나이키 조던 뮬', '159,000 원'],
                ['./img/img_09.png', '나이키 조던 4 RM', '179,000 원'],
                ['./img/img_04.png', '나이키 인빈서블', '209,000 원'],
                ['./img/img_05.png', '나이키 인빈서블', '129,000 원'],
                ['./img/img_06.png', '나이키 p-6000', '169,000 원']
            ]; //서버에서 넘어오는 정보.


let currentIndex = 0; //전역변수

function addListItem(){   //4, 함수선언 // 6.함수실행
    let newItem = ''; //지역변수로 밖에다 선언해놓고 호출해서 써놓는다  /7.지역변수 선언
    for(let i = 0; i <  3 && currentIndex < items.length; i++){   //8.반복분 실행
        newItem += `<li><a href="#"><img src="${items[currentIndex][0]}" alt=""><span>${items[currentIndex][1]}</span><span>${items[currentIndex][2]}</span></a></li>`//대입을 계속 추가함 데이터가 계속 쌓이게됨 갯수를 제한하지 않았음
        currentIndex++;
    }
    if(currentIndex >= items.length){
        document.querySelector('#more_btn').style.display = 'none';
    }
    nikeList.insertAdjacentHTML('beforeend', newItem);
    //insertAdjacentHTML ->메서드 , 지정하는 위치에 html을 삽입하는 역할을함. 두개의 인자를 받는다.
    //beforeend
    //
    //
    //--beforebegin-- p요소 바로 앞에 html 삽입
    // <p>
    // -----afterbegin -- p요소 첫번째 자식 바로 앞에 html삽입
    // <span> Hello World! </span>
    // --brforeend-- p요소 마지막 자식 바로 다음에 html삽입   *이거를 사용해야함
    // </p>
    // ---afterend---p요소 바로 다음에 html 삽입
    //
};
    document.querySelector('#more_btn').addEventListener('click',addListItem); //5.이벤트 함수 매칭