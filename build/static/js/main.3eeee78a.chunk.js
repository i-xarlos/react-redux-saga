(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{112:function(x,A,t){},115:function(x,A,t){},121:function(x,A,t){"use strict";t.r(A);var I={};t.r(I),t.d(I,"userSagas",function(){return Oe});var u={};t.r(u),t.d(u,"setCurrentUser",function(){return he}),t.d(u,"setListUser",function(){return De}),t.d(u,"addUSer",function(){return Ue}),t.d(u,"updateUser",function(){return Re}),t.d(u,"deleteUser",function(){return fe}),t.d(u,"userFailed",function(){return Ae});var v={};t.r(v),t.d(v,"helper",function(){return Ie});var C={};t.r(C),t.d(C,"selectUser",function(){return O}),t.d(C,"selectUserLoading",function(){return ve}),t.d(C,"selectCurrentUser",function(){return be}),t.d(C,"selectUserList",function(){return Le});var S=t(0),e=t.n(S),oe=t(10),ne=t.n(oe),se=t(70),b=t(41),le=t(83),L=t(17),F=t(64),ie=t(84),ce=t.n(ie);const p="user";var o={USER_TRY:`[${p}]/USER_TRY`,SET_CURRENT_USER:`[${p}]/SET_CURRENT_USER`,LIST_SUCCESS:`[${p}]/LIST_SUCCESS`,ADD_USER:`[${p}]/ADD_USER`,UPDATE_USER:`[${p}]/UPDATE_USER`,DELETE_USER:`[${p}]/DELETE_USER`,USER_FAILED:`[${p}]/USER_FAILED`};const M={currentUser:null,list:[],errors:[],isLoading:null};var me=(a=M,r)=>{switch(r.type){case o.USER_TRY:return{...a,isLoading:!0};case o.SET_CURRENT_USER:return{...a,currentUser:r.payload,isLoading:!1};case o.LIST_SUCCESS:return{...a,isLoading:!1,list:r.payload};case o.ADD_USER:return{...a,isLoading:!1,list:[r.payload,...a.list]};case o.UPDATE_USER:const n=a.list.findIndex(i=>i.id===r.payload.id);return n!==-1?{...a,errors:[{name:o.UPDATE_USER,error:`${n} don't exist`},...a.errors]}:(a.list[n]=r.payload,{...a,isLoading:!1});case o.DELETE_USER:const m=a.list.filter(i=>i.id!==r.payload);return{...a,isLoading:!1,list:m};case o.USER_FAILED:const l=a.errors.findIndex(i=>i.name===r.payload.name);return l===-1?a.errors.push(r.payload):a.errors[l]=r.payload,{...a,isLoading:!1};default:return a}},s=t(14);const g={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\ixarl\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\ixarl\\AppData\\Local\\Temp\\xfs-be65d789",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"132386191350613546",ChocolateyToolsLocation:"C:\\tools",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"LAPTOP",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",configsetroot:"C:\\WINDOWS\\ConfigSetRoot",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",HOME:"C:\\Users\\ixarl",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\ixarl",INIT_CWD:"H:\\www\\threader-web-1",LOCALAPPDATA:"C:\\Users\\ixarl\\AppData\\Local",LOGONSERVER:"\\\\LAPTOP",NODE_ENV:"production",npm:"C:\\Users\\ixarl\\AppData\\Roaming\\npm",npm_config_user_agent:"yarn/2.4.0 npm/? node/14.15.4 win32 x64",npm_execpath:"C:\\Users\\ixarl\\AppData\\Local\\Temp\\xfs-be65d789\\yarn",npm_lifecycle_event:"build",npm_node_execpath:"C:\\Users\\ixarl\\AppData\\Local\\Temp\\xfs-be65d789\\node",NUMBER_OF_PROCESSORS:"8",NVM_HOME:"C:\\Users\\ixarl\\AppData\\Roaming\\nvm",NVM_SYMLINK:"C:\\Program Files\\nodejs",OneDrive:"C:\\Users\\ixarl\\OneDrive",OneDriveConsumer:"C:\\Users\\ixarl\\OneDrive",OPENRDA_INI:"C:\\Program Files (x86)\\CA\\ERwin Data Modeler r7.3\\OpenAccess\\bin\\iwinnt\\openrda.ini",OS:"Windows_NT",PATH:"C:\\Users\\ixarl\\AppData\\Local\\Temp\\xfs-be65d789;C:\\tools\\ruby30\\bin;C:\\Program Files (x86)\\Python38-32\\Scripts\\;C:\\Program Files (x86)\\Python38-32\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\PuTTY\\;C:\\ProgramData\\ComposerSetup\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Users\\ixarl\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\ixarl\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\ixarl\\AppData\\Roaming\\npm;C:\\php;C:\\Users\\ixarl\\AppData\\Roaming\\Composer\\vendor\\bin;C:\\Users\\ixarl\\AppData\\Local\\Android\\Sdk\\platform-tools;C:\\Users\\ixarl\\AppData\\Local\\Yarn\\bin;C:\\Program Files\\Genymobile\\Genymotion\\tools;C:\\Users\\ixarl\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files (x86)\\Yarn\\bin\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\dotnet\\;C:\\Program Files\\nodejs;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files (x86)\\FontForgeBuilds\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\TortoiseGit\\bin;C:\\Program Files\\nodejs\\;C:\\tools\\neovim\\Neovim\\bin;C:\\Program Files\\heroku\\bin;C:\\Program Files\\JetBrains\\PhpStorm 2020.1.4\\bin;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW;.CPL",PhpStorm:"C:\\Program Files\\JetBrains\\PhpStorm 2020.1.4\\bin;",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 158 Stepping 10, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"9e0a",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PSModulePath:"C:\\Users\\ixarl\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\ixarl\\AppData\\Local\\Temp",TMP:"C:\\Users\\ixarl\\AppData\\Local\\Temp",URL_API:"https://threader-api-dot-threader-global.ue.r.appspot.com",URL_API_JSON_API:"https://jsonplaceholder.typicode.com",USERDOMAIN:"LAPTOP",USERDOMAIN_ROAMINGPROFILE:"LAPTOP",USERNAME:"ixarl",USERPROFILE:"C:\\Users\\ixarl",VBOX_MSI_INSTALL_PATH:"C:\\Program Files\\Oracle\\VirtualBox\\",windir:"C:\\WINDOWS",WSLENV:"WT_SESSION::WT_PROFILE_ID",WT_PROFILE_ID:"{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",WT_SESSION:"a07ff362-5c88-430b-9879-123b7b8270d0",ZES_ENABLE_SYSMAN:"1"}.URL_API_JSON_API,j=Math.round(Math.random()*9)+1;console.log("random",j,"URL_API",g,{ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\ixarl\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\ixarl\\AppData\\Local\\Temp\\xfs-be65d789",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"132386191350613546",ChocolateyToolsLocation:"C:\\tools",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"LAPTOP",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",configsetroot:"C:\\WINDOWS\\ConfigSetRoot",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",HOME:"C:\\Users\\ixarl",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\ixarl",INIT_CWD:"H:\\www\\threader-web-1",LOCALAPPDATA:"C:\\Users\\ixarl\\AppData\\Local",LOGONSERVER:"\\\\LAPTOP",NODE_ENV:"production",npm:"C:\\Users\\ixarl\\AppData\\Roaming\\npm",npm_config_user_agent:"yarn/2.4.0 npm/? node/14.15.4 win32 x64",npm_execpath:"C:\\Users\\ixarl\\AppData\\Local\\Temp\\xfs-be65d789\\yarn",npm_lifecycle_event:"build",npm_node_execpath:"C:\\Users\\ixarl\\AppData\\Local\\Temp\\xfs-be65d789\\node",NUMBER_OF_PROCESSORS:"8",NVM_HOME:"C:\\Users\\ixarl\\AppData\\Roaming\\nvm",NVM_SYMLINK:"C:\\Program Files\\nodejs",OneDrive:"C:\\Users\\ixarl\\OneDrive",OneDriveConsumer:"C:\\Users\\ixarl\\OneDrive",OPENRDA_INI:"C:\\Program Files (x86)\\CA\\ERwin Data Modeler r7.3\\OpenAccess\\bin\\iwinnt\\openrda.ini",OS:"Windows_NT",PATH:"C:\\Users\\ixarl\\AppData\\Local\\Temp\\xfs-be65d789;C:\\tools\\ruby30\\bin;C:\\Program Files (x86)\\Python38-32\\Scripts\\;C:\\Program Files (x86)\\Python38-32\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\PuTTY\\;C:\\ProgramData\\ComposerSetup\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Users\\ixarl\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\ixarl\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\ixarl\\AppData\\Roaming\\npm;C:\\php;C:\\Users\\ixarl\\AppData\\Roaming\\Composer\\vendor\\bin;C:\\Users\\ixarl\\AppData\\Local\\Android\\Sdk\\platform-tools;C:\\Users\\ixarl\\AppData\\Local\\Yarn\\bin;C:\\Program Files\\Genymobile\\Genymotion\\tools;C:\\Users\\ixarl\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files (x86)\\Yarn\\bin\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\dotnet\\;C:\\Program Files\\nodejs;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files (x86)\\FontForgeBuilds\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\TortoiseGit\\bin;C:\\Program Files\\nodejs\\;C:\\tools\\neovim\\Neovim\\bin;C:\\Program Files\\heroku\\bin;C:\\Program Files\\JetBrains\\PhpStorm 2020.1.4\\bin;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW;.CPL",PhpStorm:"C:\\Program Files\\JetBrains\\PhpStorm 2020.1.4\\bin;",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 158 Stepping 10, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"9e0a",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PSModulePath:"C:\\Users\\ixarl\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\ixarl\\AppData\\Local\\Temp",TMP:"C:\\Users\\ixarl\\AppData\\Local\\Temp",URL_API:"https://threader-api-dot-threader-global.ue.r.appspot.com",URL_API_JSON_API:"https://jsonplaceholder.typicode.com",USERDOMAIN:"LAPTOP",USERDOMAIN_ROAMINGPROFILE:"LAPTOP",USERNAME:"ixarl",USERPROFILE:"C:\\Users\\ixarl",VBOX_MSI_INSTALL_PATH:"C:\\Program Files\\Oracle\\VirtualBox\\",windir:"C:\\WINDOWS",WSLENV:"WT_SESSION::WT_PROFILE_ID",WT_PROFILE_ID:"{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",WT_SESSION:"a07ff362-5c88-430b-9879-123b7b8270d0",ZES_ENABLE_SYSMAN:"1"});function*de(){try{const a=yield Object(s.b)(fetch,`${g}/users`),r=yield Object(s.b)([a,"json"]);yield Object(s.c)({type:o.LIST_SUCCESS,payload:r})}catch(a){yield Object(s.c)({type:o.USER_FAILED,payload:{name:o.LIST_SUCCESS,error:a.message}})}}function*ue(a){try{const r=yield Object(s.b)(fetch,`${g}/users/${a?a.payload.id:j}`),n=yield Object(s.b)([r,"json"]);yield Object(s.c)({type:o.SET_CURRENT_USER,payload:n})}catch(r){yield Object(s.c)({type:o.USER_FAILED,payload:{name:o.SET_CURRENT_USER,error:r.message}})}}function*pe(){yield Object(s.d)(o.SET_CURRENT_USER,ue)}function*Ee(a){try{const n=yield(yield fetch(`${g}/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.payload)})).json();yield Object(s.c)({type:o.ADD_USER,payload:n.data})}catch(r){yield Object(s.c)({type:o.USER_FAILED,payload:{name:o.ADD_USER,error:r.message}})}}function*Se(){yield Object(s.d)(o.ADD_USER,Ee)}function*Ce(a){try{console.log("++++++++++ delete user",a);const n=yield(yield fetch(`${g}/users/`+a.payload,{method:"DELETE"})).json();yield Object(s.c)({type:o.DELETE_USER,payload:n.data.id})}catch(r){yield Object(s.c)({type:o.USER_FAILED,payload:{name:o.DELETE_USER,error:r.message}})}}function*ge(){yield Object(s.d)(o.DELETE_USER,Ce)}function*Pe(a){try{const n=yield(yield fetch(`${g}/users/`+a.payload.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.payload)})).json();yield Object(s.c)({type:o.UPDATE_USER,payload:n.data})}catch(r){yield Object(s.c)({type:o.USER_FAILED,payload:{name:o.UPDATE_USER,error:r.message}})}}function*ye(){yield Object(s.d)(o.UPDATE_USER,Pe)}function*Oe(){yield Object(s.a)([Object(s.b)(de),pe(),Se(),ge(),ye()])}const he=a=>({type:o.SET_CURRENT_USER,payload:a}),De=a=>({type:o.LIST_SUCCESS,payload:a}),Ue=a=>({type:o.ADD_USER,payload:a}),Re=a=>({type:o.UPDATE_USER,payload:a}),fe=a=>({type:o.DELETE_USER,payload:a}),Ae=a=>({type:o.USER_FAILED,payload:a}),Ie=()=>{};var P=t(32);const O=a=>a[p],ve=Object(P.a)([O],a=>a.isLoading),be=Object(P.a)([O],a=>a.currentUser),Le=Object(P.a)([O],a=>a.list),d={reducer:me,initialState:M,sagas:I,types:o,selectors:C,utils:v,actions:u},Ga={user:d.initialState},Te={user:d.reducer},$a={user:d.types},We={user:d.sagas},Ja={user:d.utils},B={user:d.selectors},Ne={user:d.actions},xe={key:"root",storage:ce.a,whitelist:[""]},Fe=Object(L.combineReducers)(Te);var Me=Object(F.a)(xe,Fe);function*je(){yield Object(s.a)([Object(s.b)(We.user.userSagas)])}var Xa=t(111),Be=t(97),Ve=t(85);const V=Object(Be.a)(),He=[V],H=Object(L.createStore)(Me,Object(Ve.composeWithDevTools)(Object(L.applyMiddleware)(...He)));V.run(je);const we=Object(F.b)(H);var Ye=H,w=t(57),Ge=t(157),$e=t(156),Je=t(67),Xe=t(96),ze=Object(Xe.a)({palette:{primary:{main:"#000"},secondary:{main:"#19857b"},error:{main:Je.a.A400},background:{default:"#fff"}}});function Ke({children:a}){return e.a.createElement(e.a.Fragment,null,e.a.createElement(w.a,null,e.a.createElement("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),e.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap",rel:"stylesheet"})),e.a.createElement($e.a,{theme:ze},e.a.createElement(Ge.a,null),a))}var Ka=t(112),h=t(38),D=t(68),U=t(171),Y=t(181),Ze=t(124),Qe=t(182),T=t(163),G=t(159),$=t(160),J=t(123),X=t(161),z=t(162),qe=t(44),R=t.n(qe),ke=t(73),K=t.n(ke);function _e(){return e.a.createElement(e.a.Fragment,null,e.a.createElement(G.a,null),e.a.createElement($.a,null,["Inbox","Starred","Send email","Drafts"].map((a,r)=>e.a.createElement(J.a,{button:!0,key:a},e.a.createElement(X.a,null,r%2==0?e.a.createElement(K.a,null):e.a.createElement(R.a,null)),e.a.createElement(z.a,{primary:a})))),e.a.createElement(G.a,null),e.a.createElement($.a,null,["All mail","Trash","Spam"].map((a,r)=>e.a.createElement(J.a,{button:!0,key:a},e.a.createElement(X.a,null,r%2==0?e.a.createElement(K.a,null):e.a.createElement(R.a,null)),e.a.createElement(z.a,{primary:a})))))}var f=t(168),ea=t(92),aa=t.n(ea),ta=t(93),ra=t.n(ta),oa=t(75),Z=t.n(oa),na=t(74),Q=t.n(na),sa=t(94),la=t.n(sa),q=t(13);const ia=Object(T.a)(a=>({grow:{flexGrow:1},menuButton:{marginRight:a.spacing(2)},title:{display:"none",[a.breakpoints.up("sm")]:{display:"block"}},offset:{minHeight:`calc(20px + ${a.mixins.toolbar.minHeight}px)`},search:{position:"relative",borderRadius:a.shape.borderRadius,backgroundColor:Object(q.b)(a.palette.common.white,.15),"&:hover":{backgroundColor:Object(q.b)(a.palette.common.white,.25)},marginRight:a.spacing(2),marginLeft:0,width:"100%",[a.breakpoints.up("sm")]:{marginLeft:a.spacing(3),width:"auto"}},searchIcon:{padding:a.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:a.spacing(1,1,1,0),paddingLeft:`calc(1em + ${a.spacing(4)}px)`,transition:a.transitions.create("width"),width:"100%",[a.breakpoints.up("md")]:{width:"20ch"}},sectionDesktop:{display:"none",[a.breakpoints.up("md")]:{display:"flex"}},sectionMobile:{display:"flex",[a.breakpoints.up("md")]:{display:"none"}}}));var k=t(179),y=t(166),E=t(167),ca=t(169),ma=t(170),da=t(180),ua=t(165),pa=t(164);function Ea(a){const{children:r,window:n}=a,m=Object(pa.a)({target:n?n():void 0});return e.a.createElement(ua.a,{appear:!1,direction:"down",in:!m},r)}function Sa(a){const r=ia(),[n,m]=e.a.useState(null),[l,i]=e.a.useState(null),Ma=Boolean(n),ja=Boolean(l),ee=N=>{m(N.currentTarget)},ae=()=>{i(null)},W=()=>{m(null),ae()},Ba=N=>{i(N.currentTarget)},te="primary-search-account-menu",Va=e.a.createElement(k.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:te,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Ma,onClose:W},e.a.createElement(y.a,{onClick:W},"Profile"),e.a.createElement(y.a,{onClick:W},"My account")),re="primary-search-account-menu-mobile",Ha=e.a.createElement(k.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:re,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:ja,onClose:ae},e.a.createElement(y.a,null,e.a.createElement(E.a,{"aria-label":"show 4 new mails",color:"inherit"},e.a.createElement(f.a,{badgeContent:4,color:"secondary"},e.a.createElement(R.a,null))),e.a.createElement("p",null,"Messages")),e.a.createElement(y.a,null,e.a.createElement(E.a,{"aria-label":"show 11 new notifications",color:"inherit"},e.a.createElement(f.a,{badgeContent:11,color:"secondary"},e.a.createElement(Q.a,null))),e.a.createElement("p",null,"Notifications")),e.a.createElement(y.a,{onClick:ee},e.a.createElement(E.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},e.a.createElement(Z.a,null)),e.a.createElement("p",null,"Profile")));return e.a.createElement("div",{className:r.grow},e.a.createElement(Ea,{...a},e.a.createElement(ca.a,null,e.a.createElement(ma.a,null,e.a.createElement(Y.a,{mdUp:!0},e.a.createElement(E.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"open drawer"},e.a.createElement(aa.a,null))),e.a.createElement("div",{className:r.search},e.a.createElement("div",{className:r.searchIcon},e.a.createElement(ra.a,null)),e.a.createElement(da.a,{placeholder:"Search\u2026",classes:{root:r.inputRoot,input:r.inputInput},inputProps:{"aria-label":"search"}})),e.a.createElement("div",{className:r.grow}),e.a.createElement("div",{className:r.sectionDesktop},e.a.createElement(E.a,{"aria-label":"show 4 new mails",color:"inherit"},e.a.createElement(f.a,{badgeContent:4,color:"secondary"},e.a.createElement(R.a,null))),e.a.createElement(E.a,{"aria-label":"show 17 new notifications",color:"inherit"},e.a.createElement(f.a,{badgeContent:17,color:"secondary"},e.a.createElement(Q.a,null))),e.a.createElement(E.a,{edge:"end","aria-label":"account of current user","aria-controls":te,"aria-haspopup":"true",onClick:ee,color:"inherit"},e.a.createElement(Z.a,null))),e.a.createElement("div",{className:r.sectionMobile},e.a.createElement(E.a,{"aria-label":"show more","aria-controls":re,"aria-haspopup":"true",onClick:Ba,color:"inherit"},e.a.createElement(la.a,null)))))),e.a.createElement("div",{className:r.offset}),Ha,Va)}const Ca=Object(T.a)(a=>({root:{flexGrow:1},control:{padding:a.spacing(4)}}));function ga(a){const r=Ca();return e.a.createElement(e.a.Fragment,null,e.a.createElement(w.a,{title:"Threader CMS",defer:!1}),e.a.createElement(U.a,{container:!0,className:r.root,spacing:2},e.a.createElement(U.a,{item:!0,xs:12},e.a.createElement(Sa,null)),e.a.createElement(Y.a,{mdDown:!0},e.a.createElement(U.a,{item:!0,xs:12,sm:2},e.a.createElement(_e,null))),e.a.createElement(U.a,{item:!0,lg:10,md:12},e.a.createElement(Ze.a,{className:r.control},e.a.createElement(D.a,{variant:"h1"},a.width),a.children))))}var Pa=Object(Qe.a)()(ga),ya=t(172),Oa=t(173),ha=t(174),_=t(175),c=t(176),Da=t(177),Ua=t(178);const Ra=Object(T.a)({table:{minWidth:650,marginBottom:"2rem"}});function fa({data:a,onClick:r}){const n=Ra(),m=(l,i)=>{r&&r({name:l,data:i})};return e.a.createElement(ya.a,null,e.a.createElement(Oa.a,{className:n.table,"aria-label":"simple table"},e.a.createElement(ha.a,null,e.a.createElement(_.a,null,e.a.createElement(c.a,null,"Name"),e.a.createElement(c.a,{align:"right"},"Phone"),e.a.createElement(c.a,{align:"right"},"Web"),e.a.createElement(c.a,{align:"right"},"Company"),e.a.createElement(c.a,{align:"right"},"Actions"))),e.a.createElement(Da.a,null,a.map((l,i)=>e.a.createElement(_.a,{key:i},e.a.createElement(c.a,{component:"th",scope:"row"},l.name),e.a.createElement(c.a,{align:"right"},l.phone),e.a.createElement(c.a,{align:"right"},l.website),e.a.createElement(c.a,{align:"right"},l.company.name),e.a.createElement(c.a,{align:"right"},e.a.createElement(Ua.a,{onClick:()=>m("delete",l.id)},"Delete")))))))}const Aa=({users:a,isLoading:r,deleteUser:n})=>{const m=l=>{console.log("data click",l),n(l.data)};return S.createElement(Pa,null,S.createElement(D.a,{variant:"h2",color:"primary"},"Threader Web"),S.createElement(D.a,{paragraph:!0},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quidem? Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum, blanditiis totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quidem? Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum, blanditiis totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quidem? Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum, blanditiis totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quidem? Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum, blanditiis totam."),r?S.createElement("div",null,"Is Loading"):S.createElement(fa,{onClick:m,data:a}),S.createElement(D.a,{paragraph:!0},"Lorem ipsum dolor sit amet coknsectetur adipisicing elit. Esse, quidem? Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum, blanditiis totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quidem? Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum, blanditiis totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quidem? Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum, blanditiis totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quidem? Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum, blanditiis totam."))},Ia=Object(P.b)({users:B.user.selectUserList,isLoading:B.user.selectUserLoading}),va=a=>({deleteUser:r=>a(Ne.user.deleteUser(r))});var ba=Object(b.b)(Ia,va)(Aa),Za=t(115),La=Object.defineProperty,Ta=(a,r,n)=>(typeof r!="symbol"&&(r+=""),r in a?La(a,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[r]=n);class Wa extends e.a.Component{constructor(){super(...arguments);Ta(this,"unsubscribeFromAuth",null)}componentDidMount(){const{checkUserSession:r}=this.props;r()}componentWillUnmount(){this.unsubscribeFromAuth()}render(){return e.a.createElement(e.a.Fragment,null,e.a.createElement(h.d,null,e.a.createElement(h.b,{exact:!0,path:"/",component:ba}),e.a.createElement(h.b,{exact:!0,path:"/signin",render:()=>this.props.currentUser?e.a.createElement(h.a,{to:"/"}):null})))}}const Na=Object(P.b)({currentUser:d.selectors.selectCurrentUser}),xa=a=>({checkUserSession:()=>a(d.actions.setCurrentUser())});var Fa=Object(b.b)(Na,xa)(Wa);ne.a.render(e.a.createElement(b.a,{store:Ye},e.a.createElement(se.a,null,e.a.createElement(le.a,{persistor:we},e.a.createElement(Ke,null,e.a.createElement(Fa,null))))),document.getElementById("root"))}},[[121,1,2]]]);

//# sourceMappingURL=main.3eeee78a.chunk.js.map