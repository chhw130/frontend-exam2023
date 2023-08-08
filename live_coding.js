/*
    다음 코드에서rty를 에디터에서 모두 삭제하세요.
    json 배열의 순서는 변경하지 마세요.
*/
const getWeatherFromServer = () => {
    return [
        {
          "city": "테헤란",
          "weather": [
            {"temperature": 32.2,  "rainProbability": 30},
            {"temperature": 31.5,  "rainProbability": 40},
            {"temperature": 30.8,  "rainProbability": 50},
            {"temperature": 29.6,  "rainProbability": 45},
            {"temperature": 29.1,  "rainProbability": 55},
            {"temperature": 31.7,  "rainProbability": 60},
            {"temperature": 30.9,  "rainProbability": 50}
          ]
        },        
        {
          "city": "서울",
          "weather": [
            {"temperature": 28.3,  "rainProbability": 10},
            {"temperature": 29.1,  "rainProbability": 10},
            {"temperature": 26.7,  "rainProbability": 10},
            {"temperature": 30.5,  "rainProbability": 10},
            {"temperature": 31.8,  "rainProbability": 10},
            {"temperature": 29.4,  "rainProbability": 10},
            {"temperature": 28.9,  "rainProbability": 30}
          ]
        },
        {
          "city": "파리",
          "weather": [
            {"temperature": 30.1,  "rainProbability": 45},
            {"temperature": 29.7,  "rainProbability": 35},
            {"temperature": 30.5,  "rainProbability": 35},
            {"temperature": 30.2,  "rainProbability": 25},
            {"temperature": 29.8,  "rainProbability": 25},
            {"temperature": 30.9,  "rainProbability": 15},
            {"temperature": 31.5,  "rainProbability": 15}
          ]
        }
      ];
};

/*
    1. 일주일치의 평균 온도를 구하세요. 단위는 섭씨, 정수로 표현
    2. 최고 강수 확률을 구하세요.
    3. 서울, 테헤란, 파리의 (*)일간 날씨 정보를 출력하세요.
       출력 형식은 다음과 같습니다.
       "지난 (*) "서울", "테헤란", "파리"의 평균 온도는 각각 29, 31, 30 입니다."
       "그리고 최고 강수 확률은 각각 30, 60, 45 입니다."

    (*) : 레코드의 수에 따라 다음과 같이 표현
        : 하루간, 이틀간, 삼일간, 사일간, 오일간, 육일간, 일주일간
    4. 함수를 추가하고 코드를 세분화하세요.
*/

const showGeneral = () => {
  var line1 = undefined; // 지난 일주일간 ...
  var line2 = undefined; // 그리고 최고 강수 확률은 ...

  checkResultGeneral(line1, line2);
}

const checkResultGeneral = (line1, line2) => {
    const test1 = `지난 일주일간 "서울", "테헤란", "파리"의 평균 온도는 각각 29, 31, 30입니다.`;
    const test2 = "그리고 최고 강수 확률은 각각 30, 60, 45입니다.";

    if (line1 == test1 && line2 == test2)
        console.log("pass");
    else
        console.log("fail");
};
