import { regex } from "regex";

export function email(subject) {
  let test = false;
  if (subject.includes("@gmail.com")) {
    if (subject.match(subject.match(RegExp(/\d+/g)))) {
      test = true;
    }
  }
  return test;
}

export function name(subject){
    let test = false;
    let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    if(!specialChars.test(subject)){
        test = true
    }
    return test
}