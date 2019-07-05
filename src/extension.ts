// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import fortuneSource from 'fortune-tweetable';

const showFortune = () => {
	// The code you place here will be executed every time your command is executed
	const aFortune = fortuneSource.fortune();

	const MessageItems: vscode.MessageItem[] = [{ title: 'Show another' }]

	// Display a message box to the user
	vscode.window.showInformationMessage(
		aFortune, {}, ...MessageItems
	).then(
		result => {
			if (result === MessageItems[0]) {
				showFortune()
			}
		}
	);
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.displayFortune', () => {
		// The code you place here will be executed every time your command is executed
		showFortune();
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
