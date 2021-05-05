import { fakeAsync, flush, tick } from "@angular/core/testing";

describe("Async Testing Examples", () => {
  it("Asynchronous test example with Jasmine done()", (done: DoneFn) => {
    let test = false;

    setTimeout(() => {
      test = true;

      expect(test).toBeTruthy();

      done();
    }, 1000);
  });

  it("Asynchronous test example - setTimeout()", fakeAsync(() => {
    let test = false;

    setTimeout(() => {});

    setTimeout(() => {
      test = true;
    }, 1000);
    flush();

    expect(test).toBeTruthy();
  }));

  fit("Asynchronous test example - plain Promise", () => {
    let test = false;
    console.log("Creating promise");

    Promise.resolve()
      .then(() => {
        console.log("Promise first then() evaluated successfully");

        return Promise.resolve();
      })
      .then(() => {
        console.log("Promise second then() evaluated successfully");
        test = true;
      });

    console.log("Running test assertions");

    expect(test).toBeTruthy();
  });
});
