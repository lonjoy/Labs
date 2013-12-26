### 开启一个在线编辑器

将以下代码复制到浏览器地址栏即可使用。注意` `` `

online ace editor

    `data:text/html,<style type='text/css'>#js-editor{position:absolute;top:0;right:0;bottom:0;left:0;}</style><div id='js-editor'></div><script src='http://d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js' type='text/javascript' charset='utf-8'></script><script>var jsEditor=ace.edit('js-editor');jsEditor.setTheme('ace/theme/monokai');jsEditor.getSession().setMode('ace/mode/javascript');</script>`

online editor and run js

    `data:text/html,<title>DoJS</title><style type="text/css">body{background:rgb(39,40,34)} .editor{font-size: 16px; position:absolute;top:0;right:0;bottom:0;left:0;margin-top:35px;} button{top:0; background:rgb(47,49,41); color:rgb(241,241,241)}</style><button id="run">Run</button><div id="e" class="editor"></div><script src="https://d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js" type="text/javascript" charset="utf-8"></script><script>var e=ace.edit("e");e.setTheme("ace/theme/monokai");e.getSession().setMode("ace/mode/javascript");var r= document.getElementById("run"); r.addEventListener("click", function(){eval(e.getValue())})</script>`
    
开启可编辑 tab 页

    `data:text/html, <html contenteditable>`