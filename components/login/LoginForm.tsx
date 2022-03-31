import { useRouter } from 'next/router'
import { useState } from 'react';

const LoginForm = () => {
    const router = useRouter()

    const [username, setUsername] = useState("")

    const login = () => {
        window.localStorage.setItem("loggedIn", username);
        router.push('/')
    }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url('https://better.net/wp-content/uploads/2019/08/XOJET-C300-feature.jpg')] bg-no-repeat bg-cover bg-center">
      <form onSubmit={login} className="w-full max-w-md bg-black/50 rounded-md px-20 py-10">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-primary font-bold md:text-right mb-1 md:mb-0 pr-4">
              Username
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
              id="inline-full-name"
              type="text"
              placeholder="Jane Doe"
              required
              autoComplete='off'
              onChange={(e)=> setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-primary font-bold md:text-right mb-1 md:mb-0 pr-4">
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
              id="inline-password"
              type="password"
              required
              placeholder="******************"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-full block text-primary font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Send me your newsletter!</span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow text-black bg-white hover:bg-primary focus:shadow-outline focus:outline-none font-bold py-2 px-10 rounded"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
