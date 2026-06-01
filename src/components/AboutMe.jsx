import { BriefcaseBusiness, GraduationCap } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="font-['Gilroy'] p-5 w-full h-auto border-2 border-red-400 flex flex-row justify-between gap-5 ">
        <div className="w-1/2 border border-black rounded-lg p-5 flex flex-col gap-5">
            <span className="text-4xl uppercase font-bold"><BriefcaseBusiness />Experience</span>
            <div className="w-full p-3 bg-white rounded-lg shadow-md flex flex-row gap-5">
                <img src="/beztlabs.jpeg" className="h-16 rounded-lg shadow-lg"/>
                <div className="flex flex-col justify-between">
                    <span className="text-2xl font-bold ">Full Stack Developer Trainee</span>
                    <span className="text-lg font-semibold">Oct 2024 - Dec 2024</span>
                </div>
            </div>
        </div>
        <div className="w-1/2 bg-[#F7F7F7] border border-black rounded-lg p-5 flex flex-col gap-5">
            <span className="text-4xl uppercase font-bold flex flex-row gap-3"><GraduationCap className='bg-black p-2 text-white w-10 h-10 outline-8 border-gray-400 rounded-lg' />Education</span>
            <div className="w-full p-3 bg-white rounded-lg shadow-md flex flex-row gap-5">
                <img src="/jiit.png" className="h-16 rounded-lg shadow-lg"/>
                <div className="flex flex-col justify-between">
                    <span className="text-2xl font-bold ">Full Stack Developer Trainee</span>
                    <span className="text-lg font-semibold">Oct 2024 - Dec 2024</span>
                </div>
            </div>

            <div className="w-full p-3 bg-white rounded-lg shadow-md flex flex-row gap-5">
                <img src="/jiit.png" className="h-16 rounded-lg shadow-lg"/>
                <div className="flex flex-col justify-between">
                    <span className="text-2xl font-bold ">Full Stack Developer Trainee</span>
                    <span className="text-lg font-semibold">Oct 2024 - Dec 2024</span>
                </div>
            </div>

            <div className="w-full p-3 bg-white rounded-lg shadow-md flex flex-row gap-5">
                <img src="/jiit.png" className="h-16 rounded-lg shadow-lg"/>
                <div className="flex flex-col justify-between">
                    <span className="text-2xl font-bold ">Full Stack Developer Trainee</span>
                    <span className="text-lg font-semibold">Oct 2024 - Dec 2024</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe