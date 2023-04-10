'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	// console.log('event : ', event)
	const {name}=event
	const dbjql=uniCloud.databaseForJQL({
		event,context
	})
	let res=await dbjql.collection('article').where('classify == "'+name+'"').field("id,author,browse_count,classify,collection_count,comments_count,cover,mode,create_time,title,thumbs_up_count").get();
	//返回数据给客户端
	return {
		code:200,
		msg:'数据请求成功',
		data:res.data
	}
};
