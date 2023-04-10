'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	// console.log('event : ', event)
	const dbjql=uniCloud.databaseForJQL({
		event,context
	})
	let res=await dbjql.collection('label').get();
	//返回数据给客户端
	return {
		code:200,
		msg:'数据请求成功',
		data:res.data
	}
};
