const GAME_MESSAGE = Object.freeze({
  CAR_NAME_INPUT: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_NUMBER_INPUT: '시도할 횟수는 몇 회인가요?\n',
});
const ERROR_MESSAGE = Object.freeze({
  CAR_NAME_NOT_ALLOWED_EMPTY: '[ERROR] 자동차의 이름에 빈값은 허용되지 않습니다.',
  CAR_NAME_NOT_ALLOWED_GAP: '[ERROR] 자동차의 이름에 공백이 포함되면 안됩니다.',
  CAR_NAME_NOT_ALLOWED_DUPLICATION: '[ERROR] 자동차의 이름이 중복되었습니다.',
  CAR_NAME_MAX_LENGTH_FIVE: '[ERROR] 자동차의 이름은 5자 이하만 가능합니다.',
  TRY_NUMBER_TYPE_ERROR: '[ERROR] 숫자만 입력 가능합니다.',
  TRY_NUMBER_RANGE_ERROR: '[ERROR] 숫자만 입력 가능합니다.',
});

export { GAME_MESSAGE, ERROR_MESSAGE };
