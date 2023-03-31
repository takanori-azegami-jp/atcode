/*
// 黒板にN 個の正の整数A1 ,...,AN が書かれています．
// すぬけ君は，黒板に書かれている整数がすべて偶数であるとき，次の操作を行うことができます．
// 黒板に書かれている整数すべてを，2 で割ったものに置き換える．すぬけ君は最大で何回操作を行うことができるかを求めてください．
*/

// inputに入力データ全体が入る
function Main(input) {
	// 2行目のinputをスペースで区切って数字をnmusに配列でセットする
	let nums = input.split('\n')[1].split(' ').map((n) => parseInt(n, 10));

	//　配列の要素が全て2で割りるの、割り切れなくなるまで繰り返す
	let count = 0;
	while(nums.every((n) => (n % 2) === 0)) {
		count++;
		nums = nums.map((n) => n / 2);
	}
	console.log(count);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
