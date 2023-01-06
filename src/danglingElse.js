// test CodeQL
// https://github.com/github/codeql/blob/main/javascript/ql/src/Statements/DanglingElse.qhelp
// this should throw a warning
// depending on the repository security settings a PR is going to blocked

function f() {
	if (1==2)
		if (1==2)
			return 23;
	else
		return 42;
	return 56;
}
