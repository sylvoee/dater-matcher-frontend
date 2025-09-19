import React from 'react'



export default function Test() {

    let getRecord = async ()=>{
        const res = await fetch(process.env.API_URL);
        const data = await res.json();
        console.log(data);
    }
    // getRecord();


    
    const postRecord = async () => {
      let url = `${process.env.API_URL}/login?api_key=${encodeURIComponent(process.env.APIKEY)}` ;
      console.log("URL : "  + url);

  try {
    const res = await fetch(url, {
      method: "POST", // use uppercase
      headers: {
        "Content-Type": "application/json", // tell server it's JSON
      },
      body: JSON.stringify({
        email: "sylvoee@gmail.com",
        password: "Sylvic@88",
      }),
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    console.log("Response:", data);
  } catch (error) {
    console.error("Error posting record:", error.message);
  }
};

// Call the function
postRecord();


  return (
    <div>
      <h3>
        Login 
        <hr/>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="email"
             placeholder = "email"
             name='email'
             onClick={handleChange}
             
            />
          </div>

          <div>
            <input type="password"
             placeholder = "password"
             name='password'
             onClick={handleChange}
             
            />
          </div>
        </form>
      </h3>
    </div>
  )
}
