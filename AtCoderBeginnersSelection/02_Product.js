// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinputに入る
	let tmp = input.split(" ");

	//文字列から10進数に変換するときはparseIntを使う
	let a = parseInt(tmp[0], 10);
	let b = parseInt(tmp[1], 10);
	let c = a * b;
	
	// 奇数/偶数判定
	if( c % 2 === 0 ){
		//偶数
    	console.log('Even');
	} else {
		//奇数
    	console.log('Odd');
  }
}
 
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
