import ErrorRepository from '../mistake';

test('code - values', () => {
  const testErrRepository = new ErrorRepository();
  testErrRepository.error.set(404, 'Not Found');
  expect(testErrRepository.translate(404)).toBe('Not Found');
});

test('should return error from unknown error', () => {
  const testErrRepository = new ErrorRepository();
  expect(testErrRepository.translate(509)).toBe('Unknown error');
});
