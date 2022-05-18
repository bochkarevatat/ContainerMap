export default class ErrorRepository {
  constructor() {
    this.error = new Map();
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }
}

const newError = new ErrorRepository();
newError.error.set(301, 'Moved Permanently');
newError.error.set(302, 'Moved Temporarily');
newError.error.set(307, 'Temporary Redirect');
newError.error.set(400, 'Bad Request');
newError.error.set(404, 'Not Found ');
