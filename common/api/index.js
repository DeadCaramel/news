const requireApi=require.context(
	'.',
	false,
	/.js$/
)
let module={}
requireApi.keys().forEach((key,index)=>{
	if(key==='./index.js') return
	Object.assign(module,requireApi(key))
})
// console.log(module);
export default module