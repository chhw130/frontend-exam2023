var exceptionTypes = {
  // 핸들링 불가능한 오류 
  Unknown_50000 : { name : 'Unknown',  isError : true, code : 50000, message : '일시적인 문제로 데이터를 불러오지 못했습니다. 다시 시도해주세요. 문제가 지속되면 고객센터로 알려주세요'},
  NotImplemented_50001 : { name : 'NotImplemented',  isError : false, code : 50000, message : '일시적인 문제로 데이터를 불러오지 못했습니다. 다시 시도해주세요. 문제가 지속되면 고객센터로 알려주세요'},
};

function getWeatherFromServerError() {
  throw NotImplemented_50001;
}

/*
 abnormal 문제까지 해결하셨나요?
 그럼 해당코드에서 getWeatherFromServerAbnormal 함수 대신 
 getWeatherFromServerError를 호출해주세요.
 그리고 발생하는 오류를 자기 스타일대로 제어 해주세요.
 그리고 그렇게 제어한 이유를 글로 작성해주세요.
*/