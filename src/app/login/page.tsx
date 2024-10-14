"use client";
import {FormEvent, useState} from 'react';

export default function Login(){
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{[key:string]:string}>({});


  const validateFrom = () : { [key: string]: string }=> {
    const newErrors : { [key: string]: string }  = {};
    if (!username){
      newErrors.username = 'Username is required';
    }else if(username.length < 6){
      newErrors.username = 'Username must be at least 6 character';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    console.log(newErrors); 
    return newErrors;
  };

  const loginButton = (e:FormEvent) => {
    e.preventDefault();

    const validationErrors = validateFrom();
    if(Object.keys(validationErrors).length>0){
      setErrors(validationErrors);
    }else{
      setErrors({});
      console.log('form valid',{username,email,password});
      // handle event
    }

  }

  return (
    <div className="container flex flex-col items-center justify-end mx-auto bg-white w-screen h-screen">
      <div className="flex flex-col items-center w-11/12 h-fit p-10 my-12 rounded-3xl shadow-lg border-2 border-grey-100">
        <h1 className="font-sans text-4xl font-bold">Log in</h1>
        <form className="w-full" onSubmit={loginButton}>
          <div>
            <label htmlFor="username" className="">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // required
              className="block focus:ring-2 focus:ring-blue-600 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md my-2 p-2 pl-2 ring-1 ring-blue-600 shadow-sm w-full"
            />
             {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div>
            <label htmlFor="email" className="">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
              className="block focus:ring-2 focus:ring-blue-600 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md my-2 p-2 pl-2 ring-1 ring-blue-600 shadow-sm w-full"
            />
             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // required
              className="block focus:ring-2 focus:ring-blue-600 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md my-2 p-2 pl-2 ring-1 ring-blue-600 shadow-sm w-full"
            />
             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button type="submit" className="bg-blue-600 text-white text-lg w-full leading-6 font-bold py-4 px-3 rounded-3xl mt-10">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}