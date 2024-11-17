export function verify(key ,subject) {
  const test = Object.entries(localStorage).map((entry) => {
    let test = false
    let details = entry[1];
    let data = JSON.parse(details);
    if(entry[0] !== key && data.email === subject){
        test = true
    }
    return test
  });
  console.log(test);
  const finalans = test.every((item) => item === false)
  return !finalans
}
