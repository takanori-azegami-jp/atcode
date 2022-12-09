// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	tmp = input[1].split(" ");

	//文字列から10進数に変換するときはparseIntを使います
	let a = parseInt(input[0], 10);
	let b = [];
	let c = 0;
	let d = false;
	let n = 0;
	for (let i = 0; i < 200; i++){
		if ( i === 0 ){
			c = 1;
		}else{
			c = 2 ** i;
		}
		for (let j = 0; j < a; j++){
			b[j] = parseInt(tmp[j],10) / c;
			// 奇数/偶数判定
			if( b[j] % 2 !== 0 ){
				//奇数
				d = true;
			}
		}
		if( d === false){
			n = n + 1;
		}else{
			break;
		}
	}
	//出力
	console.log(n);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
