// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) 
{
	// Display a message box to the user
	vscode.window.showInformationMessage('Needle has been activated!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('needle.inject', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Needle!');

		vscode.window.showQuickPick(["a", "b"]);

		vscode.workspace.openTextDocument('c:/Users/heitor/Desktop/test.txt').then((document) => {
            let text = document.getText();
		  });

		  var templateManager = new TemplateManager("a","b");
		  
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() 
{
	vscode.window.showInformationMessage('Needle has been deactivated!');
}
