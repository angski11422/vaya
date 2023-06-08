
export async function getAll(){
    const response1 = await fetch('/api/flights')
    .then(data=>{
        if(!data.ok){
            throw new Error('Failed to fetch flights')
        }
        return data.json()
    })
    const response2 = await fetch('/api/hotels')
    .then(data=>{
        if(!data.ok){
            throw new Error('Failed to fetch hotels')
        }
        return data.json()
    })
    const response3 = await fetch('/api/trips')
    .then(data=>{
        if(!data.ok){
            throw new Error('Failed to fetch hotels')
        }
        return data.json()
    })
    return {flights:response1, hotels:response2, trips:response3}



}


