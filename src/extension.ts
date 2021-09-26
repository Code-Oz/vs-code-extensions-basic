import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('vs-code-extensions-basic.hello', () => {
		vscode.window.showInformationMessage('hello')
	})

	context.subscriptions.push(disposable)
}

export function deactivate() {}
