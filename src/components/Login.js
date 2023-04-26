const Login = () => {
  return (
    <div className="flex flex-col items-center space-y-2 justify-center">
      <div className="w-1/3 rounded-full overflow-hidden border-2 border-victvs-off-white cursor-pointer">
        <img src="profile.png" alt="profile picture" />
      </div>
      <p className="text-md font-medium toggle-text">Daniel Clough</p>
      <p className="text-xs toggle-text">daniel86@victvs.com</p>
    </div>
  );
};

export default Login;
