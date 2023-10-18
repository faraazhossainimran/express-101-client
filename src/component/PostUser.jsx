

const PostUser = () => {
    const handlePostUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const myData = {
           name, email, password
        }
        console.log(myData);
        fetch('http://localhost:5001/users', {
            method: 'POST', 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(myData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
           <h1>User:</h1>
           <form onSubmit={handlePostUser}>
            <input type="text" name="name"></input><br></br>
            <input type="email" name="email"></input><br></br>
            <input type="password" name="password"></input><br></br>
            <button type="submit" name="name">Submit</button>
           </form>
        </div>
    )
}

export default PostUser