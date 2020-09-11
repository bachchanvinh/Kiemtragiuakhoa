//Bai 1:Dao nguoc chuoi                 
// let str_input=prompt("str_input")
// let array=str_input.split("")
// console.log(array)
// let array2=[]
// for(let i=array.length-1;i>-1;i--){
//     array2.push(array[i])
// }
// console.log(array2.join(""))


//Bai 2:Viet hoa chu dau                    
// let str = prompt("Nhap cau")
// let chu = str.split(" ")
// let arr=[]
// for(let i =0;i<chu.length;i++){
// let a = chu[i].split("")
// console.log(a)
// let b = a[0]
// b =b.toUpperCase()
// console.log(b)
// a[0]=b
// for(ii=0;ii<a.length;ii++){
// arr.push=a[ii]
// }
// }
// console.log(arr)

//Bai 3:Xoa cac phan tu trung             
// let Arr=[3,3,4,1,2,5,6,3,1,5,6]
// for(let i =0;i<Arr.length;i++){
//    for(let ii =Arr.length-1;ii>i;ii--){
//        if(Arr[i]==Arr[ii]){
//            Arr.splice(ii,1)
//        }
//    }
// }
// console.log(Arr)

//Bai 4:
// let nv=[
//     {
//         ten: "Vinh",
//         tuoi: 22,
//         luong: 1000,
//         chuc: "CEO"
//     },
//     {
//         ten: "Hai",
//         tuoi: 24,
//         luong: 400,
//         chuc: "Tiep tan"
//     },
//     {
//         ten: "Bao",
//         tuoi: 45,
//         luong: 100,
//         chuc: "Bao ve"
//     },
// ]
// while(true){
// let nhap  = prompt(`Chuong trinh quan li nhan vien, xin nhap\nR: De xem thong tin nhan vien\nC: De them nhan vien\nU: De cap nhat thong tin nhan vien\nD: De xoa nhan vien` ).toLowerCase()
// console.log(nhap)
// while(nhap!="r"&& nhap!="c" && nhap!="u" && nhap !="d"){
//     nhap =prompt(`Chuong trinh quan li nhan vien, xin nhap\nR: De xem thong tin nhan vien\nC: De them nhan vien\nU: De cap nhat thong tin nhan vien\nD: De xoa nhan vien` ).toLowerCase()
// }
// //Read
// if(nhap=="r"){
//     let hien=[]
//     for(let i = 0;i<nv.length;i++){
//         hien.push(`${i+1}. ${nv[i].ten}`)
//     }
//     let so= prompt(`Xin ban hay chon nhan vien muon xem ${hien}`)
//     while(isNaN(Number(so))||so == ""||so > nv.length){
//         so = Number(prompt(`Xin ban hay chon nhan vien muon xem ${hien}`))
//     }
//     alert(`Ten: ${nv[so-1].ten}\nTuoi: ${nv[so-1].tuoi}\nMuc luong: ${nv[so-1].luong}\nChuc vu: ${nv[so-1].chuc}`)
// }
// //Creat
// else if(nhap=="c"){
//     let ten = prompt("Xin nhap ten:")
//     let tuoi = Number(prompt("Xin nhap tuoi:"))
//     while(isNaN(tuoi)||tuoi == 0){
//         tuoi = Number(prompt("Xin nhap tuoi bang so va so tuoi khong bang 0:"))
//     }
//     let luong = Number(prompt("Xin nhap muc luong:"))
//     while(isNaN(luong)||luong == 0){
//         luong = Number(prompt("Xin nhap luong bang so"))
//     }
//     let chuc = prompt("Nhap chuc vu")
//     let nvm={ 
//         ten: ten,
//         tuoi: tuoi,
//         luong: luong,
//         chuc: chuc}
//    alert(`Da them nhan vien:\nTen: ${nvm.ten}\nTuoi: ${nvm.tuoi}\nLuong: ${nvm.luong}\nchuc: ${nvm.chuc}`)
// }
// //Update
// else if(nhap=="u"){
//     let hien=[]
//     for(let i = 0;i<nv.length;i++){
//         hien.push(`${i+1}. ${nv[i].ten}`)
//     }
//     let so= prompt(`Xin ban hay chon nhan vien muon cap nhat ${hien}`)
//     while(isNaN(Number(so))||so == ""||so>nv.length){
//         so = Number(prompt(`Xin ban hay chon nhan vien muon cap nhat ${hien}`))
//     }
//     let ten = prompt("Xin nhap ten:")
//     let tuoi = Number(prompt("Xin nhap tuoi:"))
//     while(isNaN(tuoi)||tuoi == 0){
//         tuoi = Number(prompt("Xin nhap tuoi bang so va so tuoi khong bang 0:"))
//     }
//     let luong = Number(prompt("Xin nhap muc luong:"))
//     while(isNaN(luong)||luong == 0){
//         luong = Number(prompt("Xin nhap luong bang so"))
//     }
//     let chuc = prompt("Nhap chuc vu")
//     let nvm={ 
//         ten: ten,
//         tuoi: tuoi,
//         luong: luong,
//         chuc: chuc}
//     nv[so-1]=nvm
//     alert(`Da cap nhat nhan vien vao nhan vien so ${so}:\nTen: ${nvm.ten}\nTuoi: ${nvm.tuoi}\nLuong: ${nvm.luong}\nchuc: ${nvm.chuc}`)
//     console.log(nv)
// }
// //Delete
// else if(nhap == "d"){
//     let hien=[]
//     for(let i = 0;i<nv.length;i++){
//         hien.push(`${i+1}. ${nv[i].ten}`)
//     }
//     let so= prompt(`Xin ban hay chon nhan vien muon cap nhat ${hien}`)
//     while(isNaN(Number(so))||so == ""||so>nv.length){
//         so = Number(prompt(`Xin ban hay chon nhan vien muon cap nhat ${hien}`))
//     }
//     nv.splice(so-1,1)
//     console.log(nv)
// }
// }

//Bai 5:
//5A....................................
// let date =["29","02","2004"]
// for(let i =0; i< date.length;i++){
//     date[i]=Number(date[i])
// }
// console.log(date)
// if(date[2]%400==0){
//     if(date[1]==1||date[1]==3||date[1]==5||date[1]==7||date[1]==8||date[1]==10||date[1]==12){
//         console.log(date.join("/"))
//     }
//     else if(date[1]==4||date[1]==6||date[1]==9||date[1]==11)
//         if(date[0]>30){
//             console.log("Khong hop le")
//         }
//         else console.log(date.join("/"))
//     else{if(date[0]>29){
//         console.log("Khong hop le")
//     }
//     else console.log(date.join("/"))
//     }
    
// }
// else if(date[2]%4==0){
//     namnhuan=true
//     if(date[1]==1||date[1]==3||date[1]==5||date[1]==7||date[1]==8||date[1]==10||date[1]==12){
//         console.log(date.join("/"))
//     }
//     else if(date[1]==4||date[1]==6||date[1]==9||date[1]==11)
//         if(date[0]>30){
//             console.log("Khong hop le")
//         }
//         else console.log(date.join("/"))
//     else{if(date[0]>29){
//         console.log("Khong hop le")
//     }
//     else console.log(date.join("/"))
//     }
// }
// else if(date[2]%4!=0){
//     namnhuan=true
//     if(date[1]==1||date[1]==3||date[1]==5||date[1]==7||date[1]==8||date[1]==10||date[1]==12){
//         console.log(date.join("/"))
//     }
//     else if(date[1]==4||date[1]==6||date[1]==9||date[1]==11)
//         if(date[0]>30){
//             console.log("Khong hop le")
//         }
//         else console.log(date.join("/"))
//     else{if(date[0]>28){
//         console.log("Khong hop le")
//     }
//     else console.log(date.join("/"))
//     }    
//}
//5B....................................
