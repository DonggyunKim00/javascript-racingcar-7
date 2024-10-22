import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import { ERROR_MESSAGE } from '../src/constant/index.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => Promise.resolve(inputs));
};

describe('자동차 입력 테스트', () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  const TEST_CASES_SUCCESS = [
    ['pobi,woni,jun', ['pobi', 'woni', 'jun']],
    ['1,2,3,4', ['1', '2', '3', '4']],
  ];
  test.each(TEST_CASES_SUCCESS)('자동차 입력 성공', async (input, answer) => {
    mockQuestions(input);

    const cars = await app.setCars();
    expect(cars).toStrictEqual(answer);
  });

  const TEST_CASES_FAILED = [
    ['', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_EMPTY],
    [' ', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_GAP],
    ['123,1 5,1', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_GAP],
    ['dany,dany', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_DUPLICATION],
    ['daniel,java,js', ERROR_MESSAGE.CAR_NAME_MAX_LENGTH_FIVE],
    ['jun,123456', ERROR_MESSAGE.CAR_NAME_MAX_LENGTH_FIVE],
  ];
  test.each(TEST_CASES_FAILED)('자동차 입력 실패', async (input, message) => {
    mockQuestions(input);

    await expect(app.setCars()).rejects.toThrow(message);
  });
});