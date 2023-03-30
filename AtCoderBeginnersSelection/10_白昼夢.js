/*
// 英小文字からなる文字列S が与えられます。
// Tが空文字列である状態から始め、以下の操作を好きな回数繰り返すことでS=T とすることができるか判定してください。
// T の末尾に dream dreamer erase eraser のいずれかを追加する。
*/

// inputに入力データ全体が入る
function Main(input) {
	let reverse = (r) => {
		return r.split('').reverse().join('');
  };

	let words = ['dream', 'dreamer', 'erase', 'eraser'].map(reverse);
	let s = reverse(input.split('\n')[0]);
	let i = 0;

	while(true) {
			let w = words.find((w) => s.startsWith(w, i));
			if (!w) break;
			i += w.length;
	}

	if (s.length === i) {
			console.log('YES');
	} else {
			console.log('NO');
	}
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
