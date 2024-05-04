/* eslint-disable no-unused-vars */
const App = require('../index')
const request = require('supertest')

// describe("testing Faculty get , post ,delete,updete",()=>{
//  it("get testing Faculty waxa raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(App).get("/Faculty");

//         expect(resp.statusCode).toBe(200)
// });
// it("post testing Faculty waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response = await request(App).post("/Faculty").send({
//         Facultyname:"tessssst",
//         Creationdate:"2023/11/3"
//     })
//     expect(response.statusCode).toBe(200);
// });
// it("PUT testing Faculty waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).put("/Faculty/6587323bff4ebac299ce5cef").send({
//         Facultyname:"Wax kaly",
//         Creationdate:"2024/4/3"
//     })
//     expect(response.statusCode).toBe(200);
// });
// it("delete testing Faculty waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).delete("/Faculty/6587323bff4ebac299ce5cef")
//     expect(response.statusCode).toBe(200);
// });
// })

describe("testing Student get , post ,delete,updete",()=>{
 it("get testing Student waxa raba ina soo baxo 200 StatusCode", async () => {
        const resp = await request(App).get("/Student");

        expect(resp.statusCode).toBe(200)
});
it("Post testing Student waxa raba ina soo baxo 200 StatusCode", async () => {
    const response =  await request(App).post("/Student").send({

        
    Stdname:"Axmed Huseen",
    phone: "0613777302",
    Address:"Dayniile",
    Password:"12345",
    Gender:"male",
    Email:"Axmed@gmail.com",
    department_id:"65853ddc4805719aef317dd5",
    Class_id:"658542333ee38446d6e3941a"
    })

    expect(response.statusCode).toBe(200);
});
it("PUT testing Student waxa raba ina soo baxo 200 StatusCode", async () => {
    const response =  await request(App).put("/Student/658548284a079824f219f68f").send({
        Stdname:"C/rahman Huseen",
        phone: "0613777302",
        Address:"Dayniile",
        Password:"12345",
        Gender:"male",
        Email:"C/rahman@gmail.com",
        department_id:"65853ddc4805719aef317dd5",
        Class_id:"658542333ee38446d6e3941a"
    })
    expect(response.statusCode).toBe(200);
});
it("delete testing Student waxa raba ina soo baxo 200 StatusCode", async () => {
    const response =  await request(App).delete("/Student/658548284a079824f219f68f")
    expect(response.statusCode).toBe(200);
});
})

// describe("testing images get , post ,delete,updete",()=>{
//  it("get testing images waxa  raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(App).get("/images");

//         expect(resp.statusCode).toBe(200)
// });
// it("Post testing images waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).post("/images").send({

//         guryaha_id:"64946a694627591a69c7833f"
//     })

//     expect(response.statusCode).toBe(200);
// });
// it("PUT testing images waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).put("/images/649147645d744cb4d118a0f8").send({
//         guryaha_id:"64946a694627591a69c7833f"
//     })
//     expect(response.statusCode).toBe(200);
// });
// it("delete testing images waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).delete("/images/649147645d744cb4d118a0f8")
//     expect(response.statusCode).toBe(200);
// });
// })

// describe("testing homestitng get , post ,delete,updete",()=>{
//     it("get testing homestitng waxa  raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(App).get("/homestiting");

//         expect(resp.statusCode).toBe(200)
// });
// it("Post testing homestiting waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).post("/homestiting").send({
//         Title:"test",
//         Logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s",
//         Name:"test",
//         address:"bakaro",
//         email:"test@gmail.com",
//         phone:"0615555555",
//         whatApp:"https://wa.me/252613777303",
//         Facebook:"https://wa.me/252613777303",
//         Instagram:"https://wa.me/252613777303",
//         tiktok:"https://wa.me/252613777303",
//         Herotitle:"test",
//         HeroDiscritpion:"test",
//         HerImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s",
//         Footertext:"Footer test"
//     })

//     expect(response.statusCode).toBe(200);
// });
// it("PUT testing homestiting waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).put("/homestiting/649473526b2ba1b95b534710").send({
//     Title:"test",
//     Logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s",
//     Name:"test",
//     address:"bakaro",
//     email:"test@gmail.com",
//     phone:"06100000000",
//     whatApp:"https://wa.me/252613777303",
//     Facebook:"https://wa.me/252613777303",
//     Instagram:"https://wa.me/252613777303",
//     tiktok:"https://wa.me/252613777303",
//     Herotitle:"test",
//     HeroDiscritpion:"test",
//     HerImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s",
//     Footertext:"Footer test"
//     })
//     expect(response.statusCode).toBe(200);
// });
// it("delete testing homestiting waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).delete("/homestiting/649473526b2ba1b95b534710")
//     expect(response.statusCode).toBe(200);
// });
// })

// describe("testing image_gallary get , post ,delete,updete",()=>{
// it("get testing image_gallary waxa  raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(App).get("/Image_gallary");

//         expect(resp.statusCode).toBe(200)
// });
// it("Post testing Image_gallary waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).post("/Image_gallary").send({
//         img_title:"React_img",
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s"

//     })
//     expect(response.statusCode).toBe(200);
// });
// it("PUT testing Image_gallary waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).put("/Image_gallary/649478337bb26fd0297b6897").send({
//     img_title:"React_img",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cuEPFj47aGCrRYFV9O8l71WzdwOQKRjX0xwCkGQkQ&s"

//     })
//     expect(response.statusCode).toBe(200);
// });
// it("delete testing Image_gallary waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).delete("/Image_gallary/649478337bb26fd0297b6897")
//     expect(response.statusCode).toBe(200);
// });
// })

// describe("testing Out_Client get , post ,delete,updete",()=>{
// it("get testing Out_Client waxa raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(App).get("/Out_Client");

//         expect(resp.statusCode).toBe(200)
// });
// it("Post testing Out_Client waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).post("/Out_Client").send({
//         name:"Client_img",
//         clientlogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iFfHdeZC6jOrZHULmVS7ZBbN5dVEUxyLHYD8MMoB&s"
//     })

//     expect(response.statusCode).toBe(200);

// });
// it("PUT testing Out_Client waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).put("/Out_Client/64947bbe3aaf2ac4a78ddbb6").send({
//         name:"Client_img",
//         clientlogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iFfHdeZC6jOrZHULmVS7ZBbN5dVEUxyLHYD8MMoB&s"
//     })
//     expect(response.statusCode).toBe(200);
// });
// it("delete testing Out_Client waxa raba ina soo baxo 200 StatusCode", async () => {
//     const response =  await request(App).delete("/Out_Client/64947bbe3aaf2ac4a78ddbb6")
//     expect(response.statusCode).toBe(200);
// });
// })

// describe("testing Service get , post ,delete,updete",()=>{
//     it("get testing Service waxa raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(App).get("/Service");

//         expect(resp.statusCode).toBe(200)
// });
//     it("Post testing Service waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(App).post("/Service").send({
//             title:"SIU",
//             description:"Somali Univarcty",
//             icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7fJt6QWPcNOZNonCg-p_2vNle9_O6WRg4mWu4vIktg&s"
//         })
//         expect(response.statusCode).toBe(200);
// });
// it("PUT testing Service waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(App).put("/Service/64947e61a895b2228448f31d").send({
//             title:"SIUO",
//             description:"Somali Univarcty",
//             icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7fJt6QWPcNOZNonCg-p_2vNle9_O6WRg4mWu4vIktg&s"
//         })
//         expect(response.statusCode).toBe(200);
// });
//     it("delete testing Service waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(App).delete("/Service/64947e61a895b2228448f31d")
//         expect(response.statusCode).toBe(200);
// });
// })

// describe("testing contect get , post ,delete,updete",()=>{
//     it("get testing contect waxa raba ina soo baxo 200 StatusCode", async () => {
//         const resp = await request(App).get("/contect");

//         expect(resp.statusCode).toBe(200)
// });
//     it("Post testing contect waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(App).post("/contect").send({
//             name:"xasan",
//             phone:"0614444444",
//             massage:"wuu ficanyahey"
//         })
//         expect(response.statusCode).toBe(200);
// });
// it("PUT testing contect waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(App).put("/contect/6495e970b5eab0e01a2eec4f").send({
//             name:"xasan",
//             phone:"0614444444",
//             massage:"zaid u ficanyahey"
//         })
//         expect(response.statusCode).toBe(200);
// });
//     it("delete testing contect waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(App).delete("/contect/6495e970b5eab0e01a2eec4f")
//         expect(response.statusCode).toBe(200);
// });
// })

// describe("testing Login get , post ,delete,updete",()=>{

//     it("Post testing login waxa raba ina soo baxo 200 StatusCode", async () => {
//         const response =  await request(App).post("/login").send({
//             username:"abdirhman@gmail.com",
//             Password:"123",

//         })
//         expect(response.statusCode).toBe(200);
// });

// })
