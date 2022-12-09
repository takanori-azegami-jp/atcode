// inputに入力データ全体が入る
function Main(input) {

	//文字列から10進数に変換するときはparseIntを使う
	var a = parseInt(input.charAt(0), 10);
	var b = parseInt(input.charAt(1), 10);
	var c = parseInt(input.charAt(2), 10);
	var d = a + b + c;

	console.log(d);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
