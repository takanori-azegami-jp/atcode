/*
// 1 以上 N 以下の整数のうち、10 進法での各桁の和がA 以上B 以下であるものの総和を出力せよ。
*/

// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	let tmp = input[0].split(" ");

	//文字列から10進数に変換するときはparseIntを使います
	let a = parseInt(tmp[0], 10);
	let b = parseInt(tmp[1], 10);
	let c = parseInt(tmp[2], 10);

	let s="",x=0,n=0;
	for (let i=1; i <= a; i++){
		s = i.toString();
		x = 0;
		//桁数の合計
		for(let j=0; j < s.length; j++){
			x += parseInt(s[j]);
		}
		if( x >= b && x <= c ) n += i;
	}
	//出力
	console.log(n);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
