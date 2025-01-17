let hx = require('hbuilderx');

/**
 * @description 窗口右下角warning通知框
 */
function showWarningMessage() {
	let resultPromise = hx.window.showWarningMessage('这是一个 Warning 相关的通知框。', ['我知道了','取消']);
	resultPromise.then((result) => {
		if (result === '我知道了') {
			console.log('您点击的是: 我知道了');
		} else if (result === '取消') {
			console.log("您点击的是: 取消");
		}
	});
}

module.exports = {
	showWarningMessage
};
