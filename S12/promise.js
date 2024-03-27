function createPromise() {
  return new Promise(function (resolve, reject) {
    resolve({
      status: true,
      results: [{ name: "s1" }, { name: "s2" }, { name: "S3" }],
    });
  });
}

async function handlePromise() {
  try {
    var res = await createPromise();
    console.log(res);
  } catch (error) {
    console.log("error", error);
  }
}

handlePromise();
