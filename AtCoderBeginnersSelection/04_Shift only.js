/*
// 黒板にN 個の正の整数A1 ,...,AN が書かれています．
// すぬけ君は，黒板に書かれている整数がすべて偶数であるとき，次の操作を行うことができます．
// 黒板に書かれている整数すべてを，2 で割ったものに置き換える．すぬけ君は最大で何回操作を行うことができるかを求めてください．
*/

// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	let tmp = input[1].split(" ");

	//文字列から10進数に変換するときはparseIntを使います
	let a = parseInt(input[0], 10);
	let b=[], c=0, d=false, n=0;
	for (let i = 0; i < 200; i++){
		if ( i === 0 ){
			c = 1;
		}else{
			c = 2 ** i;
		}
		for (let j=0; j < a; j++){
			b[j] = parseInt(tmp[j],10) / c;
			// 奇数/偶数判定
			if( b[j] % 2 !== 0 ){
				//奇数
				d = true;
			}
		}
		if( d === false){
			n++;
		}else{
			break;
		}
	}
	//出力
	console.log(n);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
