import {Animation} from './index.js';
import {Text, Circle, Arrow, Line, GraphTheory, constants, Point, Array, textTransform} from './mobjects.js';


let {ORIGIN, COLOR} = constants;

(async () => {
	// let bg = new Animation({controls: true, autoReplay: false});
	//
	// let x = new Line(bg);
	// let y = new Line(bg);
	// let circle = new Circle(bg);
	// circle.construct(2, {x: 0, y: - 1});
	// let xt = new Text(bg);
	// let yt = new Text(bg);
	// await xt.construct("x", COLOR.GREEN_B, 8, {x: -2.3, y: -1});
	// await yt.construct("y", COLOR.RED_B, 8, {x: 2.3, y: -1});
	// x.construct({x: -2, y: -1}, {x: 1.3, y: -1}, COLOR.GREEN_B);
	// y.construct({x: 2, y: -1}, {x: 1.3, y: -1}, COLOR.RED_B);
	// xt.draw(200000);
	// x.draw(6);
	// x.delay();
	// y.draw(6);
	// yt.draw(200000);
	// y.delay();
	// let r = new Line(bg);
	// r.construct({x: 0, y: -1}, {x: 0, y: 1}, COLOR.ORANGE);
	// let rt = new Text(bg);
	// await rt.construct("r", COLOR.ORANGE, 7, {x: 0, y: 1.2});
	// rt.draw(200000);
	// r.draw(6);
	// circle.draw(12.58);
	// rt.delay();
	// let rtf = new Text(bg);
	// await rtf.construct("r = \\frac{x + y}{2}", COLOR.ORANGE, 5, {x: -3.5, y: 0});
	// let am = new Text(bg);
	// await am.construct("AM", COLOR.ORANGE, 5, {x: -3.2, y: -0.5});
	// let e = new Text(bg);
	// await e.construct("=", COLOR.ORANGE, 5, {x: -3.37, y: -0.5});
	// rtf.draw(200000);
	// rtf.delay();
	// e.draw(2000000);
	// am.draw(200000);
	// am.delay();
	// e.undraw(200000);
	// rt.undraw(200000);
	// rtf.undraw(200000);
	// am.moveTo({x: -0.2, y: 1.2});
	// am.delay();
	//
	// let p = new Line(bg);
	// let xp = new Line(bg);
	// let yp = new Line(bg);
	// let pt = new Text(bg);
	// p.construct({x: 1.3, y: 0 - 1}, {x: 1.3, y: Math.sqrt(4 - 1.3 * 1.3) - 1}, COLOR.GOLD_C);
	// await pt.construct("p", COLOR.GOLD_C, 7, {x: p.position.x / 2, y: p.position.y / 2 - 0.2});
	// xp.construct({x: -2, y: 0 - 1}, {x: p.head.position.x / 2, y: p.head.position.y / 2}, COLOR.GREEN_C);
	// yp.construct({x: 2, y: 0 - 1}, {x: p.head.position.x / 2, y: p.head.position.y / 2}, COLOR.RED_C);
	//
	// p.delay();
	// xp.draw(6);
	// pt.draw(200000);
	// yp.draw(6);
	// p.draw(6);
	// p.delay();
	// let a = new Arrow(bg);
	// a.construct({x: p.head.position.x / 2 + 1, y: p.head.position.y / 2}, {x: p.head.position.x / 2 - 0.02, y: p.head.position.y / 2 - 0.02}, COLOR.GOLD_C);
	// a.draw();
	// let d90 = new Text(bg);
	// await d90.construct("9 0^0", COLOR.GOLD_C, 7, {x: a.position.x / 2 + 0.07, y: a.position.y / 2});
	// d90.write(200000);
	// a.delay();
	// let ptf = new Text(bg);
	// await ptf.construct("x : p = p : y \\rightarrow p = \\sqrt{xy}", COLOR.GOLD_C, 5, {x: 2.1, y: -0.1});
	// ptf.draw(200000);
	// ptf.delay();
	// let ptt = new Text(bg);
	// await ptt.construct("p = ", COLOR.GOLD_C, 5, {x: 2.1, y: -0.35});
	// ptt.draw(200000);
	// let gm = new Text(bg);
	// await gm.construct("GM", COLOR.GOLD_C, 5, {x: 2.5, y: -0.35});
	// gm.draw(240000);
	// a.delay();
	// a.delay();
	// a.undraw();
	// d90.undraw(200000);
	// ptt.undraw(200000);
	// ptf.undraw(200000);
	// pt.undraw(200000);
	// gm.moveTo({x: pt.position.x / 2, y: pt.position.y / 2});
	// a.checkpoint();
	// let move = xv => {
	// 	p.moveTo({x: xv, y: 0 - 1});
	// 	p.headTo({x: xv, y: Math.sqrt(4 - xv * xv) - 1});
	// 	xp.headTo({x: p.head.position.x / 2, y: p.head.position.y / 2});
	// 	yp.headTo({x: p.head.position.x / 2, y: p.head.position.y / 2});
	// 	x.headTo({x: p.position.x / 2, y: p.position.y / 2});
	// 	y.headTo({x: p.position.x / 2, y: p.position.y / 2});
	// 	gm.moveTo({x: xv, y: gm.position.y / 2});
	// };
	//
	// move(0.5);
	// p.delay();
	// move(0);
	// p.delay();
	// move(-1);
	// p.delay();
	// let amgm = new Text(bg);
	// await amgm.construct("A M \\leq G M", COLOR.YELLOW_B, 8, {x: -4, y: 1.5});
	// amgm.write(240000);
	// move(0.3);
	// p.delay();
	// let eqt = new Text(bg);
	// await eqt.construct("Equality\\ when, x = y", COLOR.YELLOW_B, 6, {x: -4, y: 1});
	// eqt.write(240000);
	// move(0);
	// p.delay();
	// p.delay();
	// move(-1.9);
	// p.delay();
	// move(0.1);
	//
	// // bg.record();
	// bg.play();
	let anim = new Animation({controls: true, autoReplay: false});
	let arr = new Array(anim);
	await arr.construct({position: {x: 0, y: 0}, fontSize: 12, array: ["a_1", "a_2", "a_3", "a_4", "a^5"]});
	arr.draw();
	arr.checkpoint();
	arr.undraw();
	arr.checkpoint();

	let text = new Text(anim);
	await text.construct({content: "Old text", color: "#ffffff", position: ORIGIN, textSize: 12});
	text.draw(300000);
	text.checkpoint();
	text = textTransform(text, "New Text");
	text.checkpoint();

	anim.play();
})();
