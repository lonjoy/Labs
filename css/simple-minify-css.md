### Simple minify css

**php version**

    $origin = file_get_contents('origin.css');
    
    $minify = preg_replace('/[\s\n]+/', ' ', $origin);
    
    $result = file_put_contents(
    origin.min.css', $minify);
    
**Javascript version**

    <textarea id="origin">[unminify css]</textarea>
    
    <button id="btn" type="button">minify</button>
    
    <textarea id="result">[unminify css]</textarea>
    
    function $(id) {
        return document.getElementById(id);
    }
    var btn = $('btn'),
        origin = $('origin'),
        result = $('result');
        
    btn.addEventListener('click', function(){
    
        result.value = origin.value.replace(/[\s\n]+/g, ' ');
        
    }, false);