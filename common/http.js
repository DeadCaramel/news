export default function $http(options){
	const {
		url,
		data
	}=options
	const dataObject={
		user_id:'640eb8e60c801c2ac923dabc',
		// user_id:'',
		...data
	}
	return new Promise((resolve,reject)=>{
		uni.request({
			url:url,
			data:dataObject
		}).then((res)=>{
			if(res.statusCode===200){
				resolve(res.data)
			}else{
				reject(res.result)
			}
		}).catch((err)=>{
			reject(err)
		})
		// 使用unicloud调用云函数
		// uniCloud.callFunction({
		// 	name: url,
		// 	data
		// }).then((res)=>{
		// 	if(res.result.code===200){
		// 		resolve(res.result)
		// 	}else{
		// 		reject(res.result)
		// 	}
		// }).catch((err)=>{
		// 	reject(err)
		// })
	})
}