class Axios {
  constructor() {
    this.origin = window.location.origin;
  }
  get(url) {
    return new Promise((res, rej) => {
      const req = new XMLHttpRequest();
      req.open('GET', `${this.origin + url}`);
      req.send();
      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            res(JSON.parse(req.response));
          } else {
            rej(req.statusText);
          }
        }
      };
    });
  }
  post(url, obj) {
    return new Promise((res, rej) => {
      const req = new XMLHttpRequest();
      req.open('POST', `${this.origin + url}`);
      req.setRequestHeader('Content-type', 'application/json');
      req.send(JSON.stringify(obj));
      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            res(JSON.parse(req.response));
          } else {
            rej(req.statusText);
          }
        }
      };
    });
  }
  delete(url) {
    return new Promise((res, rej) => {
      const req = new XMLHttpRequest();
      req.open('DELETE', `${this.origin + url}`);
      req.send();
      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            res(req.response);
          } else {
            rej(req.statusText);
          }
        }
      };
    });
  }
  patch(url, obj) {
    return new Promise((res, rej) => {
      const req = new XMLHttpRequest();
      req.open('PATCH', `${this.origin + url}`);
      req.setRequestHeader('Content-type', 'application/json');
      req.send(JSON.stringify(obj));
      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            res(req.response);
          } else {
            rej(req.statusText);
          }
        }
      };
    });
  }
}

const axios = new Axios();
export default axios;
