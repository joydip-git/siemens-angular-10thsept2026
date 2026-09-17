const { BehaviorSubject } = require("rxjs");

class HttpClient {
  get() {
    const store = new BehaviorSubject(undefined);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(async (response) => {
        const data = await response.json();
        store.next(data);
      })
      .catch((err) => {
        store.next(err);
      });
    return store.asObservable();
  }
}

const http = new HttpClient();
http.get().subscribe({
  next: (data) => {
    if (data) {
      console.log(data.slice(0, 5));
    }
  },
  error: (err) => console.log(err),
});
