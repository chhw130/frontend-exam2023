var exceptionTypes = {
  // 핸들링 불가능한 오류 
  Unknown_50000 : { name : 'Unknown',  isError : true, code : 50000, message : '일시적인 문제로 데이터를 불러오지 못했습니다. 다시 시도해주세요. 문제가 지속되면 고객센터로 알려주세요'},
  NotImplemented_50001 : { name : 'NotImplemented',  isError : false, code : 50000, message : '일시적인 문제로 데이터를 불러오지 못했습니다. 다시 시도해주세요. 문제가 지속되면 고객센터로 알려주세요'},
};

function getWeatherFromServerError() {
  throw NotImplemented_50001;
}
