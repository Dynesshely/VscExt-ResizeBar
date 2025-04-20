// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('😎 Congratulations, your extension "resize-bar" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    const disposable = vscode.commands.registerCommand('resize-bar.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World from Resize-Bar!');
    });

    context.subscriptions.push(disposable);

    let resizeSidebar = vscode.commands.registerCommand('extension.resizeSidebar', async () => {
        const config = vscode.workspace.getConfiguration('workbench');
        const currentWidth = config.get('sideBar.width');
        const newWidth = await vscode.window.showInputBox({
            prompt: 'Enter new sidebar width',
            value: currentWidth?.toString()
        });

        if (newWidth) {
            await config.update('sideBar.width', parseInt(newWidth), vscode.ConfigurationTarget.Global);
        }
    });

    context.subscriptions.push(resizeSidebar);
}

// This method is called when your extension is deactivated
export function deactivate() { }
