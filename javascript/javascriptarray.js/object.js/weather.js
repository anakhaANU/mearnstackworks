var weather_data=[
    {district:"tvm",temp:30},
    {district:"tvm",temp:31},
    {district:"apy",temp:24},
    {district:"ktm",temp:20},
    {district:"idk",temp:19},
    {district:"ekm",temp:31},
    {district:"tsr",temp:29},
    {district:"mpm",temp:30},
   
    {district:"apy",temp:25},
    {district:"ktm",temp:21},
    {district:"idk",temp:18},
    {district:"ekm",temp:30},
    {district:"tsr",temp:20},
    {district:"mpm",temp:31},

]

var forecast={}
for(let data of weather_data){           
    //{district:"tvm",temp:30}, {district:"tvm",temp:31},
    let district_name=data.district//tvm
    let cur_temp=data.temp //30
    if(district_name in forecast){ //tvm in forecast(no) // tvm in forecast(yes)

        let old_temp=forecast[district_name] //30
        if(cur_temp>old_temp)//31>30
        forecast[district_name]=cur_temp
       


    }
    else{
        forecast[district_name]=cur_temp //{tvm:30}
    }

}
console.log(forecast)


// sort the result wrt temp
                                                                       //    0   1
Object.entries(forecast).sort((temp1,temp2)=>temp1[1]-temp2[1]) //temp1[1]=>tvm,31 so take 1st
