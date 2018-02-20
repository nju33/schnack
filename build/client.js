!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.Schnack=t()}(this,function(){"use strict";function n(n){var t,e="";n.user?(e+="\n    ",n.user.admin&&(e+='\n    <div class="schnack-settings">\n        <button class="schnack-action" data-target="notification" data-class="setting" data-action="true">un</button>\n        <button class="schnack-action" data-target="notification" data-class="setting" data-action="false">mute notifications</button>\n    </div>\n    '),e+='\n<div class="schack-login-status">\n    (signed in as <span class="schnack-user">@'+(null==(t=n.user.name)?"":t)+'</span> :: <a class="schnack-signout" href="#">sign out</a>)\n</div>\n<div class="schnack-above">\n    <div class="schnack-form">\n        <textarea class="schnack-body" placeholder="Post a comment. Markdown is supported!"></textarea>\n        <blockquote class="schnack-body" style="display:none"></blockquote>\n        <br>\n        <button class="schnack-preview">Preview</button>\n        <button style="display:none" class="schnack-write">Edit</button>&nbsp;\n        <button class="schnack-button">Send comment</button>&nbsp;\n        <button class="schnack-cancel-reply" style="display:none">Cancel</button>\n    </div>\n</div>\n'):(e+="\nTo post a comment you need to sign in via<br>\n",n.auth.forEach(function(n,s){e+="\n    "+(null==(t=s?" or ":"")?"":t)+'<button class="schnack-signin-'+(null==(t=n.id)?"":t)+'"><i class="icon schnack-icon-'+(null==(t=n.id)?"":t)+'"></i> '+(null==(t=n.name)?"":t)+"</button>\n"}),e+="\n"),e+="\n";var s=[];return n.replies={},n.comments.forEach(function(t){t.reply_to?(n.replies[t.reply_to]||(n.replies[t.reply_to]=[]),n.replies[t.reply_to].push(t)):s.push(t)}),n.comments=s,e+="\n"+(null==(t=n.comments_tpl(n))?"":t)+'\n<style type="text/css">\n.schnack-action > * { pointer-events: none; }\n</style>\n'}function t(n){var t,e="";return e+='<ul class="schnack-comments">\n    ',n.comments.forEach(function(s){e+='\n        <li id="comment-'+(null==(t=s.id)?"":t)+'" data-id="'+(null==(t=s.id)?"":t)+'" class="schnack-comment',s.approved||s.trusted||(e+=" schnack-not-approved"),e+='">\n            <div class="schnack-dateline">\n                <span class="schnack-author">',s.author_url&&(e+='<a href="'+(null==(t=s.author_url)?"":t)+'" target="_blank">'),e+=null==(t=s.display_name||s.name)?"":t,s.author_url&&(e+="</a>"),e+="</span>\n                ",n.user&&n.user.admin&&!s.trusted&&["trust","block"].forEach(function(n){e+='\n                <button class="schnack-action" data-target="'+(null==(t=s.user_id)?"":t)+'" data-class="user" data-action="'+(null==(t=n)?"":t)+'"><i class="icon schnack-icon-'+(null==(t=n)?"":t)+'"></i> <span>'+(null==(t=n)?"":t)+"</span></button>\n                "}),e+='\n                <span class="schnack-date"><a href="#comment-'+(null==(t=s.id)?"":t)+'">'+(null==(t=s.created_at_s)?"":t)+'</a></span>\n            </div>\n            <blockquote class="schnack-body">\n                '+(null==(t=s.comment)?"":t)+"\n            </blockquote>\n            ",s.approved||s.trusted?n.user&&(e+='\n            <button class="schnack-reply" data-reply-to="'+(null==(t=s.id)?"":t)+'">reply</button>\n            '):(e+='\n            <div class="schnack-awaiting-approval">\n                ',n.user&&n.user.admin&&["approve","reject"].forEach(function(n){e+='\n                <button class="schnack-action" data-target="'+(null==(t=s.id)?"":t)+'" data-class="comment" data-action="'+(null==(t=n)?"":t)+'"><i class="icon schnack-icon-'+(null==(t=n)?"":t)+'"></i> <span>'+(null==(t=n)?"":t)+"</span></button>\n                "}),e+="\n                "+(null==(t=n.user.admin?"This":"Your")?"":t)+" comment is still waiting for "+(null==(t=n.user.admin?"your ":"")?"":t)+"approval"+(null==(t=n.user.admin?"":" by the site owner")?"":t)+".\n            </div>\n            "),e+="\n            ",n.replies[s.id]&&(n.comments=n.replies[s.id],e+="\n            "+(null==(t=n.comments_tpl(n))?"":t)+"\n            "),e+="\n        </li>\n    "}),e+="\n</ul>\n"}var e="function"==typeof fetch?fetch.bind():function(n,t){return t=t||{},new Promise(function(e,s){function a(){var n,t=[],e=[],s={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(a,o,c){t.push(o=o.toLowerCase()),e.push([o,c]),n=s[o],s[o]=n?n+","+c:c}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:a,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return e},get:function(n){return s[n.toLowerCase()]},has:function(n){return n.toLowerCase()in s}}}}var o=new XMLHttpRequest;o.open(t.method||"get",n);for(var c in t.headers)o.setRequestHeader(c,t.headers[c]);o.withCredentials="include"==t.credentials,o.onload=function(){e(a())},o.onerror=s,o.send(t.body)})},s=function(n){return document.querySelector(n)},a=function(n){return document.querySelectorAll(n)},o=function(n){this.options=n,this.options.endpoint=n.host+"/comments/"+n.slug,this.initialized=!1,this.firstLoad=!0;var t=new URL(n.host);"localhost"!==t.hostname&&(document.domain=t.hostname.split(".").slice(1).join(".")),this.refresh()};return o.prototype.refresh=function(){var o=this,c=this.options,i=c.target,l=c.slug,r=c.host,u=c.endpoint;e(u,{credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(n){return n.json()}).then(function(c){c.comments_tpl=t,s(i).innerHTML=n(c);var d=s(i+" div.schnack-above"),h=s(i+" div.schnack-form"),p=s(i+" textarea.schnack-body"),f=s(i+" .schnack-form blockquote.schnack-body"),m=window.localStorage.getItem("schnack-draft-"+l);m&&p&&(p.value=m);var y=s(i+" .schnack-button"),k=s(i+" .schnack-preview"),v=s(i+" .schnack-write"),b=s(i+" .schnack-cancel-reply"),g=a(i+" .schnack-reply");if(y&&(y.addEventListener("click",function(n){var t=p.value;e(u,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:t,replyTo:h.dataset.reply})}).then(function(n){return n.json()}).then(function(n){p.value="",window.localStorage.setItem("schnack-draft-"+l,p.value),n.id&&(o.firstLoad=!0,window.location.hash="#comment-"+n.id),o.refresh()})}),k.addEventListener("click",function(n){var t=p.value;p.style.display="none",k.style.display="none",f.style.display="block",v.style.display="inline",e(r+"/markdown",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:t})}).then(function(n){return n.json()}).then(function(n){f.innerHTML=n.html})}),v.addEventListener("click",function(n){p.style.display="inline",k.style.display="inline",f.style.display="none",v.style.display="none"}),p.addEventListener("keyup",function(){window.localStorage.setItem("schnack-draft-"+l,p.value)}),g.forEach(function(n){n.addEventListener("click",function(){h.dataset.reply=n.dataset.replyTo,b.style.display="inline-block",n.parentElement.appendChild(h)})}),b.addEventListener("click",function(){d.appendChild(h),delete h.dataset.reply,b.style.display="none"})),c.user){var w=s("a.schnack-signout");w&&w.addEventListener("click",function(n){n.preventDefault(),e(r+"/signout",{credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(){return o.refresh()})})}else c.auth.forEach(function(n){var t=s(i+" .schnack-signin-"+n.id);t&&t.addEventListener("click",function(t){var e=window.open(r+"/auth/"+n.id,n.name+" Sign-In","resizable,scrollbars,status,width=600,height=500");window.__schnack_wait_for_oauth=function(){e.close(),o.refresh()}})});if(c.user&&c.user.admin){if(!o.initialized){var L=document.createElement("script");L.setAttribute("src",r+"/push.js"),document.head.appendChild(L),o.initialized=!0}var E=function(n){var t=n.target.dataset;e(r+"/"+t.class+"/"+t.target+"/"+t.action,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:""}).then(function(){return o.refresh()})};document.querySelectorAll(".schnack-action").forEach(function(n){n.addEventListener("click",E)})}if(o.firstLoad&&window.location.hash.match(/^#comment-\d+$/)){var _=document.querySelector(window.location.hash);_.scrollIntoView(),_.classList.add("schnack-highlight"),o.firstLoad=!1}})},o});
