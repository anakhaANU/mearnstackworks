var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkb",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4}
]
// max point team
// var max_pts=point_table.map(team=>team.pts).reduce((pt1,pt2)=>pt1>pt2?pt1:pt2)
// point_table.filter(team=>team.pts==max_pts).forEach(team=>console.log(team))












// var w_count={}
// 8[csk,dc]
// for(let team of point_table){ //  {t_name:"rcb",pld:11,won:7,loss:4,pts:14},  {t_name:"dc",pld:11,won:8,loss:3,pts:16},
//     if(team.won in w_count){

//         w_count[team.won].push (team.t_name)
//     }
//     else{
//         w_count[team.won]=[team.t_name]
//     }
// }
// console.log(w_count)


// map wrt point wise
var w_count={}
// 8[csk,dc]
for(let team of point_table){ //  {t_name:"rcb",pld:11,won:7,loss:4,pts:14},  {t_name:"dc",pld:11,won:8,loss:3,pts:16},
     if(team.pts in w_count){

         w_count[team.pts].push (team.t_name)
     }
     else{
         w_count[team.pts]=[team.t_name]
     }
 }
 console.log(w_count)














// print num of team playing ipl_2k 21
//console.log(point_table.length)

// print team name only
 //point_table.map(team=>team.t_name).forEach(name=>console.log(name))
 

 // print team details whose point > 10

//  point_table.filter(team=>team.pts>10).forEach(team=>console.log(team))

// is kkr playing or not

// var is_playing=point_table.some(team=>team.t_name=="kkr")
// console.log(is_playing)

// sort team wrt loss dec
// point_table.sort=((team1,team2)=>team2.loss - team1.loss)
// console.log(point_table)

// print team details who has max point
// var max_table=point_table.reduce((team1,team2)=>team1.pts>team2.pts?team1:team2)
//  console.log(max_table)
  
 