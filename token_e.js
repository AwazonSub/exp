(function(){
    var show = false;
    var token;
  
    var menu = document.createElement("div");
    menu.style['width'] = "20%";
	menu.style['background-color'] = "#FFFFFF";
	menu.style['opacity'] = 0.5;
	menu.style['color'] = "black";
	menu.style['float'] = "right";
	menu.style['padding'] = "20px";
    menu.style['pointer-events'] = "auto";
    menu.style.visibility ="hidden";
    document.body.appendChild(menu);

    menu.innerHTML = '<b>現在のトークン：<b><br><input type="text" value=' + token + ' readonly="readonly" id="token" style="width:80%"> <input type="button" value="コピー" id="copy"><br><br><b>トークン書き換え<b><br><input type="text" id="tokenArea" style="width:80%"></input> <input type="button" value="書き換え" id="rewrite">';
    var r = document.getElementById("rewrite");
    var c = document.getElementById("copy");
    var t = document.getElementById("token");

    function keyup(e){
        if(e.key == "i" && !show){
            show = true;
            token = checkToken();
            menu.style.visibility = "visible";
            t.value = token;

        }else if(e.key == "i" && show){
            show = false;
            menu.style.visibility ="hidden";
        }
    }
    function checkToken(){
        var t = {};
        t.t = window.zj["\x67\x65\x74"]("\x73\x74\x61\x72\x76\x65\x5f\x74\x6f\x6b\x65\x6e");
        t.id = window.zj["\x67\x65\x74"]("\x73\x74\x61\x72\x76\x65\x5f\x74\x6f\x6b\x65\x6e\x5f\x69\x64");
        return t.t + " " + t.id;
    }
    function setToken(token){
        var t = token.split(" ");
        window.zj["\x73\x65\x74"]("\x73\x74\x61\x72\x76\x65\x5f\x74\x6f\x6b\x65\x6e",t[0]);
        window.zj["\x73\x65\x74"]("\x73\x74\x61\x72\x76\x65\x5f\x74\x6f\x6b\x65\x6e\x5f\x69\x64",t[1]);
        window.location.href = "https://starve.io/";
    }
    function rewritef(){
        if(window.confirm("トークンを書き換えてページを再読み込みします。")){
            var token = document.getElementById("tokenArea").value;
            setToken(token)
        }else{
            alert("キャンセルしました");
        }
        
    }
    function execCopy(){
        var string = token;
        var tmp = document.createElement("div");
        var pre = document.createElement('pre');
      
        pre.style.webkitUserSelect = 'auto';
        pre.style.userSelect = 'auto';
      
        tmp.appendChild(pre).textContent = string;
      
        var s = tmp.style;
        s.position = 'fixed';
        s.right = '200%';
      
        document.body.appendChild(tmp);
        document.getSelection().selectAllChildren(tmp);
      
        var result = document.execCommand("copy");
      
        document.body.removeChild(tmp);
        return result;
      }

    function init(){
        window.addEventListener("keyup",keyup);

        r.addEventListener("click",rewritef);
        c.addEventListener("click",function(){
            execCopy(token);
        })
    }
    init();
})();