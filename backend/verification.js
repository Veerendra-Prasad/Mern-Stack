export function email(subject) {
  // function for email verification
  let test = false;
  if (subject.includes("@gmail.com")) {
    if (subject.match(subject.match(RegExp(/\d+/g)))) {
      test = true;
    }
  }
  return test;
}

export function image(subject) {
  // function for image verification
  return subject.endsWith(".jpg") || subject.endsWith(".png");
}

export function mobile(no) {
  // function for mobile number verification
  const subject = String(no);
  if (subject.length === 10) {
    return /^\d+$/.test(no);
  }
  return false;
}
