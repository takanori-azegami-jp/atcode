/*
// シカのAtCoDeerくんは二次元平面上で旅行をしようとしています。
// AtCoDeerくんの旅行プランでは、時刻0に点(0,0)を出発し、1以上N以下の各iに対し、時刻ti に点(xi,yi) を訪れる予定です。
// AtCoDeerくんが時刻t に 点(x,y) にいる時、時刻t+1には 点(x+1,y),(x−1,y),(x,y+1),(x,y−1) のうちいずれかに存在することができます。
// その場にとどまることは出来ないことに注意してください。
// AtCoDeerくんの旅行プランが実行可能かどうか判定してください。
*/

// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	let tmp = input[0].split(' ');
	let n = parseInt(tmp[0], 10);
	let t1 = 0;
	let x1 = 0;
	let y1 = 0;

	for(let i=0; i<n; i++) {
		tmp = input[i+1].split(' ');
		let t2 = parseInt(tmp[0], 10);
		let x2 = parseInt(tmp[1], 10);
		let y2 = parseInt(tmp[2], 10);

		let dt = t2 - t1;
		let dist = Math.abs(x2 - x1) + Math.abs(y2 - y1);
		if ((dt < dist) || ((dist - dt) % 2 !== 0)) {
			console.log('No');
			return;
		}
		t1 = t2;
		x1 = x2;
		y1 = y2;
	}
	console.log('Yes');
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
