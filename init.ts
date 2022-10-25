type User = {
    name: string, 
    email: string,
    address: {
        city: string,
        state?: string
    }
}

//function(user: User){}