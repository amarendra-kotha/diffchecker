<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	</head>
	<body style="margin: 0px;">
		<div id="container" style="height: 100vh;"></div>

		<script src="https://microsoft.github.io/monaco-editor/node_modules/monaco-editor/min/vs/loader.js"></script>
		<script>
			require.config({ paths: { vs: 'https://microsoft.github.io/monaco-editor/node_modules/monaco-editor/min/vs' } });

			require(['vs/editor/editor.main'], function () {
				var diffEditor = monaco.editor.createDiffEditor(document.getElementById('container'), {
                    scrollBeyondLastLine: false,
                    readOnly: false,
                    originalEditable: true,
                    minimap: {
                        enabled: false
                    }
                });

                var originalModel = monaco.editor.createModel("", "text/plain");
                var modifiedModel = monaco.editor.createModel("", "text/plain");

                diffEditor.setModel({
                    original: originalModel,
                    modified: modifiedModel,
                    minimap: false
                });
			});
		</script>
	</body>
</html>
