# Sublime Text代码片段


在工具栏选择：**`Tool` > `New Snippet`**. *(工具 > 新片段)*

    <snippet>
        <content><![CDATA[      
    ${1:selector} {
        -webkit-border-radius: ${2:n}px;
        -moz-border-radius: ${2:n}px;
        -o-border-radius: ${2:n}px;
        border-radius: ${2:n}px;
    }
        ]]></content>
        <tabTrigger>radius</tabTrigger>
        <scope>source.css, source.html, source.htm</scope>
    </snippet>
    
使用 `.sublime-snippet` 后缀保存到 `/Sublime Text 2/Packages/User/` 目录即可。

> Windows 下目录对应到 Sublime Text Packages目录下的 `User` 目录。

- `${1:selector}`, `${2:n}` 语法用于设置光标，1标识初始化光标所在位置，2表示接下来按 `tab` 键后的光标位置，可以同时设置多个光标。
- `tabTrigger` 设置输入该标签之间的字符后按下 `tab` 键即可使用代码片段。
- `scope` 设置对那些类型的文件有效，可设置多个。


