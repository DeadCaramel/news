import $http from '../http.js'
export const get_label=(data)=>{
	return $http({
		url:'http://localhost:8888/label/get_list',
		data
	})
	}
	
	export const update_label=(data)=>{
		return $http({
			url:'http://localhost:8888/label/update',
			data
		})
		}
	
	export const get_article=(data)=>{
		return $http({
			url:'http://localhost:8888/article/get_list',
			data
		})
	}
	
	export const update_like=(data)=>{
		return $http({
			url:'http://localhost:8888/user/update_like',
			data
		})
	}
	
	export const get_article_search=(data)=>{
		return $http({
			url:'http://localhost:8888/article/get_search',
			data
		})
	}
	