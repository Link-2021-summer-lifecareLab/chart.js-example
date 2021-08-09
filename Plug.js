function getPlugStatus(){
  return new Promise(async (resolve, reject)=>{
    const result = await axios.get('http://210.107.206.176:3002/plug')
    const values = result.data  
    resolve(values)
  }).catch(err=>{
    console.error(err)
  }) 
}