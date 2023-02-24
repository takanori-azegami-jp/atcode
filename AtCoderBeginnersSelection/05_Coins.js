/*
// あなたは、500 円玉をA 枚、100 円玉をB 枚、50 円玉をC 枚持っています。
// これらの硬貨の中から何枚かを選び、合計金額をちょうどX 円にする方法は何通りありますか。
// 同じ種類の硬貨どうしは区別できません。2 通りの硬貨の選び方は、ある種類の硬貨についてその硬貨を選ぶ枚数が異なるとき区別されます。
*/

// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");

	//文字列から10進数に変換するときはparseIntを使う
	let a = parseInt(input[0],10);
	let b = parseInt(input[1],10);
	let c = parseInt(input[2],10);
	let x = parseInt(input[3],10);

	let n = 0;
	for (let i = 0; i <= a; i++){
		for (let j = 0; j <= b;  j++){
			for (let k = 0; k <= c;  k++){
				let m = (500 * i) + (100 * j) + (50 * k);
				if( x === m) ++n;
			}
		}
	}
	//出力
	console.log(n);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
