fetch("https://solidariza-api-production.up.railway.app/distribuidores").then((data)=>{

    return data.json();
}).then((objectData)=>{
    let tableData = "";
    objectData.map((values)=>{
        tableData+=`            
        <tr>
        <td>${values.nome}</td>
        <td>${values.regiao}</td>
        <td>${values.endereco}</td>
        <td>${values.produto}</td>
        <td> R$ ${values.registros.map(data => data.preco)}</td>
    </tr>`
    console.log(values.registros.map(data => data.preco))
    });
    document.getElementById("table_body").innerHTML=tableData;
})

