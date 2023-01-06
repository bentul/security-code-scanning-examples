try {
  console.log("hello world");
} catch (error) {
  // nothing
}

// raise an alert in CodeQL
// https://github.com/github/codeql/blob/main/javascript/ql/src/Statements/DanglingElse.qhelp
if (1==2) {
  console.log("hello world");
  } else {
    console.log("hello world");
  }
