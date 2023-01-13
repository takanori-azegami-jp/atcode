// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");

	//文字列から10進数に変換するときはparseIntを使う
	let a=[];
	a[1] = parseInt(input[0],10);
	a[2] = parseInt(input[1],10);
	a[3] = parseInt(input[2],10);

	let x = parseInt(input[3],10);

	let n = 0;
	let m = 0;
	for (let i = 0; i <= a[1]; i++){
		for (let j = 0; j <= a[2];  j++){
			for (let k = 0; k <= a[3];  k++){
				n=0;
				n = (500 * i) + (100 * j) + (50 * k);
				if( x === n ){
					m = m + 1;
				}
			}
		}
	}
	//出力
	console.log(m);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
