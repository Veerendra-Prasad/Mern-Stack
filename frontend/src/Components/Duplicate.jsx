export function verify(subject) {
  const test = Object.entries(localStorage).map((entry) => {
    let test = false
    let details = entry[1];
    let data = JSON.parse(details);
    if(data.email === subject){
        test = true
    }
    return test
  });
  console.log(test);
  const finalans = test.every((item) => item === false)
  return !finalans
}
