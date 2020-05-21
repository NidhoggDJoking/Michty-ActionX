var hx = require("hbuilderx");
//该方法将在插件激活的时候调用
function activate(context) {
	hx.window.setStatusBarMessage('　愛にできることはまだあるかい　,　僕にできることはまだあるかい　!', 0, 'info');
	let disposable = hx.commands.registerCommand('extension.helloWorld', () => {
		hx.window.showInformationMessage('<h3>你好，这是Joking的专属插件扩展!</h3>');
	});
	// showInformationMessage里可以兼容HTML亲测有效
	// 订阅销毁钩子，插件禁用的时候，自动注销该command。
	context.subscriptions.push(disposable);
}
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}
module.exports = {
	activate,
	deactivate
}
