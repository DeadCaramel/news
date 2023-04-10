import $http from '../http.js'
export const get_label=(data)=>{
	return $http({
		url:'http://localhost:8888/label/get_list',
		data
	})
	}
	
	export const get_list=(data)=>{
		return $http({
			url:'http://localhost:8888/article/get_list',
			data
		})
	}