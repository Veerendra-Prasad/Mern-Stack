export function email(subject) {
  let test = false;
  if (subject.includes("@gmail.com")) {
    if (subject.match(subject.match(RegExp(/\d+/g)))) {
      test = true;
    }
  }
  return test;
}

export function image(subject) {
  return subject.endsWith(".jpg") || subject.endsWith(".png");
}

export function mobile(no) {
  const subject = String(no);
  if (subject.length === 10) {
    return /^\d+$/.test(no);
  }
  return false;
}

export function verfiy(){
  let test = false
  
  return test
}