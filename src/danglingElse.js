// raise an alert in CodeQL
// https://github.com/github/codeql/blob/main/javascript/ql/src/Statements/DanglingElse.qhelp

function f() {
	if (1==2)
		if (1==2)
			return 23;
	else
		return 42;
	return 56;
}
