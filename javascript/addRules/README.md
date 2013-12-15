# addRules.js


### `arguments`

	addRule(selector, css);

- `selector`
  - Type: `String` - 标准[CSS选择器](http://www.w3.org/TR/CSS2/selector.html)
- `css`
  - Type: `Object` - CSS样式
  
### Example

    addRule('body', {
        background: '#ffffff',
        'font-size': '14px'
    });
    
    addRule('#dom:after', {
        content: '" "'
    });
    
> 注意:
> 
> - `-` 分割的 CSS 属性
> 
> - 属性值包含 `''`|`""` 的情况

### Reference

- <https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet.insertRule>
- <http://msdn.microsoft.com/en-us/library/ie/aa358796(v=vs.85).aspx>