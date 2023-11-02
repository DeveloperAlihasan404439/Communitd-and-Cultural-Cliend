const ApplyNew = () => {
  return (
    <div className="w-11/12 mx-auto my-5 lg:my-20 bg-[#112e45] lg:p-10 rounded-lg shadow-lg md:flex  text-white">
      <div className="border border-[#112e458a] p-5 text-center md:text-left rounded-xl shadow-lg">
        <h1 className=" text-xl lg:text-3xl font-medium pb-4">Apply for fall 2023</h1>
        <p className = 'text-xl'>
        I am eventbrite to apply for the fall 2023 semester. With a strong academic background and a passion for Ali Hasan, I look forward to contributing to the DUED Univercity community. I am dedicated to my academic pursuits and excited to embark on this new educational journey.
        </p>
        <button className="text-2xl font-medium py-2 px-6 border border-orange-500 hover:text-orange-600 bg-orange-600 text-white rounded-lg hover:bg-[#112e45] my-5">
        Apply New
        </button>
      </div>
      <div className="bg-[#184970] p-5 md:pl-10 text-center md:text-left rounded-xl shadow-lg">
        <h1 className=" text-xl lg:text-3xl font-medium pb-4">Apply for scholarship</h1>
        <p className = 'text-xl'>
        I am seeking the Govt Scholarship to alleviate the financial burden of my education. With a strong academic record and a deep commitment to BSC, this scholarship would greatly assist me in achieving my educational goals. Your support would be invaluable, and I am grateful for the opportunity to apply.
        </p>
        <button className="text-2xl font-medium py-2 px-6 border border-orange-500 hover:text-orange-600 bg-orange-600 text-white rounded-lg hover:bg-[#112e45] my-5">
        Apply New
        </button>
      </div>
    </div>
  );
};

export default ApplyNew;
