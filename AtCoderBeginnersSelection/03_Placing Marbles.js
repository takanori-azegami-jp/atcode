/*
// すぬけ君は1,2,3 の番号がついた3 つのマスからなるマス目を持っています。
// 各マスには 0 か 1 が書かれており、マス i にはsiが書かれています。
// すぬけ君は 1 が書かれたマスにビー玉を置きます。 ビー玉が置かれるマスがいくつあるか求めてください。
*/

// inputに入力データ全体が入る
function Main(input) {

	//文字列から10進数に変換するときはparseIntを使う
	let a = parseInt(input.charAt(0), 10);
	let b = parseInt(input.charAt(1), 10);
	let c = parseInt(input.charAt(2), 10);
	let d = a + b + c;

	console.log(d);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
