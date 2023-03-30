/*
// 日本でよく使われる紙幣は、10000 円札、5000 円札、1000 円札です。以下、「お札」とはこれらのみを指します。
// 青橋くんが言うには、彼が祖父から受け取ったお年玉袋にはお札がN 枚入っていて、合計でY 円だったそうですが、嘘かもしれません。このような状況がありうるか判定し、ありうる場合はお年玉袋の中身の候補を一つ見つけてください。
// なお、彼の祖父は十分裕福であり、お年玉袋は十分大きかったものとします。
*/

// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	let tmp = input.split(" ");
	let a = parseInt(tmp[0], 10);
	let b = parseInt(tmp[1], 10);

	let res = '-1 -1 -1';
	for(let i=0; i<=a; i++) {
		for(let j=0; i+j<=a; j++) {
			let sum = (i * 10000) + (j * 5000) + ((a -i - j) * 1000);
			if (sum === b) {
				res = `${i} ${j} ${a - i - j}`;
				break;
			}
		}
	}
	//出力
	console.log(res);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
