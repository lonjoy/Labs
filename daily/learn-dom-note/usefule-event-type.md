## Usefule event type

**UI Event**

<table>
	<thead>
		<tr>
			<th>类型</th>
			<th>接口</th>
			<th>简述</th>
			<th>适用场景</th>
			<th>冒泡</th>
			<th>取消</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>load</code></td>
			<td>Event, UIEvent</td>
			<td>当页面，图片，CSS文件，框架集，<code>object</code>或脚本载入完成时触发</td>
			<td>Element, Document, window, XMLHttpRequest, XMLHttpRequestUpload</td>
			<td>N</td>
			<td>N</td>
		</tr>
		<tr>
			<td><code>unload</code></td>
			<td>UIEvent</td>
			<td>用户代理移除资源(document, element, <code>dedaultView</code>)或者依赖资源(images,css文件等等)c时触发</td>
			<td>window,&lt;body&gt;,&lt;frameset&gt;</td>
			<td>N</td>
			<td>N</td>
		</tr>
		<tr>
			<td><code>abort</code></td>
			<td>Event,UIEvent</td>
			<td>object/image在完成再入前停止加载时触发</td>
			<td>Element, XHR, XHRUpload</td>
			<td>Y</td>
			<td>N</td>
		</tr>
		<tr>
			<td><code>error</code></td>
			<td>Event, UIEvent</td>
			<td>资源加载失败，资源类型错误，脚本执行错误等情况触发</td>
			<td>Element,XHR,XHRUpload</td>
			<td>Y</td>
			<td>N</td>
		</tr>
		<tr>
			<td><code>resize</code></td>
			<td>UIEvent</td>
			<td>文档视图resize时触发</td>
			<td>window,&lt;body&gt;,&lt;frameset&gt;</td>
			<td>Y</td>
			<td>N</td>
		</tr>
		<tr>
			<td><code>scroll</code></td>
			<td>UIEvent</td>
			<td>滚动文档或者元素时触发</td>
			<td>Element,Document,window</td>
			<td>Y</td>
			<td>N</td>
		</tr>
		<tr>
			<td><code>contextmenu</code></td>
			<td>MouseEvent</td>
			<td>元素上右击时触发</td>
			<td>Element</td>
			<td>Y</td>
			<td>Y</td>
		</tr>
	</tbody>
</table>

**Focus Event**

<table>
	<tbody>
		<tr>
			<th><code>blur</code></th>
			<th>FocusEvent</th>
			<th>元素失去焦点触发</th>
			<th>Element(不含body和frameset),Document</th>
			<th>N</th>
			<th>N</th>
		</tr>
		<tr>
			<td><code>focus</code></td>
			<td>FocusEvent</td>
			<td>元素得到焦点触发</td>
			<td>Element(不含body和frameset),Document</td>
			<td>N</td>
			<td>N</td>
		</tr>
		<tr>
			<td><code>focusin</code></td>
			<td>FocusEvent</td>
			<td>获得焦点前，focus之前触发</td>
			<td>Element</td>
			<td>Y</td>
			<td>N</td>
		</tr>
		<tr>
			<td><code>focusout</code></td>
			<td>FocusEvent</td>
			<td>失去焦点前，blur之前</td>
			<td>Element</td>
			<td>Y</td>
			<td>N</td>
		</tr>
	</tbody>
</table>

**Form Event**

- `change`, `reset`, `submit`, `select`
- 适用于表单元素
- 冒泡，可取消

**Mouse Event**

- `click`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`,`mouseout`, `mouseup`, `mouseover`
- `mouseenter` 不冒泡，不可取消
- `mousemove` 冒泡，不可取消
- 其他鼠标事件会冒泡，可取消
- 适用于 Element, Document, window

**Wheel Event**

- `wheel` or `mousewheel`
- 冒泡，可取消
- 适用于 Element, Document, window

**Keyboard Event**

- `keydown`,`keypress`,`keyup`
- 冒泡，可取消
- 适用于 Element, Document

**Touch Event**

- `touchstart`, `touchend`, `touchmove`, `touchenter`, `touchleave`, `touchcancel`
- 适用于 Element, Document, window

**window, body, frameset相关事件**

- `afterprint`, `beforeprint`, `beforunload`, `haschange`, `message`, `offline`, online`, `pagehide`, `pageshow`
- 适用于 window, body, frameset

**document event**

- `readystatechange`, 适用于 Document, XHR
- `DOMContentLoaded`, 适用于 Document

**Drag Event**

- `drag`, `dragstart`, `dragend`, `dragenter`, `dragleave`, `dragover`, `drop`
- 适用于 Element, Document, window