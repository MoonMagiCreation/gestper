(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[864],{3517:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/peripherals/create",function(){return __webpack_require__(8443)}])},3487:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{rG:function(){return createGateway},RN:function(){return createPeripheral},Gn:function(){return detailsGateway},X:function(){return detailsPeripheral},Um:function(){return listGateway},IX:function(){return listPeripheral},nU:function(){return parseError},w_:function(){return removeGateway},Ok:function(){return removePeripheral},WN:function(){return updateGateway},op:function(){return updatePeripheral}});let DomineEndpoint="https://musalasoft.pythonanywhere.com",Endpoint={list_gateway:"/api/v1/gateway/?format=json",details_gateway:"/api/v1/gateway/details/",create_gateway:"/api/v1/gateway/create/?format=json",remove_gateway:"/api/v1/gateway/remove/",update_gateway:"/api/v1/gateway/update/",list_peripheral:"/api/v1/peripheral/?format=json",details_peripheral:"/api/v1/peripheral/details/",create_peripheral:"/api/v1/peripheral/create/?format=json",remove_peripheral:"/api/v1/peripheral/remove/",update_peripheral:"/api/v1/peripheral/update/"};var axios=__webpack_require__(196);let listGateway=async()=>{let client=axios.ZP.create({baseURL:DomineEndpoint}),r=await client.get(Endpoint.list_gateway,{headers:{"Content-Type":"application/json"}});return r.data},createGateway=async(serial,name,IPv4,peripherals)=>{let client=axios.ZP.create({baseURL:DomineEndpoint}),raw=JSON.stringify({serial:serial,name:name,IPv4:IPv4,peripherals:peripherals}),r=await client.post(Endpoint.create_gateway,raw,{headers:{"Content-Type":"application/json"}});return r.data},removeGateway=async pk=>{let client=axios.ZP.create({baseURL:DomineEndpoint}),r=await client.delete(Endpoint.remove_gateway+pk+"/?format=json",{headers:{"Content-Type":"application/json"}});return r.data},detailsGateway=async pk=>{let client=axios.ZP.create({baseURL:DomineEndpoint}),r=await client.get(Endpoint.details_gateway+pk+"/?format=json",{headers:{"Content-Type":"application/json"}});return r.data},updateGateway=async(pk,serial,name,IPv4,peripherals)=>{let client=axios.ZP.create({baseURL:DomineEndpoint}),raw=JSON.stringify({serial:serial,name:name,IPv4:IPv4,peripherals:peripherals}),r=await client.put(Endpoint.update_gateway+pk+"/?format=json",raw,{headers:{"Content-Type":"application/json"}});return r.data},listPeripheral=async()=>{let client=axios.ZP.create({baseURL:DomineEndpoint}),r=await client.get(Endpoint.list_peripheral,{headers:{"Content-Type":"application/json"}});return r.data},createPeripheral=async(UID,vendor,status)=>{let client=axios.ZP.create({baseURL:DomineEndpoint}),raw=JSON.stringify({UID:UID,vendor:vendor,status:status}),r=await client.post(Endpoint.create_peripheral,raw,{headers:{"Access-Control-Allow-Origin":"stirring-cat-60b0fc.netlify.app","Content-Type":"application/json"}});return r.data},removePeripheral=async pk=>{let client=axios.ZP.create({baseURL:DomineEndpoint}),r=await client.delete(Endpoint.remove_peripheral+pk+"/?format=json",{headers:{"Content-Type":"application/json"}});return r.data},detailsPeripheral=async pk=>{let client=axios.ZP.create({baseURL:DomineEndpoint}),r=await client.get(Endpoint.details_peripheral+pk+"/?format=json",{headers:{"Content-Type":"application/json"}});return r.data},updatePeripheral=async(pk,UID,vendor,status)=>{let client=axios.ZP.create({baseURL:DomineEndpoint}),raw=JSON.stringify({UID:UID,vendor:vendor,status:status}),r=await client.put(Endpoint.update_peripheral+pk+"/?format=json",raw,{headers:{"Content-Type":"application/json"}});return r.data},parseError=e=>{let err="",msg=JSON.parse(e.request.response);return Object.keys(msg).map(key=>{err+=key+": "+msg[key]+"\n"}),err}},4440:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return Layout}});var jsx_runtime=__webpack_require__(5893),index_esm=__webpack_require__(8641),head=__webpack_require__(9008),head_default=__webpack_require__.n(head),dist_index_esm=__webpack_require__(1469),color_mode_dist_index_esm=__webpack_require__(8395),button_dist_index_esm=__webpack_require__(7741),avatar_dist_index_esm=__webpack_require__(3812);__webpack_require__(7294);var NextLink=__webpack_require__(4727),fi_index_esm=__webpack_require__(7219),next_router=__webpack_require__(1163);let Navbar=()=>{let isDesktop=(0,dist_index_esm.Sx)({base:!1,lg:!0}),router=(0,next_router.useRouter)();return(0,jsx_runtime.jsx)(index_esm.xu,{as:"section",pb:{base:"5"},children:(0,jsx_runtime.jsx)(index_esm.xu,{as:"nav",bg:"bg-surface",boxShadow:(0,color_mode_dist_index_esm.ff)("sm","sm-dark"),children:(0,jsx_runtime.jsx)(index_esm.xu,{py:{base:"3",lg:"4"},p:5,children:(0,jsx_runtime.jsxs)(index_esm.kC,{justify:"space-between",children:[(0,jsx_runtime.jsx)(index_esm.Ug,{spacing:"4",children:isDesktop&&(0,jsx_runtime.jsx)(button_dist_index_esm.hE,{variant:"ghost",spacing:"1",children:NAV_ITEMS.map((navItem,index)=>(0,jsx_runtime.jsx)(NextLink.p,{href:{pathname:navItem.href},children:router.pathname==navItem.href||navItem.subHref.find(itm=>itm==router.pathname)?(0,jsx_runtime.jsx)(button_dist_index_esm.zx,{colorScheme:"blue",disabled:!0,children:navItem.label}):(0,jsx_runtime.jsx)(button_dist_index_esm.zx,{colorScheme:"blue",children:navItem.label})},index))})}),isDesktop?(0,jsx_runtime.jsx)(index_esm.Ug,{spacing:"4",children:(0,jsx_runtime.jsx)(avatar_dist_index_esm.qE,{boxSize:"10",name:"Christoph Winston",src:"https://tinyurl.com/yhkm2ek8"})}):(0,jsx_runtime.jsx)(button_dist_index_esm.hU,{variant:"ghost",icon:(0,jsx_runtime.jsx)(fi_index_esm.cur,{fontSize:"1.25rem"}),"aria-label":"Open Menu"})]})})})})},NAV_ITEMS=[{label:"Home",href:"/",subHref:[""]},{label:"Gateways",href:"/gateways",subHref:["/gateways/create"]},{label:"Peripherals",href:"/peripherals",subHref:["/peripherals/create"]}],Layout=param=>{let{children}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(head_default(),{children:[(0,jsx_runtime.jsx)("title",{children:"Peripheral Manager"}),(0,jsx_runtime.jsx)("meta",{charSet:"utf-8"}),(0,jsx_runtime.jsx)("meta",{name:"viewport",content:"width=device-width, initial-s cale=1"})]}),(0,jsx_runtime.jsxs)(index_esm.xu,{children:[(0,jsx_runtime.jsx)(Navbar,{}),children]})]})}},4727:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{p:function(){return NextLink}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),next_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1664),next_link__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8641);let NextLink=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param,ref)=>{let{href,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{href:href,passHref:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.rU,{ref:ref,...props,children:children})})});NextLink.displayName="NextLink"},2158:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{F:function(){return Toast},p:function(){return TypeToast1}});var TypeToast,TypeToast1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8641),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2494),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5868);__webpack_require__(7294);var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7219);(TypeToast=TypeToast1||(TypeToast1={}))[TypeToast.info=1]="info",TypeToast[TypeToast.error=2]="error";let Toast=param=>{let{msgToast,isOpenToast,onCloseToast,type}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:isOpenToast&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.xu,{position:"absolute",bottom:0,right:0,zIndex:1,as:"section",pt:{base:"4",md:"8"},pb:{base:"8",md:"8"},px:{base:"4",md:"8"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.kC,{direction:"row-reverse",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.kC,{direction:{base:"column",sm:"row"},width:{base:"full",sm:"md"},bg:"bg-surface",borderRadius:"lg",overflow:"hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.M5,{display:{base:"none",sm:"flex"},bg:type==TypeToast1.info?"bg-accent":"error",px:"5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.JO,{as:react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.H33,boxSize:"10",color:"on-accent"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Kq,{direction:"row",p:"4",spacing:"3",flex:"1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Kq,{spacing:"2.5",flex:"1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Kq,{spacing:"1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.xv,{fontSize:"sm",color:"muted",children:msgToast})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.P,{transform:"translateY(-6px)",onClick:()=>onCloseToast()})]})]})})})})}},6017:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{g:function(){return Loading}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8641);let Loading=param=>{let{isLoading}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.xu,{height:"50vh",alignItems:"center",justifyContent:"center",display:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"lds-circle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{})})})})}},8443:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return create}});var jsx_runtime=__webpack_require__(5893),layout=__webpack_require__(4440),index_esm=__webpack_require__(9653),dist_index_esm=__webpack_require__(8641),button_dist_index_esm=__webpack_require__(7741),form_control_dist_index_esm=__webpack_require__(3234),input_dist_index_esm=__webpack_require__(979),select_dist_index_esm=__webpack_require__(7026),NextLink=__webpack_require__(4727),fi_index_esm=__webpack_require__(7219),react=__webpack_require__(7294),components_loading=__webpack_require__(6017),responseAPI=__webpack_require__(3487),next_router=__webpack_require__(1163),toast=__webpack_require__(2158);let PeripheralsCreate=()=>{let[loading,setLoading]=(0,react.useState)(!1),[loadingI,setLoadingI]=(0,react.useState)(!0),[check,setCheck]=(0,react.useState)([]),[peripherals,setPeripherals]=(0,react.useState)([]),[pk,setPK]=(0,react.useState)(0),[isEdit,setIsEdit]=(0,react.useState)(!1),router=(0,next_router.useRouter)();(0,react.useMemo)(()=>{if(router){let{edit,pk}=router.query;void 0!=edit?(setIsEdit(!0),(0,responseAPI.X)(pk).then(async response=>{let{UID,vendor,status,pk,IPv4}=response;setPK(pk);let u=[];peripherals.map(per=>{u.push(per.pk)}),setUID(UID),setVendor(vendor),setStatus(status),await update(u),setLoadingI(!1)}).catch(e=>{setLoadingI(!1);let err=(0,responseAPI.nU)(e);onOpenToast(),setType(toast.p.error),setMsgToast(err)})):setLoadingI(!1)}},[check]);let update=async elements=>{setPeripherals(elements)},[UID,setUID]=(0,react.useState)(""),[vendor,setVendor]=(0,react.useState)(""),[status,setStatus]=(0,react.useState)(""),handleCreate=()=>{setLoading(!0),isEdit?(0,responseAPI.op)(pk,UID,vendor,status).then(()=>{onOpenToast(),setType(toast.p.info),setMsgToast("Successfully saved"),setLoading(!1)}).catch(e=>{let err=(0,responseAPI.nU)(e);onOpenToast(),setType(toast.p.error),setMsgToast(err),setLoading(!1)}):(0,responseAPI.RN)(UID,vendor,status).then(()=>{onOpenToast(),setType(toast.p.info),setMsgToast("Successfully saved"),setLoading(!1)}).catch(e=>{setLoading(!1),console.log("e",e);let err=(0,responseAPI.nU)(e);onOpenToast(),setType(toast.p.error),setMsgToast(err)})},[msgToast,setMsgToast]=(0,react.useState)(""),[type,setType]=(0,react.useState)(toast.p.error),{isOpen:isOpenToast,onOpen:onOpenToast,onClose:onCloseToast}=(0,index_esm.qY)();return(0,jsx_runtime.jsxs)(dist_index_esm.xu,{children:[(0,jsx_runtime.jsx)(components_loading.g,{isLoading:loadingI}),(0,jsx_runtime.jsx)(toast.F,{msgToast:msgToast,isOpenToast:isOpenToast,onCloseToast:onCloseToast,type:type}),!loadingI&&(0,jsx_runtime.jsx)(dist_index_esm.xu,{children:(0,jsx_runtime.jsxs)(dist_index_esm.W2,{py:{base:"4",md:"8"},children:[(0,jsx_runtime.jsxs)(dist_index_esm.Ug,{children:[(0,jsx_runtime.jsx)(NextLink.p,{href:{pathname:"/peripherals/"},children:(0,jsx_runtime.jsx)(button_dist_index_esm.zx,{flexShrink:0,variant:"secondary",leftIcon:(0,jsx_runtime.jsx)(fi_index_esm.Ao2,{fontSize:"1.25rem"}),children:"Back"})}),(0,jsx_runtime.jsx)(dist_index_esm.iz,{}),(0,jsx_runtime.jsx)(dist_index_esm.xv,{children:"Peripherals"})]}),(0,jsx_runtime.jsxs)(dist_index_esm.Kq,{spacing:"10",children:[(0,jsx_runtime.jsxs)(form_control_dist_index_esm.NI,{mt:10,children:[(0,jsx_runtime.jsx)(input_dist_index_esm.II,{value:UID,onChange:t=>setUID(t.target.value),id:"small",placeholder:" ","data-peer":!0}),(0,jsx_runtime.jsx)(form_control_dist_index_esm.lX,{htmlFor:"small",variant:"floating",children:"UID"})]}),(0,jsx_runtime.jsxs)(form_control_dist_index_esm.NI,{mt:10,children:[(0,jsx_runtime.jsx)(input_dist_index_esm.II,{value:vendor,onChange:t=>setVendor(t.target.value),id:"small2",placeholder:" ","data-peer":!0}),(0,jsx_runtime.jsx)(form_control_dist_index_esm.lX,{htmlFor:"small2",variant:"floating",children:"Vendor"})]}),(0,jsx_runtime.jsxs)(form_control_dist_index_esm.NI,{mt:10,children:[(0,jsx_runtime.jsxs)(select_dist_index_esm.Ph,{bg:"white",value:status,onChange:t=>setStatus(t.target.value),id:"small3",placeholder:" ","data-peer":!0,children:[(0,jsx_runtime.jsx)("option",{value:"Online",children:"Online"}),(0,jsx_runtime.jsx)("option",{value:"Offline",children:"Offline"})]}),(0,jsx_runtime.jsx)(form_control_dist_index_esm.lX,{htmlFor:"small3",variant:"floating",children:"Status"})]}),(0,jsx_runtime.jsxs)(form_control_dist_index_esm.NI,{display:"flex",children:[(0,jsx_runtime.jsx)(dist_index_esm.xu,{flex:1,p:1,children:(0,jsx_runtime.jsx)(NextLink.p,{href:{pathname:"/gateways/"},children:(0,jsx_runtime.jsx)(button_dist_index_esm.zx,{colorScheme:"red",w:"100%",isDisabled:loading,children:"Cancel"})})}),(0,jsx_runtime.jsx)(dist_index_esm.xu,{flex:1,p:1,children:(0,jsx_runtime.jsx)(button_dist_index_esm.zx,{colorScheme:"blue",w:"100%",isLoading:loading,onClick:handleCreate,children:"Save Peripherals"})})]})]})]})})]})},PeripheralsCreateIndex=()=>(0,jsx_runtime.jsx)(layout.A,{children:(0,jsx_runtime.jsx)(PeripheralsCreate,{})});var create=PeripheralsCreateIndex}},function(__webpack_require__){__webpack_require__.O(0,[584,693,35,774,888,179],function(){return __webpack_require__(__webpack_require__.s=3517)}),_N_E=__webpack_require__.O()}]);