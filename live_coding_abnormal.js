/*
    다음 코드에서 humidity property를 에디터에서 모두 삭제하세요.
    json 배열의 순서는 변경하지 마세요.
*/
const getWeatherFromServerAbnormal = () => {
  return [
    {
      city: "테헤란",
      weather: [
        { temperature: 36.2, rainProbability: 30 },
        { temperature: 31.5, rainProbability: 40 },
        { temperature: -300, rainProbability: 50 },
        { temperature: 29.6, rainProbability: 45 },
        { temperature: 29.1, rainProbability: 55 },
        { temperature: 31.7, rainProbability: 60 },
        { temperature: 30.9, rainProbability: 50 },
      ],
    },
    {
      city: "서울",
      weather: [
        { temperature: 28.3, rainProbability: 20 },
        { temperature: 29.1, rainProbability: 30 },
        { temperature: 28.9, rainProbability: 10 },
        { temperature: NaN, rainProbability: 15 },
        { temperature: 31.8, rainProbability: 25 },
        { temperature: 29.4, rainProbability: 20 },
        { temperature: 28.9, rainProbability: 10 },
      ],
    },
    {
      city: "파리",
      weather: [
        { temperature: undefined, rainProbability: 55 },
        { temperature: 29.7, rainProbability: 50 },
        { temperature: 30.5, rainProbability: 50 },
        { temperature: 30.2, rainProbability: 50 },
        { temperature: 29.8, rainProbability: 0 },
        { temperature: 30.9, rainProbability: 40 },
        { temperature: 31.5, rainProbability: 40 },
      ],
    },
  ];
};

/*
    1. 일주일치의 평균 온도를 구하세요. 단위는 섭씨, 정수로 표현, (섭씨는 -273 이상 이하의 온도를 가질 수 없습니다)
    2. 각 도시별 최고 강수 확률을 구하세요.
    3. 서울, 테헤란, 파리의 (*)일간 날씨 정보를 출력하세요.
       출력 형식은 다음과 같습니다.
       "지난 (*) "서울", "테헤란", "파리"의 평균 온도는 각각 29, 31, 30 입니다."
       "그리고 최고 강수 확률은 각각 30, 60, 45 입니다."

    (*) : 레코드의 수에 따라 다음과 같이 표현
        : 하루간, 이틀간, 삼일간, 사일간, 오일간, 육일간, 일주일간
    4. 핸들링 가능한 예외 상황이 발생하면 해당 레코드를 제외하세요
    5. 함수를 추가하고 코드를 세분화하세요.
*/

const avgTemp = (weatherArr, city, tempObject) => {
  weatherArr.forEach(() => {
    let dayLength = weatherArr.length;
    const avgData = weatherArr.reduce((acc, cur) => {
      if (
        cur.temperature <= -273 ||
        isNaN(cur.temperature) ||
        cur.temperature === undefined
      ) {
        dayLength--;
        return acc;
      } else {
        const sum = acc * 10 + cur.temperature * 10;
        return sum / 10;
      }
    }, 0);

    const temp = Math.round(avgData / dayLength);

    tempObject[city] = temp;
  });
};

const maxRainProbability = (weatherArr, city, rainProbabilityObject) => {
  weatherArr.forEach(() => {
    const rainProbabilityArr = [];
    weatherArr.map((data) => {
      rainProbabilityArr.push(data.rainProbability);
    });

    rainProbabilityObject[city] = Math.max(...rainProbabilityArr);
  });
};

const setString = (day, tempObject, rainProbabilityObject) => {
  const dayString = [
    "하루간",
    "이틀간",
    "삼일간",
    "사일간",
    "오일간",
    "육일간",
    "일주일간",
  ];

  const line1 = `지난 ${
    dayString[day - 1]
  } "서울", "테헤란", "파리"의 평균 온도는 각각 ${tempObject["서울"]}, ${
    tempObject["테헤란"]
  }, ${tempObject["파리"]}입니다.`;
  const line2 = `그리고 최고 강수 확률은 각각 ${rainProbabilityObject["서울"]}, ${rainProbabilityObject["테헤란"]}, ${rainProbabilityObject["파리"]}입니다.`;

  return { line1, line2 };
};

/**에러상태 */
const showAbnormalErrorCase = () => {
  /**사용자에게 사용자 경험을 주기 위해 alert로 err msg표현 */
  try {
    getWeatherFromServerError();
  } catch (err) {
    alert(err.message);
  }
};

const showAbnormal = () => {
  const day = 6;
  var line1 = undefined; // 지난 육일간 ...
  var line2 = undefined; // 그리고 최고 강수 확률은 ...

  /**데이터가져오기 */
  const weatherDatas = getWeatherFromServerAbnormal();

  /**object타입 */
  const tempObject = {};
  const rainProbabilityObject = {};

  /**지정된 기간에 한정해서 데이터 가져오기 */
  weatherDatas.forEach((datas) => {
    const weatherArr = datas.weather.slice(0, day);
    const city = datas.city;

    avgTemp(weatherArr, city, tempObject);
    maxRainProbability(weatherArr, city, rainProbabilityObject);
  });

  /**string형식 데이터 가져오기 */
  var { line1, line2 } = setString(day, tempObject, rainProbabilityObject);

  checkResultAbnormal(line1, line2);
};

const checkResultAbnormal = (line1, line2) => {
  /** 육일일땐 "그리고 최고 강수 확률은 각각 30, 32, 30아닌가요..?" */
  const test1 = `지난 육일간 "서울", "테헤란", "파리"의 평균 온도는 각각 29, 32, 30입니다.`;

  /** 육일일땐 "그리고 최고 강수 확률은 각각 30, 60, 55아닌가요..?" */
  const test2 = "그리고 최고 강수 확률은 각각 30, 60, 50입니다.";

  console.log(line1, line2);

  if (line1 == test1 && line2 == test2) console.log("pass");
  else console.log("fail");
};
