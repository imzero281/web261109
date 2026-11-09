// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 이찬미(2651054)
const titles = ["헝거게임: 판엠의 불꽃", "헝거게임: 캣칭 파이어", "헝거게임: 모킹제이", "헝거게임: 더 파이널", "헝거게임: 노래하는 새와 뱀의 발라드"];
const ratings = [7.2, 7.4, 6.8, 6.9, 6.9];
const years = [2012, 2013, 2014, 2015, 2023];

// 즉시 실행 함수 만들기
(function init(){
    console.log("나는 함수다. 실행이 되었다");
})();

//화살표 함수로 함수 정의하기
const gugudan = dan => {
    for (let i=1; i<=9; i++){
        console.log(`${dan} * ${i} = ${dan*i}`);
    }
}
gugudan(7);

const add = (num1, num2) => num1+num2;
console.log(add(1234,5678));


let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;
let count = 0;

for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }
    if (ratings[i] >= 8) {
        count++;
    }
}
console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");


for (let i = 0; i < ratings.length; i++) {
    let label;
    if (8.5 < ratings[i]) {
        label = "명작";
    }
    else if (7 < ratings[i]) {
        label = "추천";
    }
    else {
        label = "보통";
    }

    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);