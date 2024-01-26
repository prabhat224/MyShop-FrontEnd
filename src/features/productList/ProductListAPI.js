export function fetchCount(amount = 1) {
  return new Promise( async (resolve) =>{  
  const resp=await fetch('https://localhost:8080')
  const data=await resp.json()
    resolve({data})
  }
  );
}
