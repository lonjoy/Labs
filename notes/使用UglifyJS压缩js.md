# 使用 uglifyjs 压缩 js

============

## 安装

    npm install uglifyjs -g
    
## 压缩js文件

    # -o 输出压缩文件
    uglifyjs ummin.js -o unmin.min.js
    uglifyjs unmin.js > unmin.min.js
    
    # -m 压缩变量名
    uglifyjs unmin.js -m -o unmin.min.js
    
    # -b 格式化代码
    uglifyjs unmin.js -b -o unmin.min.js
    
## 文档

- <https://github.com/mishoo/UglifyJS>
- <https://github.com/mishoo/UglifyJS2>