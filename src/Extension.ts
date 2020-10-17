// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) 
{
	// Display a message box to the user
	//vscode.window.showInformationMessage('Needle has been activated!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('needle.inject', (e) => {
		// The code you place here will be executed every time your command is executed

		// Explorer context path
		let selectedPath = e.fsPath;

		// Display a message box to the user
		//vscode.window.showInformationMessage('Hello World from Needle!');

		var fileTemplateFolder =  'C:/Users/heitor/Developer/.templates/files';
				
		const dirents = fs.readdirSync(fileTemplateFolder, { withFileTypes: true });
		var filesNames = dirents.map(dirent => dirent.name);

		 vscode.window.showQuickPick(filesNames).then(selection => 
			{
				vscode.window.showInformationMessage("Selected " + selection);

				vscode.window.showInputBox().then(filename =>
					{
						var a = 1;

						var content = fs.readFileSync(fileTemplateFolder + "/" + selection);

						var targetPath = selectedPath + "/" + filename;

						fs.writeFileSync(targetPath, content);
					});
		 	}
		 );
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() 
{
	vscode.window.showInformationMessage('Needle has been deactivated!');
}

