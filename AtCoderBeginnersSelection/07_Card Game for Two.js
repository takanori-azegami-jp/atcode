/*
// N 枚のカードがあります.i 枚目のカードには,aiという数が書かれています.
// Alice と Bob は, これらのカードを使ってゲームを行います.
// ゲームでは, Alice と Bob が交互に 1 枚ずつカードを取っていきます. Alice が先にカードを取ります.
// 2 人がすべてのカードを取ったときゲームは終了し, 取ったカードの数の合計がその人の得点になります.
// 2 人とも自分の得点を最大化するように最適な戦略を取った時, Alice は Bob より何点多く取るか求めてください.
*/

// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	let tmp = input[1].split(" ");
	let x = [];
	for(let i=0; i < tmp.length; i++){
		x[i]= parseInt(tmp[i],10);
	}
	//降順ソート
	x.sort((a, b) => b - a);
	let aSum=0,bSum=0;
	for(let i=0; i < x.length; i++){
		if(i % 2 === 0){
			aSum += x[i];
		}else{
			bSum += x[i];
		}
	}
	let n = aSum - bSum;
	//出力
	console.log(n);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
