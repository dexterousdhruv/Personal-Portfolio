const About = () => {

  return (
    <div id='about' className="py-32 px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto animate-fade-in">
        <div className="flex items-center mb-8 gap-6">
          <h1 className="text-4xl font-medium">About</h1>
          <div className='w-full max-w-52 h-[1px] bg-foreground/50 '></div>
        </div>        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-foreground/70 mb-6">
              In my present role as a <span className='text-white font-medium'>Web3 Full Stack Engineer</span>, I specialize in building decentralized finance (DeFi) applications. I focus on creating intuitive user interfaces for complex financial operations like cryptocurrency staking and farming, ensuring seamless integration with smart contracts. 
            

            </p>
            <p className="text-foreground/70 mb-6">
              As I gradually penetrate into the intricacies of the backend development and software engineering in general, I tend to realize that software engineering is equally philosophical as much as it is technical.

            </p>
          </div>
          
          <div className="h-full aspect-square max-h-96 mx-auto  bg-[#263045] rounded-md flex items-center justify-center shadow-lg animate-pulse duration-50 float-animation">
            <img src="https://user-images.githubusercontent.com/74038190/212748830-4c709398-a386-4761-84d7-9e10b98fbe6e.gif" className='w-full  '  alt="" />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
