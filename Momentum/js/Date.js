const clock = document.querySelector(".date .date-clock");
const date = document.querySelector(".date .date-date")

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");  
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}시 ${minutes}분 ${seconds}초`;
}
getClock();
// 내가 원하는 간격으로 함수를 호출
setInterval(getClock, 1000);

function getDate(){
    const today = new Date();
    const year = String(today.getFullYear());
    const month = parseInt(today.getMonth());
    const now_month = String(month+1).padStart(2,"0");
    // "월"의 경우에는 getMonth()->0이면 1월임을 의미한다.
    const day = String(today.getDate()).padStart(2, "0");
    date.innerHTML = `${year}년 ${now_month}월 ${day}일`
}
getDate();